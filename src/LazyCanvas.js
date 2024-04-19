'use strict';

const { createCanvas, loadImage, registerFont } = require('canvas');
const jimp = require('jimp');
const { resolve } = require('path');
const drawMultilineText = require('canvas-multiline-text')

class LazyCanvas {
    constructor({ data } = {}) {
        this.data ??= data;
        this.errorImage = null;
    }

    /**
     * @param data - The main array with all data
     * If you want to create a new canvas, you can use the createNewCanvas method
     */
    setData(data) {
        if (!data) throw new Error("No data provided");
        this.data = data;
        return this;
    }

    /**
     * @param width - The width of the canvas
     * @param height - The height of the canvas
     * Create's a new canvas with the provided width and height
     */
    createNewCanvas(width, height) {
        if (!width || !height) throw new Error("No width or height provided");
        this.data = {
            w: width,
            h: height,
            layers: []
        }
        return this;
    }

    /**
     * @param data - The data of the layer
     * Add's a new layer to the canvas from provided data.
     * @examples data exemples for different types of layers
     * ```js
     * const { CircleLayer, LazyCanvas } = require('lazy-canvas');
     * 
     * const circle = new CircleLayer()
     * .setx(10)
     * .setY(10)
     * .setDiameter(100)
     * .setFilled(true)
     * .setColor("#FF8A8A")
     * 
     * const lazy = new LazyCanvas()
     * .createNewCanvas(500, 500)
     * .addLayer(circle) 
     * ```
     */
    addLayer(layer) {
        if (!layer) throw new Error("No data provided");
        this.data.layers.push(layer.toJSON());
        return this;
    }

    /**
     * @param data - The data of the layer
     * Remove's a layer from the canvas
    */
    removeLayer(data) {
        if (!data) throw new Error("No data provided");
        this.data.layers = this.data.layers.filter(l => l !== data);
        return this;
    }

    /**
     * @param data - The data of the layer
     * @param index - The index to move the layer to
     * Move's a layer to the provided index
     */
    moveLayer(data, index) {
        if (!data || !index) throw new Error("No data or index provided");
        this.data.layers.splice(index, 0, this.data.layers.splice(this.data.layers.indexOf(data), 1)[0]);
        return this;
    }

