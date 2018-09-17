import * as d3 from 'd3'
import numeral from 'numeral'
import EventEmitter from 'events'
import * as gl from 'graphlib'
import {DEFAULT_GRAPH_OPTION} from './option'
import {NodeRenderer} from './nodeRenderer'
import {EdgeRenderer} from './edgeRenderer'
import {EphemeralRenderer} from './ephemeralRenderer'
import {forceTierBFS, forceTierDFS} from './forceTier'

import '../css/overall.css'

export class XVision extends EventEmitter {
    constructor(svgEleID, customGraphOption = {}) {
        super();
        this.graphOption = Object.assign({}, DEFAULT_GRAPH_OPTION, customGraphOption);
        this.setMaxListeners(0);

        this.svg = d3.select(`#${svgEleID}`).classed('xvision-svg', true);
        this.width = this.svg.node().getBoundingClientRect().width;
        this.height = this.svg.node().getBoundingClientRect().height;

        //TODO check if svg has any child
        this.container = appendContainer(this.svg);
        this.globalGraphNodeGroup = this.container.append('g').attr('class', 'node-group');
        this.globalGraphEdgeGroup = this.container.append('g').attr('class', 'edge-group');
        this.ephemeralGroup = this.container.append('g').attr('class', 'ephemeral-group');
        this.zoom = createZoom(this.container, this.graphOption);
        this.simulation = d3.forceSimulation();

        this.setLayoutFunc = undefined;

        this.dataStore = {};

        //prevent zoom.dblclick from colliding with node.dblclick
        this.svg.call(this.zoom).on('dblclick.zoom', null);

        this.nodeRenderer = new NodeRenderer(this);
        this.edgeRenderer = new EdgeRenderer(this);
        this.ephemeralRenderer = new EphemeralRenderer(this);

        this.svg.on("click", () => {
            this.dataStore.focusNodeNameArray.splice(0, this.dataStore.focusNodeNameArray.length);
            syncHighlightFromFocus(this);
            this.renderFocus();

            this.edgeRenderer.clearSelected();

            this.emit('click-blank', d3.mouse(this.svg.node()));
        });
    }

    draw(graphResp, focusNodeNameArray = []) {
        this.refreshDataStore(graphResp);

        this.simulation.nodes(this.dataStore.nodes)
            .on('tick', () => {
                this.nodeRenderer.tick();
                this.edgeRenderer.tick();
                this.ephemeralRenderer.tick();
            });

        this.nodeRenderer.bindGraphNode();
        this.edgeRenderer.bindGraphEdge();

        this.applyElectronLayout();

        this.putFocusNodes(focusNodeNameArray);
    }

    inplaceUpdate(graphResp) {
        let focusNodeNameArray = this.dataStore.focusNodeNameArray;

        this.refreshDataStore(graphResp);
        this.dataStore.focusNodes = focusNodeNameArray;
        syncHighlightFromFocus(this);

        this.simulation.nodes(this.dataStore.nodes);
        this.nodeRenderer.bindGraphNode();
        this.edgeRenderer.bindGraphEdge();

        this.setLayoutFunc();

        this.simulation.alpha(0.005).restart();

        this.putFocusNodes(focusNodeNameArray);
    }

    get layoutList() {
        return [
            {
                label: 'Electron', apply: () => {
                this.applyElectronLayout();
            }
            },
            {
                label: 'Tier-Breadth First', apply: () => {
                this.applyTierBFSLayout();
            }
            },
            {
                label: 'Tier-Depth First', apply: () => {
                this.applyTierDFSLayout();
            }
            }
        ]
    }

    applyElectronLayout() {
        this.setLayoutFunc = this.setElectronLayout;

        this.setElectronLayout()
            .alpha(1)
            .restart();
    }

    setElectronLayout() {
        let chargeScale = buildChargeScale(this.dataStore.nodes, this.graphOption.CHARGE_RANGE);
        let linkStrengthScale = buildLinkStrengthScale(this.dataStore.edges, this.graphOption.LINK_STRENGTH_RANGE);
        let linkDistanceScale = buildLinkDistanceScale(this.dataStore.edges, this.graphOption.LINK_DISTANCE_RANGE);

        return this.simulation
            .force('link',
                d3.forceLink()
                    .id((node) => {
                        return node.name;
                    })
                    .links(this.dataStore.edges)
                    .strength((edge) => {
                        return linkStrengthScale(calcLinkStrengthDomain(edge));
                    })
                    .distance((edge) => {
                        return linkDistanceScale(calcLinkDistanceDomain(edge));
                    })
            )
            .force('charge',
                d3.forceManyBody()
                    .strength((node) => {
                        return chargeScale(node.inDegree);
                    })
            )
            .force('x', d3.forceX(this.width / 2))
            .force('y', d3.forceY(this.height / 2))
            .force('tier', null);
    }

