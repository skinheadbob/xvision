import * as d3 from 'd3'
import * as gl from 'graphlib'

function forceTier(_graph, updateNodeDepthFunc) {
    let graph = _graph;
    let width, height;

    let maxDepth;

    function force(alpha) {
        graph.nodes().forEach((nodeName) => {
            let node = graph.node(nodeName);
            posX(node, alpha);
            posY(node, alpha);
        });
    }

    force.height = function (_) {
        height = _;
        return force;
    };

    force.width = function (_) {
        width = _;
        return force;
    };

    force.initialize = function () {
        clearNodeDepth();
        updateNodeDepthFunc(graph);
        maxDepth = d3.max(graph.nodes(), (nodeName) => {
            return graph.node(nodeName).depth;
        });
        setRankAmongSameDepth();
    };

    return force;

    function clearNodeDepth() {
        graph.nodes().forEach((nodeName) => {
            graph.node(nodeName).depth = undefined;
        })
    }

    function setRankAmongSameDepth() {
        let sameDepthNodeGroups = graph.nodes().reduce((res, nodeName) => {
            let node = graph.node(nodeName);
            res[node.depth].push(node);
            return res;
        }, Array.from(new Array(maxDepth + 1), () => {
            return [];
        }));
        sameDepthNodeGroups.forEach(grp => {
            grp.sort((oneNode, otherNode) => {
                if (oneNode.outDegree !== otherNode.outDegree) {
                    return oneNode.outDegree - otherNode.outDegree;
                }
                return oneNode.inDegree - otherNode.inDegree;
            });

            //put the largest element in the middle
            let linearSorted = grp.slice();
            for (let idx = 0; idx < linearSorted.length; idx++) {
                let toAssignIdx = (idx % 2 === 0)
                    ? Math.floor(idx / 2)
                    : linearSorted.length - 1 - Math.floor(idx / 2);
                grp[toAssignIdx] = linearSorted[idx];
            }

            grp.forEach((node) => {
                node.sameDepthRank = grp.indexOf(node);
                node.sameDepthGroupSize = grp.length;
            });
        });
    }

    function posX(node, alpha) {
        let desiredX = (node.depth > 0)
            ? d3.scaleLinear().domain([1, maxDepth]).range([0, ((maxDepth - 1) / maxDepth) * width])(node.depth)
            : width;
        let currentX = node.x;
        node.x = d3.scalePow()
            .domain([1, 0.01])
            .range([currentX, desiredX])(alpha);
    }

    function posY(node, alpha) {
        let domain;
        let range;
        if (node.sameDepthGroupSize < 6) {
            let to = Math.floor(node.sameDepthGroupSize / 2) + 3;
            let from = 6 - to;
            domain = [0, node.sameDepthGroupSize - 1];
            range = [(from / 6) * height, (to / 6) * height];
        } else {
            domain = [0, node.sameDepthGroupSize - 1];
            range = [0, height];
        }

        let desiredY = d3.scaleLinear()
            .domain(domain)
            .range(range)
            (node.sameDepthRank);
        let currentY = node.y;
        node.y = d3.scalePow()
            .domain([1, 0.01])
            .range([currentY, desiredY])(alpha);
    }
}

export function forceTierBFS(_graph) {
    return forceTier(_graph,
        function updateNodeDepthBFSStyle(graph) {
            let feedbackEdgeSet = new Set();

            while (!gl.alg.isAcyclic(graph)) {
                let toRemoveCycleEdges = gl.alg.findCycles(graph).map((cycleNodeNames) => {
                    for (let i = 0; i < cycleNodeNames.length - 1; i++) {
                        for (let j = i + 1; j < cycleNodeNames.length; j++) {
                            let oneEdge = graph.edge(cycleNodeNames[i], cycleNodeNames[j]);
                            if (oneEdge !== undefined) {
                                return oneEdge;
                            }
                            let otherEdge = graph.edge(cycleNodeNames[j], cycleNodeNames[i]);
                            if (otherEdge !== undefined) {
                                return otherEdge;
                            }
                        }
                    }
                });
                toRemoveCycleEdges.forEach((edge) => {
                    graph.removeEdge(edge.sourceRef.name, edge.targetRef.name);
                    feedbackEdgeSet.add(edge);
                });
            }

            gl.alg.topsort(graph).forEach((nodeName) => {
                let node = graph.node(nodeName);

                if (node.depth === undefined) {
                    if (node.outDegree === 0) {
                        node.depth = 0;
                    } else {
                        node.depth = 1;
                    }
                }
                graph.successors(nodeName).forEach((successorNodeName) => {
                    let successor = graph.node(successorNodeName);
                    if (successor.depth === undefined) {
                        successor.depth = node.depth + 1;
                    }
                })
            });

            feedbackEdgeSet.forEach((fe) => {
                graph.setEdge(fe.sourceRef.name, fe.targetRef.name, fe);
            });

            graph.nodes().forEach((nodeName) => {
                let node = graph.node(nodeName);
            })
        }
    )
}

export function forceTierDFS(_graph) {
    return forceTier(_graph,
        function updateNodeDepthDFSStyle(graph) {
            let feedbackEdgeSet = new Set();

            while (!gl.alg.isAcyclic(graph)) {
                let toRemoveCycleEdges = gl.alg.findCycles(graph).map((cycleNodeNames) => {
                    for (let i = 0; i < cycleNodeNames.length - 1; i++) {
                        for (let j = i + 1; j < cycleNodeNames.length; j++) {
                            let oneEdge = graph.edge(cycleNodeNames[i], cycleNodeNames[j]);
                            if (oneEdge !== undefined) {
                                return oneEdge;
                            }
                            let otherEdge = graph.edge(cycleNodeNames[j], cycleNodeNames[i]);
                            if (otherEdge !== undefined) {
                                return otherEdge;
                            }
                        }
                    }
                });
                toRemoveCycleEdges.forEach((edge) => {
                    graph.removeEdge(edge.sourceRef.name, edge.targetRef.name);
                    feedbackEdgeSet.add(edge);
                });
            }

            gl.alg.topsort(graph).forEach((nodeName) => {
                let node = graph.node(nodeName);

                if (node.depth === undefined) {
                    if (node.outDegree === 0) {
                        node.depth = 0;
                    } else {
                        node.depth = 1;
                    }
                }

                let stack = [];
                stack.push(node);
                while (stack.length !== 0) {
                    let currNode = stack.pop();

                    graph.successors(currNode.name).forEach((successorNodeName) => {
                        let successor = graph.node(successorNodeName);
                        if (successor.depth === undefined || successor.depth < currNode.depth + 1) {
                            successor.depth = currNode.depth + 1;
                            stack.push(successor);
                        }
                    });
                }
            });

            feedbackEdgeSet.forEach((fe) => {
                graph.setEdge(fe.sourceRef.name, fe.targetRef.name, fe);
            });
        }
    )
}
