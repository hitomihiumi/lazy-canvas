'use strict';

const BaseLayer = require('./BaseLayer.js');
const { isImageUrlValid } = require('../utils.js');

class ImageLayer extends BaseLayer {
            
            constructor(data = {}) {
                super(data);
                this.data.type = 'image';
            }
    
            /**
             * @param {iamge} image - The image url or path
             */
            setImage(image) {
                if (!image) throw new Error('Image must be provided');
                if (isImageUrlValid(image) == false) throw new Error('Image must be a valid URL');
                this.data.image = image;
                return this;
            }
    
            /**
             * @param {number} width - The width of the figure
             */
            setWidth(width) {
                if (!width) throw new Error('Width must be provided');
                if (isNaN(width)) throw new Error('Width must be a number');
                this.data.width = width;
                return this;
            }
    
            /**
             * @param {number} height - The height of the figure 
             */
            setHeight(height) {
                if (!height) throw new Error('Height must be provided');
                if (isNaN(height)) throw new Error('Height must be a number');
                this.data.height = height;
                return this;
            }
                
    }

module.exports = ImageLayer;