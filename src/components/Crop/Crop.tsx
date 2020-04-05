import React, { SFC, useRef, useState } from "react";
import { Button } from "components/Button/Button";
import { imageToDataUrl } from "./helper";
import {
  Container,
  StyledImage,
  Overlay,
  InputFile,
  ImageWrappper,
  ActionWrapper,
  Clipper,
} from "./styles";

interface Props {
  onCrop: (url: string) => string;
}

const selectImage = (event: any, callback: (value: string) => void) => {
  const file = event.target.files[0];
  const reader = new FileReader();

  reader.onloadend = () => {
    if (reader.result) {
      //@ts-ignore
      callback(reader.result);
    }
  };
  reader.readAsDataURL(file);
};

export const Crop: SFC<Props> = (props) => {
  const { onCrop } = props;
  const [source, setSource] = useState("");
  const [clipperStyle, setClipperStyle] = useState({});
  const img: { current: HTMLImageElement | null } = useRef(null);
  const clipper: { current: HTMLDivElement | null } = useRef(null);
  const overlay: { current: HTMLDivElement | null } = useRef(null);
  const inputFile: { current: HTMLInputElement | null } = useRef(null);
  const imageWrapper: { current: HTMLDivElement | null } = useRef(null);
  const dragValues: { current: any } = useRef({
    active: false,
    currentX: null,
    currentY: null,
    initialX: null,
    initialY: null,
    xOffset: 0,
    yOffset: 0,
  });

  const onSelectImage = (event: any) => {
    selectImage(event, (res) => {
      setSource(res);
    });
  };

  const selectFile = () => {
    if (inputFile.current) {
      inputFile.current.click();
    }
  };

  const doCrop = () => {
    if (overlay.current && clipper.current) {
      const overlayRect = overlay.current.getBoundingClientRect();
      const clipperRect = clipper.current.getBoundingClientRect();
      const x = clipperRect.left - overlayRect.left;
      const y = clipperRect.top - overlayRect.top;
      const width = clipper.current.offsetWidth;
      const height = clipper.current.offsetHeight;

      if (img.current) {
        imageToDataUrl({
          img: img.current,
          format: "image/jpeg",
          height,
          width,
          x,
          y,
          callback: (url) => {
            onCrop(url);
          },
        });
      }
    }
  };

  const onClipperMouseDown = (e: any) => {
    dragValues.current.active = true;
    dragValues.current.initialX = e.clientX - dragValues.current.xOffset;
    dragValues.current.initialY = e.clientY - dragValues.current.yOffset;
  };

  const onClipperMouseUp = () => {
    dragValues.current.active = false;
    dragValues.current.initialX = dragValues.current.currentX;
    dragValues.current.initialY = dragValues.current.currentY;
  };

  const onClipperMouseMove = (e: any) => {
    if (dragValues.current.active && clipper.current) {
      dragValues.current.currentX = e.clientX - dragValues.current.initialX;
      dragValues.current.currentY = e.clientY - dragValues.current.initialY;
      dragValues.current.xOffset = dragValues.current.currentX;
      dragValues.current.yOffset = dragValues.current.currentY;
      const translate3d =
        "translate3d(" +
        dragValues.current.currentX +
        "px, " +
        dragValues.current.currentY +
        "px, 0)";
      setClipperStyle({
        transform: translate3d,
        WebKitTransform: translate3d,
        MsTransform: translate3d,
        MozTransform: translate3d,
      });
    }
  };

  return (
    <Container>
      <ImageWrappper ref={(elem) => (imageWrapper.current = elem)}>
        {source && (
          <>
            <StyledImage src={source} ref={(elem) => (img.current = elem)} />
            <Overlay ref={(elem) => (overlay.current = elem)}>
              <Clipper
                ref={(elem) => (clipper.current = elem)}
                onMouseDown={onClipperMouseDown}
                onMouseUp={onClipperMouseUp}
                onMouseMove={onClipperMouseMove}
                style={clipperStyle}
              />
            </Overlay>
          </>
        )}
      </ImageWrappper>
      <ActionWrapper>
        <Button type='button' onClick={selectFile}>
          Upload image
        </Button>
        <Button type='button' onClick={doCrop} format='primary'>
          Crop image
        </Button>
      </ActionWrapper>

      <InputFile
        type='file'
        onChange={onSelectImage}
        ref={(e) => (inputFile.current = e)}
      />
    </Container>
  );
};
