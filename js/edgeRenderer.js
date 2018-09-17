import * as d3 from 'd3'

import {FocusRenderer} from './focusRenderer'

import '../css/edge.css'

export class EdgeRenderer extends FocusRenderer {
    constructor(xvision) {
        super(xvision);
    }

    get globalGraphGroup() {
        return this.xvision.globalGraphEdgeGroup;
    }

    get cssClass() {
        return 'edge';
    }

    shouldHighlight(edge, highlightNodeNameSet) {
        return highlightNodeNameSet.has(edge.sourceRef.name)
            && highlightNodeNameSet.has(edge.targetRef.name);
    }

    shouldFocus(edge, focusNodeNameArray) {
        return focusNodeNameArray.includes(edge.sourceRef.name)
            && focusNodeNameArray.includes(edge.targetRef.name);
    }

    shouldRemoveDimForAll() {
        return super.shouldRemoveDimForAll() && this.xvision.nodeRenderer.shouldRemoveDimForAll();
    }

    bindGraphEdge() {
        let xvision = this.xvision;
        let graphOption = this.xvision.graphOption;
        let globalGraphEdgeGroup = this.xvision.globalGraphEdgeGroup;
        let edges = this.xvision.dataStore.edges;
        let svgID = this.xvision.svg.attr('id');

        let gEdge = globalGraphEdgeGroup.selectAll('g')
            .data(edges, (edge) => {
                return JSON.stringify(edge);
            });

        gEdge.enter()
            .append(function (edge) {
                let gEdgeGroup = d3.select(document.createElementNS(d3.namespaces.svg, 'g'));

                initGroup(gEdgeGroup, edge, xvision);
                appendArc(gEdgeGroup, edge, svgID, graphOption);
                tagStatus(gEdgeGroup, edge, graphOption);

                return gEdgeGroup.node();
            });

        gEdge.exit()
            .remove();

        return gEdge;
    }

    tick() {
        let xvision = this.xvision;
        this.xvision.globalGraphEdgeGroup.selectAll('.edge')
            .each(function (edge) {// do NOT use fat arrow (will mess up 'this')
                d3.select(this).select(".edge-arc")
                    .attr('d', () => calcArc(edge, xvision.graphOption.NODE_RADIUS));
            })
    }

    renderFocus() {
        super.renderFocus();

        if (this.xvision.graphOption.ENABLE_PACKET) {
            this.refreshPacket();
        }
    }

    clearPacket() {
        this.xvision.globalGraphEdgeGroup
            .selectAll('.edge .edge-packet').remove();
    }

    refreshPacket() {
        let self = this;

        this.xvision.globalGraphEdgeGroup
            .selectAll('.edge:not(.highlight) .edge-packet').remove();
        this.xvision.globalGraphEdgeGroup
            .selectAll('.edge.highlight')
            .each(function () {
                let gEdge = d3.select(this);
                //if highlight but not transmitting
                if (gEdge.selectAll('.edge-packet').empty()) {
                    self.transmitPacket(gEdge);
                }
            })
    }

    transmitPacket(gEdge) {
        let self = this;
        extractPillars(gEdge.data()[0].histogram)
            .forEach((pillar) => {
                transmitPillar(gEdge, pillar,
                    //TODO make it less complicated
                    () => {
                        let svgID = self.xvision.svg.attr('id');
                        let graphOption = self.xvision.graphOption;
                        let edge = gEdge.data()[0];
                        return buildArcID(svgID, edge.sourceRef.name, edge.targetRef.name, graphOption);
                    });
            });
    }

    clearSelected() {
        this.globalGraphGroup.selectAll('.edge.selected')
            .classed('selected', false);
    }
}

function initGroup(gEdgeGroup, edge, xvision) {
    let graphOption = xvision.graphOption;
    let sourceMap = xvision.dataStore.sourceMap;

    gEdgeGroup
        .attr("class", function () {
            let from = graphOption.UPSTREAM.dataClass(edge.sourceRef.name);
            let to = graphOption.DOWNSTREAM.dataClass(edge.targetRef.name);
            let dual = (
                (sourceMap[edge.sourceRef.name] !== undefined &&
                sourceMap[edge.sourceRef.name].includes(edge.targetRef.name))
                    ? graphOption.DUALSTREAM.CSS_CLASS : "" );
            return "edge " + from + " " + to + " " + dual;
        })
        .on('click', function () {
            // stop svg.click from taking over
            d3.event.stopPropagation();

            if (gEdgeGroup.classed('selected')) {
                xvision.emit('deselect-edge', edge);
                gEdgeGroup.classed('selected', false);
            } else {
                xvision.emit('select-edge', edge);
                gEdgeGroup.classed('selected', true);
            }
        })
}

