interface Options {
    element: HTMLElement | null;
    onSelect: (color: string) => void;
}
declare class Picker {
    private element;
    private canvas;
    private ctx;
    private options;
    constructor(options: Options);
    private createCanvas;
    private buildColorPalette;
    private componentToHex;
    private rgbToHex;
    private getColor;
    private bindEvent;
}
export default Picker;
