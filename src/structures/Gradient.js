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
        if (points.length < 1) throw new Error('At least one points must be provided');
        for (const point of points) {
            if (!point.x && colorPoint.position !== 0) throw new Error('X must be provided');
            if (!point.y && colorPoint.position !== 0) throw new Error('Y must be provided');
            if (isNaN(point.x)) throw new Error('X must be a number');
            if (isNaN(point.y)) throw new Error('Y must be a number');

            this.data.points.push(point);
        }
        return this;
    }

    setRadius(radius) {
        if (!radius) throw new Error('Radius must be provided');
        if (isNaN(radius)) throw new Error('Radius must be a number');
        this.data.radius = radius;
        return this;
    }

    setType(type) {
        if (!type) throw new Error('Type must be provided');
        if ([ 'linear', 'radial', 'conic' ].includes(type) == false) throw new Error('Type must be linear, radial or conic');
        this.data.gradientType = type;
        return this;
    }

    toJSON() {
        return { ...this.data };
    }

}

module.exports = Gradient;