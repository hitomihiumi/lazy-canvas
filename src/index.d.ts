declare module '@hitomihiumi/lazy-canvas';

export class LazyCanvas {
    constructor(data: LazyCanvasData, errorImage: string);
    setData(data: LazyCanvasData): void;
    getData(): void;
    createNewCanvas(width: number, height: number): void;
    clearCanvas(): void;
    addLayer(layer: LazyCanvasLayer): void;
    removeLayer(data: LazyCanvasLayer): void;
    moveLayer(data: LazyCanvasLayer, index: number): void;
    modifyLayer(index: number, param: string, newData: any): void;
    getLayer(index: number): void;
    getIndexOfLayer(data: LazyCanvasLayer): void;
    setName(name: string): void;
    setDescription(description: string): void;
    setEmoji(emoji: string): void;
    loadFonts(...fonts: LazyCanvasFont[]): void;
    set404Image(image: string): void;
    }

export class BaseLayer {
    constructor(data: LazyCanvasLayer);
    setX(x: number): void;
    setY(y: number): void;
    setShadowColor(color: string): void;
    setShadowBlur(blur: number): void;
    setShadowOffsetX(offsetX: number): void;
    setShadowOffsetY(offsetY: number): void;
    toJSON(): LazyCanvasLayer;
}

export class CircleLayer extends BaseLayer {
    constructor(data: LazyCanvasCircleLayer);
    setDiameter(radius: number): void;
    setFilled(fill: boolean): void;
    setColor(color: string): void;
    setStroke(stroke: number): void;
}

export class EllipseLayer extends BaseLayer {
    constructor(data: LazyCanvasEllipseLayer);
    setWidth(width: number): void;
    setHeight(height: number): void;
    setFilled(fill: boolean): void;
    setColor(color: string): void;
    setStroke(stroke: number): void;
    setRadius(radius: number): void;
}

export class ImageLayer extends BaseLayer {
    constructor(data: LazyCanvasImageLayer);
    setWidth(width: number): void;
    setHeight(height: number): void;
    setImage(src: string): void;
}

export class EllipseImageLayer extends BaseLayer {
    constructor(data: LazyCanvasEllipseImageLayer);
    setWidth(width: number): void;
    setHeight(height: number): void;
    setImage(src: string): void;
    setRadius(radius: number): void;
}

export class RectangleLayer extends BaseLayer {
    constructor(data: LazyCanvasRectangleLayer);
    setWidth(width: number): void;
    setHeight(height: number): void;
    setFilled(fill: boolean): void;
    setColor(color: string): void;
    setStroke(stroke: number): void;
}

export class SquareLayer extends BaseLayer {
    constructor(data: LazyCanvasSquareLayer);
    setWidth(width: number): void;
    setFilled(fill: boolean): void;
    setColor(color: string): void;
    setStroke(stroke: number): void;
}

export class TextLayer extends BaseLayer {
    constructor(data: LazyCanvasTextLayer);
    setText(text: string): void;
    setFont(font: string): void;
    setFontSize(size: number): void;
    setStyle(style: string): void;
    setColor(color: string): void;
    setAlign(align: string): void;
    setMultiline(multiline: boolean): void;
    setWidth(width: number): void;
    setHeight(height: number): void;
}

export class LineLayer extends BaseLayer {
    constructor(data: LazyCanvasLineLayer);
    setX2(x2: number): void;
    setY2(y2: number): void;
    setColor(color: string): void;
    setStroke(stroke: number): void;
}

export class Font {
    constructor(data: LazyCanvasFont);
    setFamily(family: string): void;
    setWeight(weight: string): void;
    setPath(path: string): void;
    toJSON(): LazyCanvasFont;
}