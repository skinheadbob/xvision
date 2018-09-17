import * as d3 from 'd3'

export class FocusRenderer {
    constructor(xvision) {
        this.xvision = xvision;
    }

    get globalGraphGroup() {
        throw Error('Should have been implemented by subclass');
    }

    get cssClass() {
        throw Error('Should have been implemented by subclass');
    }

    shouldHighlight(datum, highlightNodeNameSet) {
        throw Error('Should have been implemented by subclass');
    }

    shouldFocus(datum, focusNodeNameArray) {
        throw Error('Should have been implemented by subclass');
    }

    renderFocus() {
        let focusNodeNameArray = this.xvision.dataStore.focusNodeNameArray;
        let highlightNodeNameSet = this.xvision.dataStore.highlightNodeNameSet;
        let self = this;

        this.globalGraphGroup.selectAll(`.${this.cssClass}`)
            .each(function (datum) {
                let element = d3.select(this);
                element.classed('highlight', self.shouldHighlight(datum, highlightNodeNameSet));
                element.classed('focus', self.shouldFocus(datum, focusNodeNameArray));
            });

        this.dimNonHighlight();
    }

    dimNonHighlight() {
        if (this.shouldRemoveDimForAll()) {
            this.globalGraphGroup.selectAll(`.${this.cssClass}.dim`)
                .classed('dim', false);
        } else {
            this.globalGraphGroup.selectAll(`.${this.cssClass}.highlight`)
                .classed('dim', false);
            this.globalGraphGroup.selectAll(`.${this.cssClass}:not(.highlight)`)
                .classed('dim', true);
        }
    }

    shouldRemoveDimForAll() {
        return this.globalGraphGroup.selectAll(`.${this.cssClass}.highlight`).empty();
    }
}
