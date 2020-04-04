import React, { SFC, useRef, MouseEvent } from "react";
import { Rect, getClipingPoints, getDefaultCropRect } from "./helper";
import { OverlayImage, Clipper } from "./styles";

interface Props {
  src: string;
  parent: HTMLElement | null;
  updateParentStyle: (style: { transform: string }) => void;
}

const getClipperPosition = (rect: Rect) => {
  return {
    transform: `translate(${rect.left}px, ${rect.top}px)`,
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
    y: prevTran.current.y + movedY,
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

export const CropRegion: SFC<Props> = (props) => {
  const { src, parent, updateParentStyle } = props;
  const dragStart = useRef(false);
  const prevMousePoints = useRef({
    x: 0,
    y: 0,
  });

  const rect = getClipingPoints(parent);

  const prevTran = useRef({
    x: rect.left,
    y: rect.top,
  });

  const defaultClipStyle = getDefaultCropRect(parent);

  const getClipperDimension = (): { height: string; width: string } => {
    return {
      height: `${parent ? parent.offsetHeight - rect.top * 2 : 0}px`,
      width: `${parent ? parent.offsetWidth - rect.left * 2 : 0}px`,
    };
  };

  const handleMouseDown = (event: MouseEvent) => {
    dragStart.current = true;
    prevMousePoints.current = {
      x: event.clientX,
      y: event.clientY,
    };
  };

  const handleMouseUp = (event: MouseEvent) => {
    dragStart.current = false;
    prevMousePoints.current = {
      x: event.clientX,
      y: event.clientY,
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
      console.log("MOUSE MOVED", x, y);
      updateParentStyle({
        ...getClipperPosition({
          left: x,
          top: y,
          right: 0,
          bottom: 0,
        }),
      });
    }
  };

  return (
    <>
      <OverlayImage src={src} style={defaultClipStyle} />
      <Clipper
        style={getClipperDimension()}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
      />
    </>
  );
};
