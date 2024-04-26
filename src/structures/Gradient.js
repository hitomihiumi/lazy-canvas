'use strict';

const { isValidColor } = require('../utils.js');

class Gradient {

    constructor(data = {}) {
        this.data = { ...data };
        this.data.type = 'gradient';
        this.data.gradientType = 'linear';
        this.data.colorPoints = [];
        this.data.points = [];
    }

    /**
     * @param {array} colorPoints - The color points of the gradient
     */
    addColorPoints(...colorPoints) {
        if (!colorPoints) throw new Error('Color points must be provided');
        if (colorPoints.length < 2) throw new Error('At least two color points must be provided');
        for (const colorPoint of colorPoints) {
            if (!colorPoint.color) throw new Error('Color must be provided');
            if (!colorPoint.position && colorPoint.position !== 0) throw new Error('Position must be provided');
            if (isNaN(colorPoint.position)) throw new Error('Position must be a number');
            if (colorPoint.position < 0 || colorPoint.position > 1) throw new Error('Position must be between 0 and 1');
            if (isValidColor(colorPoint.color) == false) throw new Error('Color must be a valid color');

            this.data.colorPoints.push(colorPoint);
        }
        return this;
    }

    /**
     * @param {array} points - The points of the gradient
     */
    setPoints(...points) {
        if (!points) throw new Error('Points must be provided');
        if (points.length < 2) throw new Error('At least two points must be provided');
        for (const point of points) {
            if (!point.x && colorPoint.position !== 0) throw new Error('X must be provided');
            if (!point.y && colorPoint.position !== 0) throw new Error('Y must be provided');
            if (isNaN(point.x)) throw new Error('X must be a number');
            if (isNaN(point.y)) throw new Error('Y must be a number');

            this.data.points.push(point);
        }
        return this;
    }

    setRadius(r0, r1) {
        if (!r0) throw new Error('R0 must be provided');
        if (!r1) throw new Error('R1 must be provided');
        if (isNaN(r0)) throw new Error('R0 must be a number');
        if (isNaN(r1)) throw new Error('R1 must be a number');
        this.data.r0 = r0;
        this.data.r1 = r1;
        return this;
    }

    setType(type) {
        if (!type) throw new Error('Type must be provided');
        if (type !== 'linear' && type !== 'radial') throw new Error('Type must be linear or radial');
        this.data.gradientType = type;
        return this;
    }

    toJSON() {
        return { ...this.data };
    }

}

module.exports = Gradient;