    /**
     * @param data - The data of the layer
     * @param param - The parameter to modify
     * @param newData - The new data to set
     * Modify's a layer's data
     * @list of params:
     * 
     * x - The x position of the layer
     * 
     * y - The y position of the layer
     * 
     * width - The width of the layer (only for circle, ellipse, square, rectangle, ellipseimage, image, text)
     * 
     * height - The height of the layer (only for ellipse, rectangle, ellipseimage, image, text)
     * 
     * radius - The radius of the layer (only for circle, ellipse)
     * 
     * stroke - The line thickness of the layer (only for circle, ellipse, square, rectangle, line)
     * 
     * color - The color of the layer (only for circle, ellipse, square, rectangle, line, text)
     * 
     * text - The text of the layer (only for text)
     * 
     * size - The size of the text (only for text)
     * 
     * font - The font of the text (only for text)
     * 
     * align - The alignment of the text (only for text)
     * 
     * style - The style of the text (only for text)
     * 
     * multiline - If the text is multiline (only for text)
     * 
     * image - The image of the layer (only for ellipseimage, image)
     * 
     * filled - If the layer is filled (only for circle, ellipse, square, rectangle)
     * 
     * x2 - The x2 position of the line (only for line)
     * 
     * y2 - The y2 position of the line (only for line)
     */
    modifyLayer(index, param, newData) {
        if (!index || !param || !newData) throw new Error("No index or param or newData provided");
        switch (param) {
            case "x":
                this.data.layers[index].x = newData;
                break;
            case "y":
                this.data.layers[index].y = newData;
                break;
            case "width":
                if (!this.data.layers[index].width) throw new Error("This layer does not have a width property");
                this.data.layers[index].width = newData;
                break;
            case "height":
                if (!this.data.layers[index].height) throw new Error("This layer does not have a height property");
                this.data.layers[index].height = newData;
                break;
            case "radius":
                if (!this.data.layers[index].radius) throw new Error("This layer does not have a radius property");
                this.data.layers[index].radius = newData;
                break;
            case "stroke":
                if (!this.data.layers[index].stroke) throw new Error("This layer does not have a stroke property");
                this.data.layers[index].stroke = newData;
                break;
            case "color":
                if (!this.data.layers[index].color) throw new Error("This layer does not have a color property");
                this.data.layers[index].color = newData;
                break;
            case "text":
                if (!this.data.layers[index].text) throw new Error("This layer does not have a text property");
                this.data.layers[index].text = newData;
                break;
            case "size":
                if (!this.data.layers[index].size) throw new Error("This layer does not have a size property");
                this.data.layers[index].size = newData;
                break;
            case "font":
                if (!this.data.layers[index].font) throw new Error("This layer does not have a font property");
                this.data.layers[index].font = newData;
                break;
            case "align":
                if (!this.data.layers[index].align) throw new Error("This layer does not have a align property");
                this.data.layers[index].align = newData;
                break;
            case "style":
                if (!this.data.layers[index].style) throw new Error("This layer does not have a style property");
                this.data.layers[index].style = newData;
                break;
            case "multiline":
                if (!this.data.layers[index].multiline) throw new Error("This layer does not have a multiline property");
                this.data.layers[index].multiline = newData;
                break;
            case "image":
                if (!this.data.layers[index].image) throw new Error("This layer does not have a image property");
                this.data.layers[index].image = newData;
                break;
            case "filled":
                if (!this.data.layers[index].filled) throw new Error("This layer does not have a filled property");S
                this.data.layers[index].filled = newData;
                break;
            case "x2":
                if (!this.data.layers[index].x2) throw new Error("This layer does not have a x2 property");
                this.data.layers[index].x2 = newData;
                break;
            case "y2":
                if (!this.data.layers[index].y2) throw new Error("This layer does not have a y2 property");
                this.data.layers[index].y2 = newData;
                break;
        }
    }

    /**
     * @param index - The index of the layer
     * Get's a layer from the canvas
     * @returns {object} - The layer
     */
    getLayer(index) {
        if (!index) throw new Error("No index provided");
        return this.data.layers[index];
    }

    /**
     * @param data - The data of the layer
     * Get's the index of a layer
     * @returns {number} - The index of the layer
     */
    getIndexOfLayer(data) {
        if (!data) throw new Error("No data provided");
        return this.data.layers.indexOf(data);
    }

    /**
     * Clear's the canvas
     * Removes all layers from the canvas
     */
    clearCanvas() {
        this.data.layers = [];
        return this;
    }

    /**
     * @param name - The name of the canvas
     * Set's the name of the canvas
     * @examples name: "Canvas"
     */
    setName(name) {
        if (!name) throw new Error("No name provided");
        this.data.name = name;
        return this;
    }

    /**
     * @param description - The description of the canvas
     * Set's the description of the canvas
     * @examples description: "This is a canvas"
     */
    setDescription(description) {
        if (!description) throw new Error("No description provided");
        this.data.description = description;
        return this;
    }

    /**
     * @param emoji - The emoji of the canvas
     * Set's the emoji of the canvas
     * @examples emoji: "🎨"
     * @examples emoji: "1226456262862962789" (emoji id)
     */
    setEmoji(emoji) {
        if  (!emoji) throw new Error("No emoji provided");
        this.data.emoji = emoji;
        return this;
    }

    /**
     * Get's the data of the canvas
     * @returns {object} - The data of the canvas
     */
    getData() {
        return this.data;
    }

    /**
     * @param fonts - The fonts to load
     * Load's the provided fonts
     * @examples fonts: { path: "./some/path/font.ttf", family: "Arial", weight: "regular" }
     * The base folder in the path is the root folder of the project
     */
    loadFonts(...fonts) {
        if (!fonts) throw new Error("No fonts provided");
        for (const font of fonts) {
            let load = font.toJSON()
            if (!load.path) throw new Error("No path provided");
            if (!load.family) throw new Error("No family provided");
            if (!load.weight) throw new Error("No weight provided");
            registerFont(resolve(load.path), {
                family: load.family,
                weight: load.weight
            });
        }
        return this;
    }

