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

export const imageToDataUrl = (options: ImageOptions) => {
  const createCanvasAndDraw = (imageObj: any) => {
    const canvas = document.createElement("canvas");
    canvas.height = imageObj.height;
    canvas.width = imageObj.width;

    const ctx = canvas.getContext("2d");

    if (ctx) {
      ctx.imageSmoothingQuality = "high";
      ctx.drawImage(imageObj, 0, 0, imageObj.width, imageObj.height);
      const cropImage = ctx.getImageData(
        options.x,
        options.y,
        options.x + options.width,
        options.y + options.height
      );

      const croppedCanvas = document.createElement("canvas");
      croppedCanvas.height = options.width;
      croppedCanvas.width = options.height;
      const croppedCanvasCtx = croppedCanvas.getContext("2d");
      if (croppedCanvasCtx) {
        croppedCanvasCtx.rect(0, 0, options.width, options.height);
        croppedCanvasCtx.fillStyle = "white";
        croppedCanvasCtx.fill();
        croppedCanvasCtx.putImageData(cropImage, 0, 0);
        options.callback(croppedCanvas.toDataURL(options.format, 1.0));
      }
    }
  };

  if (options.img.complete) {
    createCanvasAndDraw(options.img);
  } else {
    const img = new Image();
    img.crossOrigin = "Anonymous";
    img.src = options.img.src;

    img.onload = () => {
      createCanvasAndDraw(img);
    };
  }
};
