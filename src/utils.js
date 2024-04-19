'use strict';

const jimp = require('jimp');

function isValidColor(color) {

    if (/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(color)) {
        return true;
    }

    const verbalColorNames = [
        'black', 'silver', 'gray', 'white', 'maroon', 'red', 'purple', 'fuchsia',
        'green', 'lime', 'olive', 'yellow', 'navy', 'blue', 'teal', 'aqua'
    ];
    if (verbalColorNames.includes(color.toLowerCase())) {
        return true;
    }

    return false;
}

async function isImageUrlValid(url) {
    try {
        const image = await jimp.read(url);
        return true;
    } catch (error) {
        return false;
    }
}

module.exports = {
    isValidColor,
    isImageUrlValid
};