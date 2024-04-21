declare module '@hitomihiumi/lazy-canvas';

export class LazyCanvas {
    constructor(data: LazyCanvasData, errorImage: string);
    setData(data: LazyCanvasData): this;
    getData(): this;
    createNewCanvas(width: number, height: number): this;
    clearCanvas(): this;
    addLayers(layer: LazyCanvasLayer): this;
    removeLayer(data: LazyCanvasLayer): this;
    moveLayer(data: LazyCanvasLayer, index: number): this;
    modifyLayer(index: number, param: string, newData: any): this;
    getLayer(index: number): this;
    getIndexOfLayer(data: LazyCanvasLayer): this;
    setName(name: string): this;
    setDescription(description: string): this;
    setEmoji(emoji: string): this;
    loadFonts(...fonts: LazyCanvasFont[]): this;
    set404Image(image: string): this;
    renderImage(): Promise<image>;
    }

export class BaseLayer {
    constructor(data: LazyCanvasLayer);
    setX(x: number): this;
    setY(y: number): this;
    setShadowColor(color: string): this;
    setShadowBlur(blur: number): this;
    setShadowOffsetX(offsetX: number): this;
    setShadowOffsetY(offsetY: number): this;
    setAlpha(alpha: number): this;
    toJSON(): LazyCanvasLayer;
}

export class CircleLayer extends BaseLayer {
    constructor(data: LazyCanvasCircleLayer);
    setRadius(radius: number): this;
    setFilled(fill: boolean): this;
    setColor(color: string): this;
    setStroke(stroke: number): this;
}

export class EllipseLayer extends BaseLayer {
    constructor(data: LazyCanvasEllipseLayer);
    setWidth(width: number): this;
    setHeight(height: number): this;
    setFilled(fill: boolean): this;
    setColor(color: string): this;
    setStroke(stroke: number): this;
    setRadius(radius: number): this;
}

export class ImageLayer extends BaseLayer {
    constructor(data: LazyCanvasImageLayer);
    setWidth(width: number): this;
    setHeight(height: number): this;
    setImage(src: string): this;
}

export class EllipseImageLayer extends BaseLayer {
    constructor(data: LazyCanvasEllipseImageLayer);
    setWidth(width: number): this;
    setHeight(height: number): this;
    setImage(src: string): this;
    setRadius(radius: number): this;
}

export class RectangleLayer extends BaseLayer {
    constructor(data: LazyCanvasRectangleLayer);
    setWidth(width: number): this;
    setHeight(height: number): this;
    setFilled(fill: boolean): this;
    setColor(color: string): this;
    setStroke(stroke: number): this;
}

export class SquareLayer extends BaseLayer {
    constructor(data: LazyCanvasSquareLayer);
    setWidth(width: number): this;
    setFilled(fill: boolean): this;
    setColor(color: string): this;
    setStroke(stroke: number): this;
}

export class TextLayer extends BaseLayer {
    constructor(data: LazyCanvasTextLayer);
    setText(text: string): this;
    setFont(font: string): this;
    setFontSize(size: number): this;
    setStyle(style: string): this;
    setColor(color: string): this;
    setAlign(align: string): this;
    setMultiline(multiline: boolean): this;
    setWidth(width: number): this;
    setHeight(height: number): this;
}

export class LineLayer extends BaseLayer {
    constructor(data: LazyCanvasLineLayer);
    setX2(x2: number): this;
    setY2(y2: number): this;
    setColor(color: string): this;
    setStroke(stroke: number): this;
}

export class Font {
    constructor(data: LazyCanvasFont);
    setFamily(family: string): this;
    setWeight(weight: string): this;
    setPath(path: string): this;
    toJSON(): LazyCanvasFont;
}