    /**
     * @param image - The path to error image
     * Set's the image for the 404 error
     */
    set404Image(image) {
        if (!image) throw new Error("No image provided");
        this.errorImage = image;
        return this;
    }

    clipper(ctx,img, x,y,w,h,rad){
        ctx.beginPath();
        ctx.arc(x+rad, y+rad, rad, Math.PI, Math.PI+Math.PI/2 , false);
        ctx.lineTo(x+w - rad, y);
        ctx.arc(x+w-rad, y+rad, rad, Math.PI+Math.PI/2, Math.PI*2 , false);
        ctx.lineTo(x+w,y+h - rad);
        ctx.arc(x+w-rad,y+h-rad,rad,Math.PI*2,Math.PI/2,false);
        ctx.lineTo(x+rad,y+h);
        ctx.arc(x+rad,y+h-rad,rad,Math.PI/2,Math.PI,false);
        ctx.closePath();
        ctx.save();
        ctx.clip();
        ctx.globalAlpha = 1
        ctx.drawImage(img,x,y,w,h);
        ctx.restore();
      }
    
    fillRoundedRect(ctx, x, y, w, h, r){
        ctx.beginPath();
        ctx.moveTo(x + (w /2), y);
        ctx.arcTo(x + w, y, x + w, y + (h / 2), r);
        ctx.arcTo(x + w, y + h, x + (w / 2), y + h, r);
        ctx.arcTo(x, y + h, x, y + (h / 2), r);
        ctx.arcTo(x, y, x + (w / 2), y, r);
        ctx.closePath();
        ctx.fill();
      }
      
      outerlineRounded(ctx, x, y, w, h, r, s = 1){
        ctx.beginPath();
        ctx.lineWidth = s;
        ctx.moveTo(x + (w /2), y);
        ctx.arcTo(x + w, y, x + w, y + (h / 2), r);
        ctx.arcTo(x + w, y + h, x + (w / 2), y + h, r);
        ctx.arcTo(x, y + h, x, y + (h / 2), r);
        ctx.arcTo(x, y, x + (w / 2), y, r);
        ctx.closePath();
        ctx.stroke();
      }

    circle(ctx, data, filled = true) {
        if (filled) {
            ctx.beginPath();
            ctx.fillStyle = data.color;
            this.fillRoundedRect(ctx, data.x, data.y, data.width, data.width, data.width / 2);
            ctx.closePath();
        } else {
            ctx.beginPath();
            ctx.strokeStyle = data.color;
            this.outerlineRounded(ctx, data.x, data.y, data.width, data.width, data.width / 2, data.stroke);
            ctx.closePath();
        }
    }

    ellipse(ctx, data, filled = true) {
        if (filled) {
            ctx.beginPath();
            ctx.fillStyle = data.color;
            ctx.fillRoundedRect(data.x, data.y, data.width, data.height, data.radius);
            ctx.fill();
            ctx.closePath();
        } else {
            ctx.beginPath();
            ctx.strokeStyle = data.color;
            ctx.outerlineRounded(data.x, data.y, data.width, data.height, data.radius, data.stroke);
            ctx.stroke();
            ctx.closePath();
        }
    }

    square(ctx, data, filled = true) {
        if (filled) {
            ctx.beginPath();
            ctx.fillStyle = data.color;
            ctx.fillRect(data.x, data.y, data.width, data.width);
            ctx.closePath();
        } else {
            ctx.beginPath();
            ctx.strokeStyle = data.color;
            ctx.strokeRect(data.x, data.y, data.width, data.width);
            ctx.closePath();
        }
    }

    rectangle(ctx, data, filled = true) {
        if (filled) {
            ctx.beginPath();
            ctx.fillStyle = data.color;
            ctx.fillRect(data.x, data.y, data.width, data.height);
            ctx.closePath();
        } else {
            ctx.beginPath();
            ctx.strokeStyle = data.color;
            ctx.strokeRect(data.x, data.y, data.width, data.height);
            ctx.closePath();
        }
    }

    line(ctx, data) {
        ctx.beginPath();
        ctx.strokeStyle = data.color;
        ctx.lineWidth = data.stroke;
        ctx.moveTo(data.x, data.y);
        ctx.lineTo(data.x2, data.y2);
        ctx.stroke();
        ctx.closePath();
    }

