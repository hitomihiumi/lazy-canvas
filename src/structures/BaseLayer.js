'use strict';

const { isValidColor } = require('../utils');

class BaseLayer {

    data

    constructor(data = {}) {
        this.data = { ...data };
    }

    /**
     * @param {number} x - The x position of the layer
     */
    setX(x) {
        if (!x) throw new Error('X must be provided');
        if (isNaN(x)) throw new Error('X must be a number');
        this.data.x = x;
        return this;
    }

    /**
     * @param {number} y - The y position of the layer
     */
    setY(y) {
        if (!y) throw new Error('Y must be provided');
        if (isNaN(y)) throw new Error('Y must be a number');
        this.data.y = y;
        return this;
    }

    /**
     * @param {hex} color - The shadow color for the layer
     */
    setShadowColor(color) {
        if (!color) throw new Error('Color must be provided');
        if (!isValidColor(color)) throw new Error('Color must be a valid hex color');
        this.data.shadow.shadowColor = color;
        return this;
    }

    /**
     * @param {number} blur - The degree of shadow blur
     */
    setShadowBlur(blur) {
        if (!blur) throw new Error('Blur must be provided');
        if (isNaN(blur)) throw new Error('Blur must be a number');
        this.data.shadow.shadowBlur = blur;
        return this;
    }

    /**
     * @param {number} offsetX - The X-axis offset of the shadow relative to the layer
     */
    setShadowOffsetX(offsetX) {
        if (!offsetX) throw new Error('OffsetX must be provided');
        if (isNaN(offsetX)) throw new Error('OffsetX must be a number');
        this.data.shadow.shadowOffsetX = offsetX;
        return this;
    }

    /**
     * @param {number} offsetY - The Y-axis offset of the shadow relative to the layer
     */
    setShadowOffsetY(offsetY) {
        if (!offsetY) throw new Error('OffsetY must be provided');
        if (isNaN(offsetY)) throw new Error('OffsetY must be a number');
        this.data.shadow.shadowOffsetY = offsetY;
        return this;
    }

    /**
     * @param {number} alpha - The alpha value of the layer 
     */
    setAlpha(alpha) {
        if (!alpha) throw new Error('Alpha must be provided');
        if (isNaN(alpha)) throw new Error('Alpha must be a number');
        if (alpha < 0 || alpha > 1) throw new Error('Alpha must be between 0 and 1');
        this.data.alpha = alpha;
        return this;
    }

    toJSON() {
        return { ...this.data };
    }
}

module.exports = BaseLayer;