    applyTierLayout() {
        this.applyTierBFSLayout();
    }

    applyTierBFSLayout() {
        this.setLayoutFunc = this.setTierBFSLayout;

        this.setTierBFSLayout()
            .alpha(1)
            .restart();
    }

    setTierBFSLayout() {
        return this.simulation
            .force('link', null)
            .force('charge', null)
            .force('x', null)
            .force('y', null)
            .force('tier', forceTierBFS(this.dataStore.graph)
                .width(this.width)
                .height(this.height))
    }

    applyTierDFSLayout() {
        this.setLayoutFunc = this.setTierDFSLayout;

        this.setTierDFSLayout()
            .alpha(1)
            .restart();
    }

    setTierDFSLayout() {
        return this.simulation
            .force('link', null)
            .force('charge', null)
            .force('x', null)
            .force('y', null)
            .force('tier', forceTierDFS(this.dataStore.graph)
                .width(this.width)
                .height(this.height));
    }

    flipNodeFocus(nodeName, doEmit = false, pos) {
        let focusNodeNameArray = this.dataStore.focusNodeNameArray;
        if (focusNodeNameArray.includes(nodeName)) {
            focusNodeNameArray.splice(focusNodeNameArray.indexOf(nodeName), 1);

            if (doEmit) {
                this.emit('deselect-node', nodeName);
            }
        } else {
            focusNodeNameArray.push(nodeName);

            if (doEmit) {
                this.emit('select-node', nodeName, pos);
            }
        }
        syncHighlightFromFocus(this);

        this.renderFocus();
    }

    addFocusNodes(toAddNodeNames = []) {
        let focusNodeNameArray = this.dataStore.focusNodeNameArray;
        toAddNodeNames.forEach((toAdd) => {
            if (!focusNodeNameArray.includes(toAdd)) {
                focusNodeNameArray.push(toAdd);
            }
        });
        syncHighlightFromFocus(this);

        this.renderFocus();
    }

    removeFocusNodes(toRemoveNodeNames = []) {
        let focusNodeNameArray = this.dataStore.focusNodeNameArray;
        toRemoveNodeNames.forEach((toRemove) => {
            if (focusNodeNameArray.includes(toRemove)) {
                focusNodeNameArray.splice(focusNodeNameArray.indexOf(toRemove), 1);
            }
        });
        syncHighlightFromFocus(this);

        this.renderFocus();
    }

    putFocusNodes(toPutNodeNames = []) {
        let focusNodeNameArray = this.dataStore.focusNodeNameArray;
        focusNodeNameArray.splice(0, focusNodeNameArray.length);
        focusNodeNameArray.push(...toPutNodeNames);
        syncHighlightFromFocus(this);

        this.renderFocus();
    }

    renderFocus() {
        this.nodeRenderer.renderFocus();
        this.edgeRenderer.renderFocus();
    }

    flareNodes(nodeNames = []) {
        let nodes = this.dataStore.nodes
            .filter((node) => {
                return nodeNames.includes(node.name);
            });
        if (nodes.length > 0) {
            this.ephemeralRenderer.flareNodes(nodes);
        }
    }

    enablePacket() {
        this.graphOption.ENABLE_PACKET = true;
        this.edgeRenderer.refreshPacket();
    }

    disablePacket() {
        this.graphOption.ENABLE_PACKET = false;
        this.edgeRenderer.clearPacket();
    }

    //TODO unit test
    refreshDataStore(graphResp) {
        this.dataStore.nodes = extractNodes(graphResp, this.simulation, this.graphOption);
        this.dataStore.edges = extractEdges(graphResp, this.dataStore.nodes);
        updateNodeDegree(this.dataStore.edges, this.dataStore.nodes);
        this.dataStore.sourceMap = extractSourceMap(this.dataStore.edges);
        this.dataStore.targetMap = extractTargetMap(this.dataStore.edges);
        this.dataStore.graph = buildNodeNameGraph(this.dataStore.nodes, this.dataStore.edges);

        this.dataStore.focusNodeNameArray = [];
        this.dataStore.upstreamNodeNameSet = new Set();
        this.dataStore.downstreamNodeNameSet = new Set();
        this.dataStore.highlightNodeNameSet = new Set();
    }
}

