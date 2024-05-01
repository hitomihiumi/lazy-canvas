'use strict';

const jimp = require('jimp');
const { loadImage } = require('canvas');

function isValidColor(color) {

    if (/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(color)) {
        return true;
    }

    const verbalColorNames = [
        'black', 'silver', 'gray', 'white', 'maroon', 'red', 'purple', 'fuchsia',
        'green', 'lime', 'olive', 'yellow', 'navy', 'blue', 'teal', 'aqua'
    ];
    if (typeof color === "string" && verbalColorNames.includes(color.toLowerCase())) {
        return true;
    }

    if (typeof color === "object" && color.toJSON().type === "gradient") {
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

function color(ctx, color) {
    if (typeof color === 'object') {
        color = color.toJSON();
        let gradient;
        if (color.gradientType === 'linear') gradient = ctx.createLinearGradient(color.points[0].x, color.points[0].y, color.points[1].x, color.points[1].y);
        else if (color.gradientType === 'radial') gradient = ctx.createRadialGradient(color.points[0].x, color.points[0].y, color.r0, color.points[1].x, color.points[1].y, color.r1);
        for (const colors of color.colorPoints) {
            gradient.addColorStop(colors.position, colors.color);
        }
        return gradient;
    } else {
        return color;
    }
}

async function lazyLoadImage(url) {
    return new Promise(async (resolve, reject) => {
        if (!url) reject('URL must be provided');

        if (!await isImageUrlValid(url)) reject('Invalid URL');

        jimp.read(url, async (err, image) => {
            if (err) reject(err);
            image = await image.getBufferAsync(jimp.MIME_PNG);
            image = await loadImage(image)
            resolve(image);
        });
    });
}

module.exports = {
    isValidColor,
    isImageUrlValid,
    color,
    lazyLoadImage
};