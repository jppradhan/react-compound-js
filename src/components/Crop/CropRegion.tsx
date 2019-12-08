import React, { SFC, useState, useRef, MouseEvent } from "react";
import { getDefaultCropRect, Rect, getClipingPoints } from "./helper";
import { OverlayImage, Clipper } from "./styles";

interface Props {
  src: string;
  parent: HTMLElement | null;
}

const getClipperDimensions = (rect: Rect) => {
  return {
    width: `${rect.right - rect.left}px`,
    height: `${rect.bottom - rect.top}px`
  };
};

const getClipperPosition = (rect: Rect) => {
  return {
    transform: `translate(${rect.left}px, ${rect.top}px)`
  };
};

const getMousePosition = (
  event: MouseEvent,
  parent: HTMLElement,
  prevPoints: { x: number; y: number }
) => {
  //@ts-ignore
  const parentRect = parent.getBoundingClientRect();
  //@ts-ignore
  const clientRect = event.target.getBoundingClientRect();

  const movedX = event.clientX - prevPoints.x;
  const movedY = event.clientY - prevPoints.y;
  //console.log(event.clientX, prevPoints.x);
  const rmpc = {
    x: event.clientX - clientRect.left - movedX,
    y: event.clientY - clientRect.top - movedY
  };

  const rmp = {
    x: event.clientX - parentRect.left - rmpc.x,
    y: event.clientY - parentRect.top - rmpc.y
  };

  if (rmp.x <= 0) {
    rmp.x = 0;
  }
  if (rmp.y <= 0) {
    rmp.y = 0;
  }
  if (rmp.x >= clientRect.width) {
    rmp.x = clientRect.width;
  }
  if (rmp.y >= clientRect.height) {
    rmp.y = clientRect.height;
  }

  return rmp;
};

export const CropRegion: SFC<Props> = props => {
  const { src, parent } = props;
  const [clipStyle, setClipStyle] = useState(getDefaultCropRect(parent));
  const dragStart = useRef(false);
  const prevMousePoints = useRef({
    x: 0,
    y: 0
  });

  const rect = getClipingPoints(parent);

  const [clipperStyle, setClipperStyle] = useState({
    ...getClipperDimensions(rect),
    ...getClipperPosition(rect)
  });

  // const setRegionStyles = () => {
  //   const styles = getClipperDimensions(getClipingPoints(parent))
  //   setClipperStyle(styles)
  // }

  const handleMouseDown = (event: MouseEvent) => {
    dragStart.current = true;
    prevMousePoints.current = {
      x: event.clientX,
      y: event.clientY
    };
  };

  const handleMouseUp = () => {
    dragStart.current = false;
  };

  const handleMouseMove = (event: MouseEvent) => {
    if (dragStart.current && parent) {
      const { x, y } = getMousePosition(event, parent, prevMousePoints.current);
      setClipperStyle({
        ...clipperStyle,
        ...getClipperPosition({
          left: x,
          top: y,
          right: 0,
          bottom: 0
        })
      });
    }
  };

  return (
    <>
      <OverlayImage src={src} style={clipStyle} />
      <Clipper
        style={clipperStyle}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
      />
    </>
  );
};
