interface ImageOptions {
    img: HTMLImageElement;
    format: string;
    x: number;
    y: number;
    height: number;
    width: number;
    callback: (url: string) => void;
}
export interface Rect {
    top: number;
    bottom: number;
    left: number;
    right: number;
}
export declare const imageToDataUrl: (options: ImageOptions) => void;
export {};
