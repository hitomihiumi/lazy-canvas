class Font {
    constructor(data = {}) {
        this.data = { ...data };
    }

    /**
     * @param {string} family - The font name
     */
    setFamily(family) {
        if (!family) throw new Error('Family must be provided');
        if (typeof family !== 'string') throw new Error('Family must be a string');
        this.data.family = family;
        return this;
    }

    /**
     * @param {string} weight - The font weight
     */
    setWeight(weight) {
        if (!weight) throw new Error('Weight must be provided');
        if (typeof weight !== 'string') throw new Error('Weight must be a string');
        if (['normal', 'bold', 'italic', 'bold italic', 'regular'].includes(weight) == false) throw new Error('Weight must be normal, bold, italic, bold italic or regular');
        this.data.weight = weight;
        return this;
    }

    /**
     * @param {string} path - The path to the font file
     * @important The base folder in the path is the root folder of the project
     * @example './some/path/to/font.ttf'
     */
    setPath(path) {
        if (!path) throw new Error('Path must be provided');
        if (typeof path !== 'string') throw new Error('Path must be a string');
        this.data.path = path;
        return this;
    }

    toJSON() {
        return { ...this.data };
    }
}

module.exports = Font;