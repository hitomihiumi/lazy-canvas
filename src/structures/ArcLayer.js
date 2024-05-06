'use strict';

const BaseLayer = require('./BaseLayer.js');
const { isValidColor } = require('../utils.js');

class ArcLayer extends BaseLayer {
                
                constructor(data = {}) {
                    super(data);
                    this.data.type = 'arc';
                    this.data.angles = [];
                    this.data.fill = true;
                    this.data.clockwise = false;
                    this.data.stroke = 1;
                }

                /**
                 * @param {number} radius - The radius of the arc
                 */
                setFilled(fill) {
                    if (!fill && fill !== false) throw new Error('Fill must be provided');
                    if (typeof fill !== 'boolean') throw new Error('Fill must be a boolean');
                    this.data.fill = fill;
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
                 * @param {number} radius - The radius of the arc
                 */
                setRadius(radius) {
                    if (!radius) throw new Error('Radius must be provided');
                    if (isNaN(radius)) throw new Error('Radius must be a number');
                    this.data.radius = radius;
                    return this;
                }
    
                /**
                 * @param {angles} - The angles of the arc
                 */
                setAngles(...angles) {
                    if (!angles) throw new Error('Angles must be provided');
                    if (angles.length < 2) throw new Error('At least two angle must be provided');
                    for (const angle of angles) {
                        if (!angle && angle !== 0) throw new Error('Angle must be provided');
                        if (isNaN(angle)) throw new Error('Angle must be a number');
            
                        this.data.angles.push(angle);
                    }
                    return this;
                }

                /**
                 * @param {boolean} clockwise - Whether the arc should be drawn clockwise or not
                 */
                setClockwise(clockwise) {
                    if (!clockwise && clockwise !== false) throw new Error('Clockwise must be provided');
                    if (typeof clockwise !== 'boolean') throw new Error('Clockwise must be a boolean');
                    this.data.clockwise = clockwise;
                    return this;
                }
    }

module.exports = ArcLayer;