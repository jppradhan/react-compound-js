import { MouseEvent } from "react";

interface Options {
  element: HTMLElement | null;
  onSelect: (color: string) => void;
}

class Picker {
  private element: HTMLElement | null;
  private canvas: HTMLCanvasElement | null | undefined;
  private ctx: any;
  private options: Options;

  public constructor(options: Options) {
    this.element = options.element;
    this.options = options;
    if (!this.element) {
      throw Error("Element not found");
    }

    this.canvas = this.createCanvas();

    if (!this.canvas) return;

    this.buildColorPalette();
    this.bindEvent();
  }

  private createCanvas() {
    if (!this.element) return;

    const canvas = document.createElement("canvas");
    canvas.height = 155;
    canvas.width = 284;
    this.element.appendChild(canvas);
    return canvas;
  }

  private buildColorPalette() {
    if (!this.element || !this.canvas) return;

    const ctx = this.canvas.getContext("2d");

    if (!ctx) return;

    let gradient = ctx.createLinearGradient(0, 0, this.canvas.offsetWidth, 0);

    gradient.addColorStop(0, "rgb(255,   0,   0)");
    gradient.addColorStop(0.15, "rgb(255,   0, 255)");
    gradient.addColorStop(0.33, "rgb(0,     0, 255)");
    gradient.addColorStop(0.49, "rgb(0,   255, 255)");
    gradient.addColorStop(0.67, "rgb(0,   255,   0)");
    gradient.addColorStop(0.84, "rgb(255, 255,   0)");
    gradient.addColorStop(1, "rgb(255,   0,   0)");

    ctx.fillStyle = gradient;

    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    gradient = ctx.createLinearGradient(0, 0, 0, this.canvas.offsetHeight);
    gradient.addColorStop(0, "rgba(255, 255, 255, 1)");
    gradient.addColorStop(0.5, "rgba(255, 255, 255, 0)");
    gradient.addColorStop(0.5, "rgba(0,     0,   0, 0)");
    gradient.addColorStop(1, "rgba(0,     0,   0, 1)");

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    this.ctx = ctx;
  }

  private componentToHex(c: number) {
    //@ts-ignore
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
  }

  private rgbToHex(r: number, g: number, b: number) {
    return (
      "#" +
      this.componentToHex(r) +
      this.componentToHex(g) +
      this.componentToHex(b)
    );
  }

  private getColor(event: MouseEvent) {
    //@ts-ignore
    const x = event.layerX;
    //@ts-ignore
    const y = event.layerY;
    const pixel = this.ctx.getImageData(x, y, 1, 1);
    const data = pixel.data;
    const color = this.rgbToHex(data[0], data[1], data[2]);
    this.options.onSelect(color);
    return color;
  }

  private bindEvent() {
    if (!this.canvas) return;
    //@ts-ignore
    this.canvas.addEventListener("mousedown", this.getColor.bind(this));
  }
}

export default Picker;
