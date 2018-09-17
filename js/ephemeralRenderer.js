import * as d3 from 'd3'

export class EphemeralRenderer {
    constructor(xvision) {
        this.xvision = xvision;
        this.nodeFlareGroup = this.xvision.ephemeralGroup.append('g').classed('nodeFlareGroup', true);
    }

    flareNodes(nodes) {
        let graphOption = this.xvision.graphOption;
        this.nodeFlareGroup.selectAll('circle')
            .data(nodes)
            .enter()
            .append('circle')
            .classed('node-flare', true)
            .attr('r', this.xvision.width * graphOption.NODE_FLARE_RADIUS_INDEX)
            .attr('stroke-opacity', '0.5')
            .attr('transform', node => `translate(${node.x},${node.y})`)
            .transition()
            .duration(graphOption.NODE_FLARE_LOCK_IN_DURATION)
            .attr('r', this.xvision.graphOption.NODE_RADIUS * 1.05)
            .attr('stroke-opacity', '1')
            .transition()
            .duration(graphOption.NODE_FLARE_FADE_DURATION)
            .attr('stroke', 'red')
            .attr('stroke-opacity', '0.1')
            .remove()
        ;
    }

    tick() {
        let nodeFlareGroup = this.nodeFlareGroup.selectAll('.node-flare');
        if (!nodeFlareGroup.empty()) {
            nodeFlareGroup.attr('transform', node => `translate(${node.x},${node.y})`);
        }
    }
}
