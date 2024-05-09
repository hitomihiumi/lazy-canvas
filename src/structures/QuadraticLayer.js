'use strict';

const BaseLayer = require('./BaseLayer.js');
const { isValidColor } = require('../utils.js');

class QuadraticLayer extends BaseLayer {
                    
                    constructor(data = {}) {
                        super(data);
                        this.data.type = 'quadratic';
                        this.data.points = [];
                        this.data.stroke = 1;
                        this.data.fill = false;
                    }

                    /**
                     * @param {Array} points - The points of the quadratic curve
                     */
                    setPoints(...points) {
                        if (!points) throw new Error('Points must be provided');
                        if (points.length < 2) throw new Error('Two points must be provided');
                        for (const point of points) {
                            if (!point.x && point.x !== 0) throw new Error('X must be provided');
                            if (!point.y && point.y !== 0) throw new Error('Y must be provided');
                            if (isNaN(point.x)) throw new Error('X must be a number');
                            if (isNaN(point.y)) throw new Error('Y must be a number');
                
                            this.data.points.push(point);
                        }
                        return this;
                    }

                    /**
                     * @param {Array} controlPoint - The control point of the quadratic curve
                     */
                    setControlPoint(controlPoint) {
                        if (!controlPoint) throw new Error('Control point must be provided');
                        if (!controlPoint.x && controlPoint.x !== 0) throw new Error('X must be provided');
                        if (!controlPoint.y && controlPoint.y !== 0) throw new Error('Y must be provided');
                        if (isNaN(controlPoint.x)) throw new Error('X must be a number');
                        if (isNaN(controlPoint.y)) throw new Error('Y must be a number');
                        this.data.controlPoint = controlPoint;
                        return this;
                    }

                    /**
                     * @param {number} stroke - The stroke of the figure
                     */
                    setStroke(stroke) {
                        if (!stroke) throw new Error('Stroke must be provided');
                        if (isNaN(stroke)) throw new Error('Stroke must be a number');
                        this.data.stroke = stroke;
                        return this;
                    }

                    /**
                     * @param {string} color - The color of the figure
                    */
                    setColor(color) {
                        if (!color) throw new Error('Color must be provided');
                        if (isValidColor(color) === false) throw new Error('Color must be a valid color');
                        this.data.color = color;
                        return this;
                    }
    }

module.exports = QuadraticLayer;