export const DEFAULT_GRAPH_OPTION = {
    FADE_OUT_DURATION: 800,
    NODE_RADIUS: 15,
    CHARGE_RANGE: [-500, -2000],
    LINK_DISTANCE_RANGE: [150, 300],
    LINK_STRENGTH_RANGE: [0.7, 0.4],
    UPSTREAM: {
        CSS_CLASS: "upstream", dataClass: function (nodeName) {
            return "d_from_" + DEFAULT_GRAPH_OPTION.toCssName(nodeName);
        }
    },
    DOWNSTREAM: {
        CSS_CLASS: "downstream", dataClass: function (nodeName) {
            return "d_to_" + DEFAULT_GRAPH_OPTION.toCssName(nodeName);
        }
    },
    DUALSTREAM: {
        CSS_CLASS: "dualstream"
    },
    ZOOM_RANGE: [0.5, 4],
    ZOOM_DURATION: 750,
    ZOOM_SENSITIVE_THRESHOLD: 2.5,

    ENABLE_PACKET: true,
    PACKET_DEFAULT_DURATION: 1500,
    PACKET_OPACITY_RANGE: [1, 0.2],

    NODE_FLARE_RADIUS_INDEX: 0.25,
    NODE_FLARE_LOCK_IN_DURATION: 2500,
    NODE_FLARE_FADE_DURATION: 1000,

    NODE_STATUS_LOG_SWITCH: false,

    F_IS_NODE_UNKNOWN: function (node) {
        return node.totalReqCount < 0;
    },

    F_IS_NODE_WARNING: function (node) {
        //TODO should use machine learning to spot anomaly dynamically
        return node.failRate >= 0.005 && node.failRate < 0.01;
    },

    F_IS_NODE_ERROR: function (node) {
        //TODO should use machine learning to spot anomaly dynamically
        return node.failRate >= 0.01;
    },

    F_IS_EDGE_WARNING: function (edge) {
        if (edge.totalReqCount === 0) {
            return false;
        }
        let failRate = edge.failedReqCount / edge.totalReqCount;
        return failRate >= 0.005 && failRate < 0.01;
    },

    F_IS_EDGE_ERROR: function (edge) {
        if (edge.totalReqCount === 0) {
            return false;
        }
        let failRate = edge.failedReqCount / edge.totalReqCount;
        return failRate >= 0.01;
    },

    NODE_POSITION_PROPERTY: ['x', 'y', 'vx', 'vy'],

    toCssName: function (str) {
        //CSS class name does not allow '.'
        //Collision caused by this 'fix' is possible but unlikely
        return str.replace(/\./g, "_");
    }
};
