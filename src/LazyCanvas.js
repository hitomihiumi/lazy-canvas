'use strict';

const { createCanvas, loadImage, registerFont } = require('canvas');
const jimp = require('jimp');
const { resolve } = require('path');
const drawMultilineText = require('canvas-multiline-text')
const { isValidColor, isImageUrlValid, color } = require('./utils.js');


class LazyCanvas {
    constructor({ data } = {}) {
        this.data ??= data;
        this.methods = [];
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
            width: width,
            height: height,
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
     * .setRadius(50)
     * .setFilled(true)
     * .setColor("#FF8A8A")
     * 
     * const lazy = new LazyCanvas()
     * .createNewCanvas(500, 500)
     * .addLayer(circle) 
     * ```
     */
    addLayers(...layers) {
        if (!layers) throw new Error("No layers data provided");
        for (const l of layers) {
            this.data.layers.push(l.toJSON());
        }
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
     * radius - The radius of the layer (only for circle, ellipse, ellipseimage, ngon)
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
     * weight - The weight of the text (only for text)
     * 
     * multiline - If the text is multiline (only for text)
     * 
     * image - The image of the layer (only for ellipseimage, image)
     * 
     * filled - If the layer is filled (only for circle, ellipse, square, rectangle)
     * 
     * points - The points of the layer (only for line)
     * 
     * shadowBlur - The shadow blur of the layer
     * 
     * shadowColor - The shadow color of the layer
     * 
     * shadowOffsetX - The shadow offset x of the layer
     * 
     * shadowOffsetY - The shadow offset y of the layer
     * 
     * alpha - The alpha of the layer
     * 
     * rotation - The rotation of the layer
     * 
     * @examples modifyLayer(0, "x", 100)
     */
    modifyLayer(index, param, newData) {
        if (!index || !param || !newData) throw new Error("No index or param or newData provided");
        switch (param) {
            case "x":
                this.data.layers[index].x = newData;
                if (isNaN(newData)) throw new Error("X must be a number");
                break;
            case "y":
                this.data.layers[index].y = newData;
                if (isNaN(newData)) throw new Error("Y must be a number");
                break;
            case "width":
                if (isNaN(newData)) throw new Error("Width must be a number");
                this.data.layers[index].width = newData;
                break;
            case "height":
                if (isNaN(newData)) throw new Error("Height must be a number");
                this.data.layers[index].height = newData;
                break;
            case "radius":
                if (isNaN(newData)) throw new Error("Radius must be a number");
                this.data.layers[index].radius = newData;
                break;
            case "stroke":
                if (isNaN(newData)) throw new Error("Stroke must be a number");
                this.data.layers[index].stroke = newData;
                break;
            case "color":
                if (!this.isValidColor(newData)) throw new Error("Color must be a valid color");
                this.data.layers[index].color = newData;
                break;
            case "text":
                this.data.layers[index].text = newData;
                break;
            case "size":
                if (isNaN(newData)) throw new Error("Size must be a number");
                this.data.layers[index].size = newData;
                break;
            case "font":
                this.data.layers[index].font = newData;
                break;
            case "align":
                if (['start', 'end', 'left', 'right', 'center'].includes(newData) == false) throw new Error("Align must be start, end, left, right or center");
                this.data.layers[index].align = newData;
                break;
            case "weight":
                if (['normal', 'bold', 'italic', 'bold italic', 'regular'].includes(newData) == false) throw new Error("Weight must be bold, italic or regular");
                this.data.layers[index].weight = newData;
                break;
            case "multiline":
                if (typeof newData !== "boolean") throw new Error("Multiline must be a true or false value");
                this.data.layers[index].multiline = newData;
                break;
            case "image":
                if (!this.isImageUrlValid(newData)) throw new Error("Image must be a valid URL");
                this.data.layers[index].image = newData;
                break;
            case "filled":
                if (typeof newData !== "boolean") throw new Error("Filled must be a true or false value");
                this.data.layers[index].filled = newData;
                break;
            case "points":
                if (!newData) throw new Error("No points provided");
                this.data.layers[index].points = newData;
                break;
            case "sides":
                if (isNaN(newData)) throw new Error("Sides must be a number");
                this.data.layers[index].sides = newData;
                break;
            case "shadowBlur":
                if (isNaN(newData)) throw new Error("ShadowBlur must be a number");
                this.data.layers[index].shadow.shadowBlur = newData;
                break;
            case "shadowColor":
                if (!this.isValidColor(newData)) throw new Error("ShadowColor must be a valid color");``
                this.data.layers[index].shadow.shadowColor = newData;
                break;
            case "shadowOffsetX":
                if (isNaN(newData)) throw new Error("ShadowOffsetX must be a number");
                this.data.layers[index].shadow.shadowOffsetX = newData;
                break;
            case "shadowOffsetY":
                if (isNaN(newData)) throw new Error("ShadowOffsetY must be a number");
                this.data.layers[index].shadow.shadowOffsetY = newData;
                break;
            case "alpha":
                if (isNaN(newData)) throw new Error("Alpha must be a number");
                if (newData > 1 || newData < 0) throw new Error("Alpha must be between 0 and 1");
                this.data.layers[index].alpha = newData;
                break;
            case "rotation":
                if (isNaN(newData)) throw new Error("Rotation must be a number");
                this.data.layers[index].angle = newData;
                break;
        }
    }

    /**
     * @param index - The index of the layer
     * Get's a layer from the canvas
     * @returns {object} - The layer
     */
    getLayer(index) {
        if (!index && index !== 0) throw new Error("No index provided");
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

    loadMethods(...methods) {
        if (!methods) throw new Error("No methods provided");
        for (const method of methods) {
            let load = method.toJSON();
            if (!load.name) throw new Error("No name provided");
            if (!load.method) throw new Error("No method provided");
            this.methods.push({ name: load.name, method: load.method });
        }
        return this; 
    }

    isValidColor = isValidColor;

    isImageUrlValid = isImageUrlValid;

    color = color;

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
        ctx.beginPath();
        if (filled == true) {
            ctx.fillStyle = this.color(ctx, data.color);
            this.fillRoundedRect(ctx, data.x, data.y, data.width * 2, data.width * 2, data.width);
        } else {
            ctx.strokeStyle = this.color(ctx, data.color);
            this.outerlineRounded(ctx, data.x, data.y, data.width * 2, data.width * 2, data.width, data.stroke);
        }
        ctx.closePath();
    }

    ellipse(ctx, data, filled = true) {
        ctx.beginPath();
        ctx.save();
        ctx.translate(data.x + data.width / 2, data.y + data.height / 2);
        ctx.rotate((Math.PI/180) * data.angle);
        ctx.translate(-(data.x + data.width / 2), -(data.y + data.height / 2));
        if (filled == true) {
            ctx.fillStyle = this.color(ctx, data.color);
            this.fillRoundedRect(ctx, data.x, data.y, data.width, data.height, data.radius);
        } else {
            ctx.strokeStyle = this.color(ctx, data.color);
            this.outerlineRounded(ctx, data.x, data.y, data.width, data.height, data.radius, data.stroke);
        }
        ctx.restore();
        ctx.closePath();
    }

    square(ctx, data, filled = true) {
        ctx.beginPath();
        ctx.save();
        ctx.translate(data.x + data.width / 2, data.y + data.width / 2);
        ctx.rotate((Math.PI/180) * data.angle);
        ctx.translate(-(data.x + data.width / 2), -(data.y + data.width / 2));
        if (filled == true) {
            ctx.fillStyle = this.color(ctx, data.color);
            ctx.fillRect(data.x, data.y, data.width, data.width);
        } else {
            ctx.strokeStyle = this.color(ctx, data.color);
            ctx.strokeRect(data.x, data.y, data.width, data.width);
        }
        ctx.restore();
        ctx.closePath();
    }

    rectangle(ctx, data, filled = true) {
        ctx.beginPath();
        ctx.save();
        ctx.translate(data.x + data.width / 2, data.y + data.height / 2);
        ctx.rotate((Math.PI/180) * data.angle);
        ctx.translate(-(data.x + data.width / 2), -(data.y + data.height / 2));
        if (filled) {
          ctx.fillStyle = this.color(ctx, data.color);
          ctx.fillRect(data.x, data.y, data.width, data.height);
        } else {
          ctx.strokeStyle = this.color(ctx, data.color);
          ctx.strokeRect(data.x, data.y, data.width, data.height);
        }
        ctx.restore();
        ctx.closePath();
    }

    ngon(ctx, data, filled = true) {
        ctx.beginPath();
        ctx.moveTo(data.x + data.radius * Math.cos(0 + data.angle), data.y + data.radius * Math.sin(0 + data.angle));
        for (let i = 1; i < data.sides; i++) {
          ctx.lineTo(data.x + data.radius * Math.cos(i * 2 * Math.PI / data.sides + data.angle), data.y + data.radius * Math.sin(i * 2 * Math.PI / data.sides + data.angle));
        }
        ctx.closePath();
        if (filled == true) {
            ctx.fillStyle = this.color(ctx, data.color);
            ctx.fill();
        } else {
            ctx.lineWidth = data.stroke;
            ctx.strokeStyle = this.color(ctx, data.color);
            ctx.stroke();
        }
    }

    line(ctx, data) {
        ctx.beginPath();
        ctx.save();
        ctx.translate((data.points[0].x + data.points[1].x) / 2, (data.points[0].y + data.points[1].y) / 2);
        ctx.rotate((Math.PI/180) * data.angle);
        ctx.translate(-((data.points[0].x + data.points[1].x) / 2), -((data.points[0].y + data.points[1].y) / 2));
        ctx.strokeStyle = this.color(ctx, data.color);
        ctx.lineWidth = data.stroke;
        ctx.moveTo(data.points[0].x, data.points[0].y);
        ctx.lineTo(data.points[1].x, data.points[1].y);
        ctx.stroke();
        ctx.restore();
        ctx.closePath();
    }

    textRender(ctx, data) {
        ctx.beginPath();
        ctx.save();
        if (data.multiline) {
            ctx.translate(data.x + data.width / 2, data.y + data.height / 2);
            ctx.rotate((Math.PI/180) * data.angle);
            ctx.translate(-(data.x + data.width / 2), -(data.y + data.height / 2));
            ctx.textAlign = data.align;
            if (data.baseline) ctx.textBaseline = data.baseline;
            if (data.direction) ctx.direction = data.direction;
            if (data.fill) ctx.fillStyle = this.color(ctx, data.color);
            else ctx.strokeStyle = this.color(ctx, data.color);
            drawMultilineText(ctx, data.text, {
                rect: {
                    x: data.x,
                    y: data.y,
                    width: data.width,
                    height: data.height
                },
                font: data.font,
                style: data.weight,
                verbose: false,
                lineHeight: 1,
                minFontSize: 25,
                maxFontSize: data.size,
                stroke: !data.fill
            })
        } else {
            if (data.align == "center") {
                ctx.translate(data.x, data.y);
                ctx.rotate((Math.PI/180) * data.angle);
                ctx.translate(-data.x, -data.y);
            } else if (data.align == "left" || data.align == "start") {
                ctx.translate(data.x + (data.font * data.text.length) / 2, data.y + data.font / 2);
                ctx.rotate((Math.PI/180) * data.angle);
                ctx.translate(-(data.x + (data.font * data.text.length) / 2), -(data.y + data.font / 2));
            } else if (data.align == "right" || data.align == "end") {
                ctx.translate(data.x - (data.font * data.text.length) / 2, data.y + data.font / 2);
                ctx.rotate((Math.PI/180) * data.angle);
                ctx.translate(-(data.x - (data.font * data.text.length) / 2), -(data.y - data.font / 2));
            }
            ctx.font = `${data.weight} ${data.size}px ${data.font}`;
            ctx.textAlign = data.align;
            if (data.baseline) ctx.textBaseline = data.baseline;
            if (data.direction) ctx.direction = data.direction;
            if (data.fill) {
                ctx.fillStyle = this.color(ctx, data.color);
                ctx.fillText(data.text, data.x, data.y);
            } else {
                ctx.strokeStyle = this.color(ctx, data.color);
                ctx.strokeText(data.text, data.x, data.y);
            }
        }
        ctx.restore();
        ctx.closePath();
    }

    async renderImage() {
        return new Promise(async function(resolve, reject) {
            let canvas = createCanvas(this.data.width, this.data.height);
            let ctx = canvas.getContext("2d");

            for (const data of this.data.layers) {
                ctx.beginPath();

                if (data.alpha) { 
                    ctx.globalAlpha = data.alpha;
                } else { 
                    ctx.globalAlpha = 1; 
                }

                if (data.shadow && data.shadow.shadowColor) {
                    ctx.shadowColor = data.shadow.shadowColor;
                    if (data.shadow.shadowBlur) ctx.shadowBlur = data.shadow.shadowBlur;
                    if (data.shadow.shadowOffsetX) ctx.shadowOffsetX = data.shadow.shadowOffsetX;
                    if (data.shadow.shadowOffsetY) ctx.shadowOffsetY = data.shadow.shadowOffsetY;
                }

                if (!data.angle) data.angle = 0;

                let image;
                switch (data.type) {
                    case "circle":
                        this.circle(ctx, data, data.fill);
                        // data = { x: 10, y: 10, width: 100, stroke: null, color: "red", filled: true }
                        break;
                    case "ellipse":
                        this.ellipse(ctx, data, data.fill);
                        // data = { x: 10, y: 10, width: 100, height: 50, radius: 30, stroke: null, color: "red", filled: true }
                        break;
                    case "square":
                        this.square(ctx, data, data.fill);
                        // data = { x: 10, y: 10, width: 100, stroke: null, color: "red", filled: true }
                        break;
                    case "rectangle":
                        this.rectangle(ctx, data, data.fill);
                        // data = { x: 10, y: 10, width: 100, height: 50, stroke: null, color: "red", filled: true }
                        break;
                    case "line":
                        this.line(ctx, data);
                        // data = { points: [{ x: 10, y: 10 }, { x: 100, y: 100 }], stroke: 1, color: "red" }
                        break;
                    case "ellipseimage":
                        ctx.beginPath();
                        try {
                            image = await jimp.read(String(data.image));
                        } catch (e) {
                            console.log(e + `\n[LazyCanvas] Try to load the error image`)
                            if (!this.errorImage) {
                                image = await jimp.read(String(this.errorImage));
                            }
                        }

                        ctx.save();
                        ctx.translate(data.x + data.width / 2, data.y + data.height / 2);
                        ctx.rotate((Math.PI/180) * data.angle);
                        ctx.translate(-(data.x + data.width / 2), -(data.y + data.height / 2));

                        image = await image.getBufferAsync('image/png');

                        image = await loadImage(image);
                        this.clipper(ctx, image, data.x, data.y, data.width, data.height, data.radius);
                        ctx.restore();
                        ctx.closePath();
                        // data = { x: 10, y: 10, width: 100, height: 50, radius: 30, image: "url" }
                        break;
                    case "image":
                        ctx.beginPath();
                        try {
                            image = await jimp.read(String(data.image));
                        } catch (e) {
                            console.log(e + `\n[LazyCanvas] Try to load the error image`)
                            if (!this.errorImage) {
                                image = await jimp.read(String(this.errorImage));
                            }
                        }

                        ctx.save();
                        ctx.translate(data.x + data.width / 2, data.y + data.height / 2);
                        ctx.rotate((Math.PI/180) * data.angle);
                        ctx.translate(-(data.x + data.width / 2), -(data.y + data.height / 2));

                        image = await image.getBufferAsync('image/png');

                        image = await loadImage(image);
                        ctx.drawImage(image, data.x, data.y, data.width, data.height);
                        ctx.restore();
                        ctx.closePath();
                        // data = { x: 10, y: 10, w: 100, h: 50, image: "url" }
                        break;
                    case "text":
                        this.textRender(ctx, data);
                        // data = { x: 10, y: 10, text: "Hello World", size: 20, color: "red", font: "Arial", align: "center", style: "bold", multiline: false, width: 100, height: 50 }
                        break;
                    case "ngon":
                        this.ngon(ctx, data, data.fill);
                        // data = { points: [{ x: 10, y: 10 }, { x: 100, y: 100 }, { x: 50, y: 50 }], color: "red", filled: true }
                        break;
                    default:
                        if (this.methods.find(m => m.name === data.type)) {
                            let method = this.methods.find(m => m.name === data.type);
                            if (method.method[Symbol.toStringTag] === 'AsyncFunction') {
                                await method.method(ctx, data);
                            } else {
                                method.method(ctx, data);
                            }
                        } else {
                            console.log(`[LazyCanvas] Method for ${data.type} not found`);
                        }
                        break;
                }
                ctx.closePath();
            }

            return resolve(canvas.toBuffer());
        }.bind(this))
    } 
}

module.exports = LazyCanvas;