export function trimGraphResp(graphResp, keepRoles) {
    let trimmedGraphResp = Object.create(graphResp);
    trimmedGraphResp.roleData =
        trimmedGraphResp.roleData.filter(function (roleData) {
            return keepRoles.includes(roleData.name);
        });
    trimmedGraphResp.linkData =
        trimmedGraphResp.linkData.filter(function (linkData) {
            return keepRoles.includes(linkData.source) && keepRoles.includes(linkData.target);
        });
    return trimmedGraphResp;
}

function appendContainer(svg) {
    let container = svg.append('g')
        .classed('xvision', true)
        .attr('height', '100%')
        .attr('weight', '100%');

    let defs = container.append("defs");
    defs.selectAll("marker")
        .data(["arrow"])
        .enter().append("marker")
        .attr("id", function (d) {
            return d;
        })
        .classed("edge-marker", true)
        .attr("markerUnits", "userSpaceOnUse")
        .attr("viewBox", "0 -5 10 10")
        .attr("refX", 10)
        .attr("refY", 0)
        .attr("markerWidth", 6)
        .attr("markerHeight", 6)
        .attr("orient", "auto")
        .append("path")
        .attr("d", "M0,-5L10,0L0,5");

    let nodeNameFilter = defs.append("filter")
        .attr("id", "themeLabelFilter")
        .attr("x", "0").attr("y", "0")
        .attr("width", "1").attr("height", "1");
    nodeNameFilter.append("feFlood")
        .classed("theme-label-filter-flood", true);
    nodeNameFilter.append("feComposite")
        .attr("in", "SourceGraphic");

    return container;
}

function createZoom(container, GRAPH_OPTION) {
    return d3.zoom()
        .scaleExtent(GRAPH_OPTION.ZOOM_RANGE)
        .on("zoom", function () {
            let tx = d3.event.transform.x;
            let ty = d3.event.transform.y;
            let ts = d3.event.transform.k;
            container.attr("transform", `translate(${tx},${ty})scale(${ts})`);
        })
        .on('end', () => {
            let zoomSensitiveElements = container.selectAll('.zoom-sensitive');
            if ((d3.event.transform.k) <= GRAPH_OPTION.ZOOM_SENSITIVE_THRESHOLD) {
                zoomSensitiveElements.classed('hidden', true);
            } else {
                zoomSensitiveElements.classed('hidden', false);
            }
        });
}

function buildChargeScale(nodes, CHARGE_RANGE) {
    return d3.scalePow()
        .domain(d3.extent(nodes, function (node) {
            return node.inDegree;
        }))
        .range(CHARGE_RANGE);
}

function buildLinkStrengthScale(edges, LINK_STRENGTH_RANGE) {
    return d3.scaleLinear()
        .domain(d3.extent(edges, function (edge) {
            return calcLinkStrengthDomain(edge);
        }))
        .range(LINK_STRENGTH_RANGE);
}

function calcLinkStrengthDomain(edge) {
    return edge.sourceRef.inDegree + edge.targetRef.inDegree;
}

function buildLinkDistanceScale(edges, LINK_DISTANCE_RANGE) {
    return d3.scalePow()
        .domain(d3.extent(edges, function (edge) {
            return calcLinkDistanceDomain(edge);
        }))
        .range(LINK_DISTANCE_RANGE);
}

function calcLinkDistanceDomain(edge) {
    return edge.sourceRef.inDegree + edge.targetRef.inDegree;
}

function extractNodes(graphResp, simulation, graphOption) {
    if (graphResp.roleData === undefined) {
        console.error("cannot find 'roleData' in response json");
        return [];
    }

    let toRet = JSON.parse(JSON.stringify(graphResp.roleData));

    let existingNodes = simulation.nodes();
    let existingNodeNameMap = {};
    existingNodes.forEach(function (node) {
        existingNodeNameMap[node.name] = node;
    });
    toRet.forEach(function (newNode) {
        let existingNode = existingNodeNameMap[newNode.name];
        //retain position if nodeName already exists in graph
        if (existingNode !== undefined) {
            graphOption.NODE_POSITION_PROPERTY.forEach(function (retainProp) {
                newNode[retainProp] = existingNode[retainProp];
            });
        }
        deduceProp(newNode);
    });

    return toRet;

    function deduceProp(node) {
        node.totalReqCountStr = ( isNaN(node.totalReqCount) ? 'NA' : node.totalReqCount );
        node.failRate = Number(node.failedReqCount / node.totalReqCount);
        //noinspection JSUnresolvedFunction
        node.failedReqCountStr = ( isNaN(node.failRate) ? "NA" : node.failedReqCount )
            + ( isNaN(node.failRate) ? ""
                : " (" + numeral(node.failRate).format('0.000%') + ")");
        node.successRate = 1 - (isNaN(node.failRate) ? "0" : node.failRate);
        //noinspection JSUnresolvedFunction
        node.successRateStr = numeral(node.successRate).format('0.00%');
    }
}

