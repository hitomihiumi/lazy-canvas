import { LazyCanvasData } from "./LazyCanvasData";

export class LazyCanvasPlugin {
    public onload(lazycanvas: any): void {
        throw new Error("Plugin must implement load()");
    }

    public unload(lazycanvas: any): void {
        throw new Error("Plugin must implement unload()");
    }
}