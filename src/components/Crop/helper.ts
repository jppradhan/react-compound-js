interface ImageOptions {
  img: HTMLImageElement;
  format: string;
  height: number;
  width: number;
  callback: (url: string) => void;
}

export const imageToDataUrl = (options: ImageOptions) => {
  const createCanvasAndDraw = (imageObj: any) => {
    const canvas = document.createElement("canvas");
    canvas.height = options.height;
    canvas.width = options.width;

    const ctx = canvas.getContext("2d");

    if (ctx) {
      ctx.imageSmoothingQuality = "high";
      ctx.drawImage(imageObj, 0, 0, options.width, options.height);
    }
    options.callback(canvas.toDataURL(options.format));
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

const CLIPPING_OFFSET = 75;

export const getClipingPoints = (element: HTMLElement | null) => {
  if (element) {
    const height = element.offsetHeight;
    const width = element.offsetWidth;
    return {
      top: CLIPPING_OFFSET,
      right: width - CLIPPING_OFFSET,
      bottom: height - CLIPPING_OFFSET,
      left: CLIPPING_OFFSET
    };
  }
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
};

export const getDefaultCropRect = (element: HTMLElement | null) => {
  const pos = getClipingPoints(element);
  return {
    clip: `rect(${pos.top}px, ${pos.right}px, ${pos.bottom}px, ${pos.left}px)`
  };
};
