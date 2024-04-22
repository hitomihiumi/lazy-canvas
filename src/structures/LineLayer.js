'use strict';

const BaseLayer = require('./BaseLayer.js');
const { isValidColor } = require('../utils.js');

class LineLayer extends BaseLayer {
            
            constructor(data = {}) {
                super(data);
                this.data.type = 'line';
            }
            
            /**
             * @param {number} x2 - The x2 of the figure 
             */
            setX2(x2) {
                if (!x2 && x2 !== 0) throw new Error('X2 must be provided');
                if (isNaN(x2)) throw new Error('X2 must be a number');
                this.data.x2 = x2;
                return this;
            }

            /**
             * @param {number} y2 - The y2 of the figure
             */
            setY2(y2) {
                if (!y2 && y2 !== 0) throw new Error('X2 must be provided');
                if (isNaN(y2)) throw new Error('X2 must be a number');
                this.data.y2 = y2;
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