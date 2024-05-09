'use strict';

class Filter {
    data;

    constructor(data = {}) {
        this.data = { ...data };
        this.data.structureType = 'filter';
    }

    setType(type) {
        if (!type) throw new Error('Type must be provided');
        if (typeof type !== 'string') throw new Error('Type must be a string');
        if ([ "dither565", "normalize", "contrast", "brightness", "sepia", "invert", "gaussian", "blur", "grayscale" ].includes(type) === false) throw new Error('Type must be a valid filter type');
        this.data.type = type;
        return this;
    }

    setOption(option) {
        if (!option) throw new Error('Option must be provided');
        if (isNaN(option)) throw new Error('Option must be a number');
        this.data.option = option;
        return this;
    }

    toJSON() {
        return { ...this.data }
    }
}

module.exports = Filter;