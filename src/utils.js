'use strict';

const jimp = require('jimp');
const { loadImage, createCanvas } = require('canvas');
const { createConicalGradient } = require('./utils/createConicGradient.js');
const fs = require('fs');

module.exports.isValidColor = isValidColor;
module.exports.isImageUrlValid = isImageUrlValid;
module.exports.lazyLoadImage = lazyLoadImage;
module.exports.color = color;
module.exports.textMetrics = textMetrics;
module.exports.saveFile = saveFile;
module.exports.generateRandomName = generateRandomName;

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

function textMetrics(value, width= 500, height= 500) {
    if (!value) throw new Error('Value must be provided');
    if (typeof value !== 'object') throw new Error('Value must be a object');

    if (value.toJSON().structureType === 'layer' && value.toJSON().type === 'text') {

        const canvas = createCanvas(width, height);
        const ctx = canvas.getContext('2d');

        ctx.font = `${value.toJSON().weight} ${value.toJSON().size}px ${value.toJSON().font}`;
        return ctx.measureText(value.toJSON().text);

    } else if (value.toJSON().structureType === 'canvas') {

        const canvas = createCanvas(value.toJSON().width, value.toJSON().height);
        const ctx = canvas.getContext('2d');

        let layers = value.toJSON().layers.filter(layer => layer.type === 'text');

        let metrics = [];

        for (const layer of layers) {
            ctx.font = `${layer.weight} ${layer.size}px ${layer.font}`;
            metrics.push(ctx.measureText(layer.text));
        }

        return metrics;
    }
}

async function saveFile(buffer, extension, name) {
    if (!buffer) throw new Error('Buffer must be provided');
    if (!extension) throw new Error('Extension must be provided');
    if (typeof extension !== 'string') throw new Error('Extension must be a string');
    if (!['png', 'jpeg', 'webp'].includes(extension)) throw new Error('Invalid extension');

    fs.writeFileSync(`${name === undefined ? generateRandomName() : name }.${extension}`, buffer);
}

function generateRandomName() {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
}