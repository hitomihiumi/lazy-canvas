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
    loadMethods(...methods: LazyCanvasMethod[]): this;
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
    setRotation(rotation: number): this;
    setGlobalCompositeOperation(operation: string): this;
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
    setFilter(filter: LazyCanvasFilter): this;
}

export class EllipseImageLayer extends BaseLayer {
    constructor(data: LazyCanvasEllipseImageLayer);
    setWidth(width: number): this;
    setHeight(height: number): this;
    setImage(src: string): this;
    setRadius(radius: number): this;
    setFilter(filter: LazyCanvasFilter): this;
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
    setWeight(weight: string): this;
    setColor(color: string): this;
    setAlign(align: string): this;
    setMultiline(multiline: boolean): this;
    setWidth(width: number): this;
    setHeight(height: number): this;
    setBaseline(baseline: string): this;
    setFilled(fill: boolean): this;
}

export class LineLayer extends BaseLayer {
    constructor(data: LazyCanvasLineLayer);
    setPoints(points: points[]): this;
    setColor(color: string): this;
    setStroke(stroke: number): this;
}

export class NgonLayer extends BaseLayer {
    constructor(data: LazyCanvasNgonLayer);
    setRadius(radius: number): this;
    setSides(sides: number): this;
    setFilled(fill: boolean): this;
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

export class Gradient {
    cosntructor(data: LazyCanvasGradient);
    setPoints(points: points[]): this;
    addColorPoints(colorPoints: colorPoints[]): this;
    setRadius(radius0: number, radius1: number): this;
    setType(type: string): this;
    toJSON(): LazyCanvasGradient;
}

export class Filter {
    constructor(data: LazyCanvasFilter);
    setType(filter: string): this;
    setOption(option: options): this;
    toJSON(): LazyCanvasFilter;
}

export class BaseMethod {
    constructor(data: LazyCanvasMethod);
    setName(name: string): this;
    setMethod(method: string): this;
    toJSON(): LazyCanvasMethod;
}

export function color(color: string | LazyCanvasGradient): color | LazyCanvasGradient;
export function isValidColor(color: string): boolean;
export function isImageUrlValid(url: string): boolean;
export function lazyLoadImage(url: string): Promise<image>;