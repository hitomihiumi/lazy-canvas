'use strict';

const { isImageUrlValid } = require('../utils.js');

class Pattern {
    data;

    constructor(data = {}) {
        this.data = { ...data };
        this.data.type = 'pattern';
        this.data.patternType = 'no-repeat'
    }

    setPattern(pattern) {
        if (!pattern) throw new Error('Pattern must be provided');
        if (typeof pattern === 'object' && [ 'layer', 'canvas' ].includes(pattern.getData().structureType) === false) throw new Error('Pattern must be a valid pattern');
        if (typeof pattern === 'string' && isImageUrlValid(pattern) === false) throw new Error('Pattern must be a valid pattern');
        this.data.pattern = { type: `${typeof pattern === 'string' ? `image` : pattern.getData().structureType }`, data: pattern }
        return this;
    }

    setType(patternType) {
        if (!patternType) throw new Error('Pattern type must be provided');
        if (['repeat', 'repeat-x', 'repeat-y', 'no-repeat'].includes(patternType) === false) throw new Error('Pattern type must be repeat, repeat-x, repeat-y or no-repeat');
        this.data.patternType = patternType;
        return this;
    }

    toJSON() {
        return { ...this.data }
    }
}

module.exports = Pattern;