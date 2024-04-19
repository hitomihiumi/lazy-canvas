'use strict';

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

    toJSON() {
        return { ...this.data };
    }
}

module.exports = BaseLayer;