    textRender(ctx, data) {
        ctx.beginPath();
        if (data.multiline) {
            drawMultilineText(ctx, data.text, {
                rect: {
                    x: data.x,
                    y: data.y,
                    width: data.width,
                    height: data.height
                },
                font: data.font,
                style: data.style,
                verbose: false,
                lineHeight: 1,
                minFontSize: 25,
                maxFontSize: data.size
            })
        } else {
            ctx.font = `${data.style} ${data.size}px ${data.font}`;
            ctx.fillStyle = data.color;
            ctx.textAlign = data.align;
            ctx.fillText(data.text, data.x, data.y);
        }
    }

    async renderImage() {
        return new Promise(async function(resolve, reject) {
            let canvas = createCanvas(this.data.width, this.data.height);
            let ctx = canvas.getContext("2d");

            for (const data of this.data.layers) {
                let image;
                switch (data.type) {
                    case "circle":
                        this.circle(ctx, data, data.filled);
                        // data = { x: 10, y: 10, width: 100, stroke: null, color: "red", filled: true }
                        break;
                    case "ellipse":
                        this.ellipse(ctx, data, data.filled);
                        // data = { x: 10, y: 10, width: 100, height: 50, radius: 30, stroke: null, color: "red", filled: true }
                        break;
                    case "square":
                        this.square(ctx, data, data.filled);
                        // data = { x: 10, y: 10, width: 100, stroke: null, color: "red", filled: true }
                        break;
                    case "rectangle":
                        this.rectangle(ctx, data, data.filled);
                        // data = { x: 10, y: 10, width: 100, height: 50, stroke: null, color: "red", filled: true }
                        break;
                    case "line":
                        this.line(ctx, data);
                        // data = { x: 10, y: 10, x2: 100, y2: 100, stroke: 1, color: "red" }
                        break;
                    case "ellipseimage":
                        try {
                            image = await jimp.read(data.image);
                        } catch (e) {
                            image = await jimp.read(this.errorImage);
                        }

                        image = await image.getBufferAsync('image/png');

                        image = await loadImage(image);
                        this.clipper(ctx, image, data.x, data.y, data.width, data.height, data.radius);
                        // data = { x: 10, y: 10, width: 100, height: 50, radius: 30, image: "url" }
                        break;
                    case "image":
                        try {
                            image = await jimp.read(data.image);
                        } catch (e) {
                            image = await jimp.read(this.errorImage);
                        }

                        image = await image.getBufferAsync('image/png');

                        image = await loadImage(image);
                        ctx.drawImage(image, data.x, data.y, data.w, data.h);
                        // data = { x: 10, y: 10, w: 100, h: 50, image: "url" }
                        break;
                    case "text":
                        this.textRender(ctx, data);
                        // data = { x: 10, y: 10, text: "Hello World", size: 20, color: "red", font: "Arial", align: "center", style: "bold", multiline: false, width: 100, height: 50 }
                        break;
                }
            }

            return resolve(canvas.toBuffer());
        }.bind(this))
    } 
}

module.exports = LazyCanvas;

/*
*
* Circle: { x: 10, y: 10, width: 100, stroke: null, color: "red", filled: true }
* 
* Ellipse: { x: 10, y: 10, width: 100, height: 50, radius: 30, stroke: null, color: "red", filled: true }
* 
* Square: { x: 10, y: 10, width: 100, stroke: null, color: "red", filled: true }
* 
* Rectangle: { x: 10, y: 10, width: 100, height: 50, stroke: null, color: "red", filled: true }
* 
* Line: { x: 10, y: 10, x2: 100, y2: 100, stroke: 1, color: "red" }
* 
* ellipseImage: { x: 10, y: 10, width: 100, height: 50, radius: 30, image: "url" }
* 
* Image: { x: 10, y: 10, w: 100, h: 50, image: "url" }
* 
* Text: { x: 10, y: 10, text: "Hello World", size: 20, color: "red", font: "Arial", align: "center", style: "bold", multiline: false, width: 100, height: 50 }
*/