'use strict';

const BaseLayer = require('./BaseLayer.js');
const { isValidColor } = require('../utils.js');

class TextLayer extends BaseLayer {
                
            constructor(data = {}) {
                super(data);
                this.data.type = 'text';
            }
                
            /**
             * @param {string} text - The text to display
             */
            setText(text) {
                if (!text) throw new Error('Text must be provided');
                if (typeof text !== 'string') throw new Error('Text must be a string');
                this.data.text = text;
                return this;
            }
    
            /**
             * @param {string} font - The name of the font 
             */
            setFont(font) {
                if (!font) throw new Error('Font must be provided');
                if (typeof font !== 'string') throw new Error('Font must be a string');
                this.data.font = font;
                return this;
            }
    
            /**
             * @param {number} fontSize - The size of the text
             */
            setFontSize(fontSize) {
                if (!fontSize) throw new Error('Font size must be provided');
                if (isNaN(fontSize)) throw new Error('Font size must be a number');
                this.data.size = fontSize;
                return this;
            }

            /**
             * @param {string} weight - The weight of the text
             * Weight types: normal, bold, italic, bold italic, regular
             */
            setWeight(weight) {
                if (!weight) throw new Error('Weight must be provided');
                if (typeof weight !== 'string') throw new Error('Weight must be a string');
                if (['normal', 'bold', 'italic', 'bold italic', 'regular'].includes(weight) == false) throw new Error('Weight must be normal, bold, italic, or bold italic');
                this.data.weight = weight;
                return this;
            }

            /**
             * @param {hex} color - The color of the text 
             */
            setColor(color) {
                if (!color) throw new Error('Color must be provided');
                if (isValidColor(color) == false) throw new Error('Color must be a valid color');
                this.data.color = color;
                return this;
            }
            
            /**
             * @param {string} align - The alignment of the text
             * Align types: left, center, right, start, end
             */
            setAlign(align) {
                if (!align) throw new Error('Alignment must be provided');
                if (typeof align !== 'string') throw new Error('Alignment must be a string');
                if (['left', 'center', 'right', 'start', 'end'].includes(align) == false) throw new Error('Alignment must be left, center, or right');
                this.data.align = align;
                return this;
            }

            /**
             * @param {boolean} multiline - Whether the text should be multiline or not
             */
            setMultiline(multiline) {
                if (typeof multiline !== 'boolean') throw new Error('Multiline must be a true or false value');
                this.data.multiline = multiline;
                return this;
            }

            /**
             * @param {number} width - Max width zone of the text
             */
            setWidth(width) {
                if (!width) throw new Error('Width must be provided');
                if (isNaN(width)) throw new Error('Width must be a number');
                this.data.width = width;
                return this;
            }

            /**
             * @param {number} height - Max height zone of the text
             */
            setHeight(height) {
                if (!height) throw new Error('Height must be provided');
                if (isNaN(height)) throw new Error('Height must be a number');
                this.data.height = height;
                return this;
            }
                
    }

module.exports = TextLayer;