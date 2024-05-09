import {LazyCanvasMethod} from "./LazyCanvasMethod";
import {LazyCanvasLayer} from "./LazyCanvasLayer";
import {LazyCanvasFont} from "./LazyCanvasFont";

export interface LazyCanvasData {
    name: string;
    description: string;
    emoji: string;
    width: number;
    height: number;
    layers: LazyCanvasLayer[];
    fonts: LazyCanvasFont[];
    methods: LazyCanvasMethod[];
    errorImage: string;
}