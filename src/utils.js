'use strict';

const jimp = require('jimp');
const { loadImage } = require('canvas');
const { createConicalGradient } = require('./utils/createConicGradient.js');

module.exports.isValidColor = isValidColor;
module.exports.isImageUrlValid = isImageUrlValid;
module.exports.lazyLoadImage = lazyLoadImage;
module.exports.color = color;

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
    else if (typeof color === "object" && [ "gradient", "pattern" ].includes(color.toJSON().type)) {
        return true;
    }
    return false;
}

async function isImageUrlValid(url) {
    try {
        await jimp.read(url);
        return true;
    } catch (error) {
        return false;
    }
}

function color(ctx, colorParam) {
    if (typeof colorParam === 'object') {
        colorParam = colorParam.toJSON();
        let gradient;
        if (colorParam.gradientType === 'linear') gradient = ctx.createLinearGradient(colorParam.points[0].x, colorParam.points[0].y, colorParam.points[1].x, colorParam.points[1].y);
        else if (colorParam.gradientType === 'radial') gradient = ctx.createRadialGradient(colorParam.points[0].x, colorParam.points[0].y, 0, colorParam.points[0].x, colorParam.points[0].y, colorParam.radius);
        else if (colorParam.gradientType === 'conic') gradient = createConicalGradient(ctx, colorParam.colorPoints, colorParam.points[0].x, colorParam.points[0].y, -Math.PI, Math.PI, false);
        if (colorParam.gradientType !== 'conic') {
            for (const colors of colorParam.colorPoints) {
                gradient.addColorStop(colors.position, colors.color);
            }
        }
        return gradient;
    } else {
        return colorParam;
    }
}

async function lazyLoadImage(url) {
    return new Promise(async (resolve, reject) => {
        if (!url) reject('URL must be provided');
        if (!await isImageUrlValid(url)) reject('Invalid URL');
        jimp.read(url, async (err, image) => {
            if (err) reject(err);
            image = await image.getBufferAsync(jimp.MIME_PNG);
            image = await loadImage(image);
            resolve(image);
        });
    });
}

