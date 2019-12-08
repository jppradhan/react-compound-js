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
  prevPoints: { current: { x: number; y: number } },
  prevTran: { current: { x: number; y: number } },
  parent: HTMLElement
) => {
  const movedX = event.clientX - prevPoints.current.x;
  const movedY = event.clientY - prevPoints.current.y;
  const parentRect = parent.getBoundingClientRect();
  //@ts-ignore
  const clientRect = event.target.getBoundingClientRect();

  const rmp = {
    x: prevTran.current.x + movedX,
    y: prevTran.current.y + movedY
  };

  if (rmp.x <= 0) {
    rmp.x = 0;
  }
  if (rmp.y <= 0) {
    rmp.y = 0;
  }
  if (rmp.x >= parentRect.width - clientRect.width) {
    rmp.x = parentRect.width - clientRect.width;
  }
  if (rmp.y >= parentRect.height - clientRect.height) {
    rmp.y = parentRect.height - clientRect.height;
  }

  prevTran.current = rmp;

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

  const prevTran = useRef({
    x: rect.left,
    y: rect.top
  });

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

  const handleMouseUp = (event: MouseEvent) => {
    dragStart.current = false;
    prevMousePoints.current = {
      x: event.clientX,
      y: event.clientY
    };
  };

  const handleMouseMove = (event: MouseEvent) => {
    if (dragStart.current && parent) {
      const { x, y } = getMousePosition(
        event,
        prevMousePoints,
        prevTran,
        parent
      );
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
