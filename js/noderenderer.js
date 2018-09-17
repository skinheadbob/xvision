import * as d3 from 'd3'

import {FocusRenderer} from './focusRenderer'

import '../css/node.css'

export class NodeRenderer extends FocusRenderer {
    constructor(xvision) {
        super(xvision);
    }

    get globalGraphGroup() {
        return this.xvision.globalGraphNodeGroup;
    }

    get cssClass() {
        return 'node';
    }

    shouldHighlight(node, highlightNodeNameSet) {
        return highlightNodeNameSet.has(node.name);
    }

    shouldFocus(node, focusNodeNameArray) {
        return focusNodeNameArray.includes(node.name);
    }

    bindGraphNode() {
        let xvision = this.xvision;
        let graphOption = this.xvision.graphOption;
        let globalGraphNodeGroup = this.xvision.globalGraphNodeGroup;
        let getForceNodes = this.xvision.simulation.nodes;

        let gNode = globalGraphNodeGroup.selectAll('g')
            .data(getForceNodes(), node => {
                return JSON.stringify(node);
            });

        gNode.enter()
            .append(node => {
                let gNodeGroup = d3.select(document.createElementNS(d3.namespaces.svg, 'g'));
                initGroup(gNodeGroup, node, xvision);

                appendNodeBody(gNodeGroup, graphOption.NODE_RADIUS);
                appendRoleName(gNodeGroup, node, graphOption.NODE_RADIUS);

                return gNodeGroup.node();
            });

        gNode.exit()
            .remove();

        return gNode;
    }

    tick() {
        this.xvision.globalGraphNodeGroup.selectAll('.node')
            .attr('transform', node => `translate(${ node.x.toFixed(3) },${ node.y.toFixed(3)})`);
    }
}

function highlight(nodeName, OPTION_STREAM, container) {
    container.selectAll(`.${OPTION_STREAM.dataClass(nodeName)}`)
        .classed('highlight', true)
        .classed(OPTION_STREAM.CSS_CLASS, true);
}

function initGroup(gNodeGroup, node, xvision) {
    let graphOption = xvision.graphOption;
    let simulation = xvision.simulation;

    gNodeGroup
        .classed('node', true)
        .classed(`${graphOption.toCssName(node.name)}`, true)
        .on("click", function () {
            // stop svg.click from taking over
            d3.event.stopPropagation();

            xvision.flipNodeFocus(node.name, true, d3.mouse(xvision.svg.node()));
        })
        .call(
            d3.drag()
                .on("start", (d) => {
                    if (!d3.event.active) {
                        simulation.alphaTarget(1).restart();
                    }
                    d.fx = d.x;
                    d.fy = d.y;
                })
                .on('drag', (d) => {
                    d.fx = d3.event.x;
                    d.fy = d3.event.y;
                })
                .on('end', (d) => {
                    if (!d3.event.active) {
                        simulation.alphaTarget(0).restart();
                    }
                    d.fx = null;
                    d.fy = null;
                })
        );

    let statusClass = 'normal';
    if (graphOption.F_IS_NODE_UNKNOWN(node)) {
        statusClass = 'unknown';
    } else if (graphOption.F_IS_NODE_WARNING(node)) {
        statusClass = 'warning';
    } else if (graphOption.F_IS_NODE_ERROR(node)) {
        statusClass = 'error';
    }
    gNodeGroup.classed(statusClass, true);
}

function appendNodeBody(gNodeGroup, NODE_RADIUS) {
    gNodeGroup.append("circle")
        .classed("node-body", true)
        .attr("r", NODE_RADIUS);
}

function appendRoleName(gNodeGroup, node, NODE_RADIUS) {
    let text = d3.select(document.createElementNS(d3.namespaces.svg, 'text'))
        .classed("node-name", true)
        .attr("x", NODE_RADIUS + 1)
        .attr("y", "0.3em")
        .attr("filter", "url(#themeLabelFilter)")
        .text(() => node.name);
    gNodeGroup.append(() => text.node());
}
