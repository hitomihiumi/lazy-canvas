'use strict';

const BaseLayer = require('./BaseLayer.js');
const { isValidColor } = require('../utils.js');

class LineLayer extends BaseLayer {
            
            constructor(data = {}) {
                super(data);
                this.data.type = 'line';
                this.data.points = [];
                this.data.stroke = 1;
            }
            
            /**
             * @param {points} - The points of the line
             */
            setPoints(...points) {
                if (!points) throw new Error('Points must be provided');
                if (points.length < 2) throw new Error('At least two points must be provided');
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
             * @param {number} stroke - The stroke of the figure
             */
            setStroke(stroke) {
                if (!stroke) throw new Error('Stroke must be provided');
                if (isNaN(stroke)) throw new Error('Stroke must be a number');
                this.data.stroke = stroke;
                return this;
            }
            
            /**
             * @param {hex} color - The color of the figure 
             */
            setColor(color) {
                if (!color) throw new Error('Color must be provided');
                if (isValidColor(color) == false) throw new Error('Color must be a valid color');
                this.data.color = color;
                return this;
            }

            /**
             * @param {number} lineWidth - The width of the line
             */
            setLineDash(lineDash) {
                if (!lineDash) throw new Error('LineDash must be provided');
                if (!Array.isArray(lineDash)) throw new Error('LineDash must be an array');
                this.data.lineDash = lineDash;
                return this;
            }
            
    }

module.exports = LineLayer;