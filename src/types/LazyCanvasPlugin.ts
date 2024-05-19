import { LazyCanvasData } from "./LazyCanvasData";

export class LazyCanvasPlugin {
    public load(lazycanvas: LazyCanvasData): void {
        throw new Error("Plugin must implement load()");
    }

    public unload(lazycanvas: LazyCanvasData): void {
        throw new Error("Plugin must implement unload()");
    }
}