function appendArc(gEdgeGroup, edge, svgID, graphOption) {
    gEdgeGroup.append("path")
        .classed("edge-arc", true)
        .attr('id', () => {
            return buildArcID(svgID, edge.sourceRef.name, edge.targetRef.name, graphOption);
        })
        .attr("marker-end", "url(#arrow)")
        .on("mouseover", function () {
            d3.select(this).classed("highlight", true);
        })
        .on("mouseout", function () {
            d3.select(this).classed("highlight", false);
        });
}

function tagStatus(gEdgeGroup, edge, graphOption) {
    if (graphOption.F_IS_EDGE_WARNING(edge)) {
        gEdgeGroup.classed('warning', true);
    } else if (graphOption.F_IS_EDGE_ERROR(edge)) {
        gEdgeGroup.classed('error', true);
    } else {
        gEdgeGroup.classed('normal', true);
    }
}

function buildArcID(svgID, from, to, graphOption) {
    return `${svgID}-edge-arc-${graphOption.toCssName(from)}-${graphOption.toCssName(to)}`;
}

function calcArc(d, NODE_RADIUS) {
    let diffX = d.targetRef.x - d.sourceRef.x,
        diffY = d.targetRef.y - d.sourceRef.y;
    let pathLength = Math.sqrt((diffX * diffX) + (diffY * diffY));

    let offsetX = (diffX * NODE_RADIUS) / pathLength,
        offsetY = (diffY * NODE_RADIUS) / pathLength;

    return "M " + (d.sourceRef.x + offsetX).toFixed(3) + "," + (d.sourceRef.y + offsetY).toFixed(3)
        + " L " + (d.targetRef.x - offsetX).toFixed(3) + "," + (d.targetRef.y - offsetY).toFixed(3);
}

function extractPillars(histogram) {
    return Object.entries(histogram).map(entry => {
        if (parseInt(entry[0])) {
            return {
                respTime: parseInt(entry[0]),
                respCnt: entry[1],
                respType: 'edge-packet-normal'
            };
        } else if (entry[0] === 'Error') {
            return {
                respTime: 3,
                respCnt: entry[1],
                respType: 'edge-packet-error'
            };
        } else if (entry[0] === 'Slow') {
            return {
                respTime: 7,
                respCnt: entry[1],
                respType: 'edge-packet-slow'
            };
        }
        console.error(`cannot parse histogram pillar: ${entry[0]},${entry[1]}`);
    });
}

function transmitPillar(gEdge, pillar, edgeArcIDGetter) {
    let respCnt = pillar.respCnt;
    if (respCnt == 0) {
        return;
    }
    let respTime = pillar.respTime;

    let packetMovementDuration = calcPacketMovementDuration(respTime, calcDistance(gEdge));
    let packetCount = calcPacketCount(respCnt);

    addPackets(gEdge, packetMovementDuration, packetCount, pillar.respType, edgeArcIDGetter())
}

function addPackets(gEdge, packetMovementDuration, packetCount, packetClass, edgeArcID) {
    let interval = packetMovementDuration / packetCount;
    for (let idx = 1; idx <= packetCount; idx++) {
        let gPacket = gEdge.append('circle')
            .classed('edge-packet', true)
            .classed(packetClass, true);
        let animateMotion = gPacket.append('animateMotion')
            .attr('dur', `${packetMovementDuration}ms`)
            .attr('begin', `${(idx - 1) * interval}ms`)
            .attr('repeatCount', 'indefinite');

        animateMotion.append('mpath')
            .attr('xlink:href', `#${edgeArcID}`);
    }
}

function calcDistance(gEdge) {
    let source = gEdge.data()[0].sourceRef;
    let target = gEdge.data()[0].targetRef;
    return Math.sqrt(
        Math.pow((target.x - source.x), 2)
        + Math.pow((target.y - source.y), 2));
}

function calcPacketMovementDuration(respTime, distance) {
    return d3.scaleLinear()
        .range([2000, 5000])
        .domain([0, 600 * 5])
        (respTime * distance);
}

function calcPacketCount(respCnt) {
    return Math.ceil(
        d3.scaleLinear()
            .range([1, 5])
            .domain([1, 10000])
            (respCnt));
}
