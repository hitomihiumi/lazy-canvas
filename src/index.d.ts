declare module '@hitomihiumi/lazy-canvas';

import { LazyCanvasData } from "./types/LazyCanvasData";
import { LazyCanvasLayer } from "./types/LazyCanvasLayer";
import { LazyCanvasFont } from "./types/LazyCanvasFont";
import { LazyCanvasMethod } from "./types/LazyCanvasMethod";
import { LazyCanvasFilter } from "./types/LazyCanvasFilter";
import { LazyCanvasGradient } from "./types/LazyCanvasGradient";
import { LazyCanvasPattern } from "./types/LazyCanvasPattern";

export class LazyCanvas {
    constructor();
    setData(data: LazyCanvasData): this;
    getData(): this;
    createNewCanvas(width: number, height: number): this;
    clearCanvas(): this;
    public addLayers(layer: LazyCanvasLayer): this;
    public removeLayer(data: LazyCanvasLayer): this;
    public moveLayer(data: LazyCanvasLayer, index: number): this;
    modifyLayer(index: number, param: string, newData: any): this;
    getLayer(index: number): this;
    public getIndexOfLayer(data: LazyCanvasLayer): this;
    setName(name: string): this;
    setDescription(description: string): this;
    setEmoji(emoji: string): this;
    loadFonts(...fonts: LazyCanvasFont[]): this;
    set404Image(image: string): this;
    loadMethods(...methods: LazyCanvasMethod[]): this;
    renderImage(): Promise<NodeJS.ArrayBufferView>;
    }

export class BaseLayer implements LazyCanvasLayer {
    constructor();
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

    alpha: number;
    globalCompositeOperation: string;
    rotation: number;
    shadowBlur: number;
    shadowColor: string;
    shadowOffsetX: number;
    shadowOffsetY: number;
    x: number;
    y: number;
}

export class CircleLayer extends BaseLayer {
    constructor();
    setRadius(radius: number): this;
    setFilled(fill: boolean): this;
    public setColor(color: string | Gradient | Pattern): this
    setStroke(stroke: number): this;
}

export class EllipseLayer extends BaseLayer {
    constructor();
    setWidth(width: number): this;
    setHeight(height: number): this;
    setFilled(fill: boolean): this;
    public setColor(color: string | Gradient | Pattern): this
    setStroke(stroke: number): this;
    setRadius(radius: number): this;
}

export class ImageLayer extends BaseLayer {
    constructor();
    setWidth(width: number): this;
    setHeight(height: number): this;
    setImage(src: string): this;
    setFilter(filter: LazyCanvasFilter): this;
}

export class EllipseImageLayer extends BaseLayer {
    constructor();
    setWidth(width: number): this;
    setHeight(height: number): this;
    setImage(src: string): this;
    setRadius(radius: number): this;
    setFilter(filter: LazyCanvasFilter): this;
}

export class RectangleLayer extends BaseLayer {
    constructor();
    setWidth(width: number): this;
    setHeight(height: number): this;
    setFilled(fill: boolean): this;
    public setColor(color: string | Gradient | Pattern): this
    setStroke(stroke: number): this;
}

export class SquareLayer extends BaseLayer {
    constructor();
    setWidth(width: number): this;
    setFilled(fill: boolean): this;
    public setColor(color: string | Gradient | Pattern): this
    setStroke(stroke: number): this;
}

export class TextLayer extends BaseLayer {
    constructor();
    setText(text: string): this;
    setFont(font: string): this;
    setFontSize(size: number): this;
    setWeight(weight: string): this;
    public setColor(color: string | Gradient | Pattern): this
    setAlign(align: string): this;
    setMultiline(multiline: boolean): this;
    setWidth(width: number): this;
    setHeight(height: number): this;
    setBaseline(baseline: string): this;
    setFilled(fill: boolean): this;
}

export class LineLayer extends BaseLayer {
    constructor();
    setPoints(points: Array<object>): this;
    public setColor(color: string | Gradient | Pattern): this
    setStroke(stroke: number): this;
    setLineDash(dash: number[]): this;
}

export class NgonLayer extends BaseLayer {
    constructor();
    setRadius(radius: number): this;
    setSides(sides: number): this;
    setFilled(fill: boolean): this;
    public setColor(color: string | Gradient | Pattern): this
    setStroke(stroke: number): this;
}

export class ArcLayer extends BaseLayer {
    constructor();
    setRadius(radius: number): this;
    setAngles(angle: number): this;
    setFilled(fill: boolean): this;
    public setColor(color: string | Gradient | Pattern): this
    setStroke(stroke: number): this;
    setClockwise(clockwise: boolean): this;
}

export class ArcToLayer extends BaseLayer {
    constructor();
    setPoints(points: Array<object>): this;
    setRadius(radius: number): this;
    setStroke(stroke: number): this;
    public setColor(color: string | Gradient | Pattern): this
}

export class BezierLayer extends BaseLayer {
    constructor();
    setPoints(points: Array<object>): this;
    setControlPoints(controlPoints: number[][]): this;
    public setColor(color: string | Gradient | Pattern): this
    setStroke(stroke: number): this;
}

export class QuadraticLayer extends BaseLayer {
    constructor();
    setPoints(points: Array<object>): this;
    setControlPoint(controlPoint: number[][]): this;
    public setColor(color: string | Gradient | Pattern): this
    setStroke(stroke: number): this;
}

export class Font {
    constructor();
    setFamily(family: string): this;
    setWeight(weight: string): this;
    setPath(path: string): this;
    toJSON(): Font;
}

export class Gradient {
    constructor();
    setPoints(points: Array<object>): this;
    addColorPoints(colorPoints: number[][]): this;
    setRadius(radius: number): this;
    setType(type: string): this;
    toJSON(): LazyCanvasGradient;
}

export class Filter {
    constructor();
    setType(filter: string): this;
    setOption(option: number): this;
    toJSON(): LazyCanvasFilter;
}

export class Pattern {
    constructor();
    setPattern(pattern: string | LazyCanvas): this;
    setType(type: string): this;
    toJSON(): LazyCanvasPattern;
}

export class BaseMethod {
    constructor();
    setName(name: string): this;
    setMethod(method: string): this;
    toJSON(): LazyCanvasMethod;
}

export function color(color: string | LazyCanvasGradient): string | LazyCanvasGradient;
export function isValidColor(color: string): boolean;
export function isImageUrlValid(url: string): boolean;
export function lazyLoadImage(url: string): Promise<NodeJS.ArrayBufferView>;