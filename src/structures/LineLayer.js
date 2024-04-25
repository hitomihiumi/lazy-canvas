'use strict';

const BaseLayer = require('./BaseLayer.js');
const { isValidColor } = require('../utils.js');

class LineLayer extends BaseLayer {
            
            constructor(data = {}) {
                super(data);
                this.data.type = 'line';
            }
            
            /**
             * @param {points} - The points of the line
             */
            setPoints(...points) {
                if (!points) throw new Error('Points must be provided');
                if (points.length < 2) throw new Error('At least two points must be provided');
                this.data.points = points;
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
            
    }

module.exports = LineLayer;