function extractEdges(graphResp, nodes) {
    if (graphResp.linkData === undefined) {
        console.error("cannot find 'linkData' in response json");
        return [];
    }
    let linkStrSet = new Set();
    let nodeNameMap = {};
    nodes.forEach(function (node) {
        nodeNameMap[node.name] = node;
    });
    let sanitizedLinks = graphResp.linkData.reduce(
        function (resultAry, link) {
            //TODO learn the difference between == and ===
            if (link.source === link.target) {
                console.error("Does not support self-pointing link yet: " + JSON.stringify(link));
                return resultAry;
            }
            if ((nodeNameMap[link.source] === undefined) || (nodeNameMap[link.target] === undefined)) {
                console.error("Source or Target of Link cannot be found in roleData: " + JSON.stringify(link));
                return resultAry;
            }

            if (linkStrSet.has(linkToStr(link))) {
                console.error("Duplicate link: " + JSON.stringify(link));
                return resultAry;
            }
            linkStrSet.add(linkToStr(link));
            resultAry.push(link);
            return resultAry;
            function linkToStr(link) {
                return `${link.source}=>${link.target}`;
            }
        }, []);
    return sanitizedLinks
        .map(function (link) {
            let cloneLink = Object.create(link);
            cloneLink.sourceRef = nodeNameMap[cloneLink.source];
            cloneLink.targetRef = nodeNameMap[cloneLink.target];
            return cloneLink;
        });
}

function updateNodeDegree(edges, nodes) {
    edges.forEach(function (edge) {
        var sourceNode = edge.sourceRef;
        sourceNode.outDegree = sourceNode.outDegree + 1 || 1;
        let targetNode = edge.targetRef;
        targetNode.inDegree = targetNode.inDegree + 1 || 1;
    });
    nodes.forEach(function (node) {
        node.outDegree = node.outDegree || 0;
        node.inDegree = node.inDegree || 0;
    })
}

//TODO rewrite with ES6 Map
function extractSourceMap(edges) {
    let sourceMap = {};
    edges.forEach(function (edge) {
        let targetName = edge.targetRef.name;
        let sourceName = edge.sourceRef.name;
        if (!sourceMap[targetName]) {
            sourceMap[targetName] = [];
        }
        sourceMap[targetName].push(sourceName);
    });
    return sourceMap;
}

function extractTargetMap(edges) {
    let targetMap = {};
    edges.forEach(function (edge) {
        let sourceName = edge.sourceRef.name;
        let targetName = edge.targetRef.name;
        if (!targetMap[sourceName]) {
            targetMap[sourceName] = [];
        }
        targetMap[sourceName].push(targetName);
    });
    return targetMap;
}

function buildNodeNameGraph(nodes, edges) {
    let graph = new gl.Graph({directed: true});

    nodes.forEach((node) => {
        graph.setNode(node.name, node)
    });

    edges.forEach((edge) => {
        graph.setEdge(edge.sourceRef.name, edge.targetRef.name, edge);
    });

    return graph;
}

function syncHighlightFromFocus(xvision) {
    let focusNodeNameArray = xvision.dataStore.focusNodeNameArray;
    let sourceMap = xvision.dataStore.sourceMap;
    let targetMap = xvision.dataStore.targetMap;

    let upstreamNodeNameSet = new Set();
    let downstreamNodeNameSet = new Set();
    focusNodeNameArray.forEach((focusNode) => {
        let sources = sourceMap[focusNode];
        if (sources) {
            sources.forEach((u) => {
                upstreamNodeNameSet.add(u);
            });
        }
        let targets = targetMap[focusNode];
        if (targets) {
            targets.forEach((d) => {
                downstreamNodeNameSet.add(d);
            })
        }
    });
    let highlightNodeNameSet =
        new Set([...upstreamNodeNameSet, ...downstreamNodeNameSet, ...focusNodeNameArray]);

    xvision.dataStore.upstreamNodeNameSet = upstreamNodeNameSet;
    xvision.dataStore.downstreamNodeNameSet = downstreamNodeNameSet;
    xvision.dataStore.highlightNodeNameSet = highlightNodeNameSet;
}
