import React, { SFC, useRef, useState } from "react";
import { Button } from "components/Button/Button";
import { CropRegion } from "./CropRegion";
import { imageToDataUrl } from "./helper";
import {
  Container,
  StyledImage,
  Overlay,
  InputFile,
  ImageWrappper,
  ActionWrapper
} from "./styles";

interface Props {
  onCrop: (url: string) => string;
}

export const Crop: SFC<Props> = props => {
  const { onCrop } = props;
  const [source, setSource] = useState("");
  const img: { current: HTMLImageElement | null } = useRef(null);
  const inputFile: { current: HTMLInputElement | null } = useRef(null);
  const imageWrapper: { current: HTMLDivElement | null } = useRef(null);

  const onSelectImage = (event: any) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      if (reader.result) {
        //@ts-ignore
        setSource(reader.result);
      }
    };
    reader.readAsDataURL(file);
  };

  const selectFile = () => {
    if (inputFile.current) {
      inputFile.current.click();
    }
  };

  const doCrop = () => {
    if (img.current) {
      imageToDataUrl({
        img: img.current,
        format: "image/png",
        height: 200,
        width: 300,
        callback: url => {
          onCrop(url);
        }
      });
    }
  };

  return (
    <Container>
      <ImageWrappper ref={elem => (imageWrapper.current = elem)}>
        {source && (
          <>
            <StyledImage src={source} ref={elem => (img.current = elem)} />
            <CropRegion src={source} parent={imageWrapper.current} />
            <Overlay />
          </>
        )}
      </ImageWrappper>
      <ActionWrapper>
        <Button type="button" onClick={selectFile}>
          Upload image
        </Button>
        <Button type="button" onClick={doCrop} format="primary">
          Crop image
        </Button>
      </ActionWrapper>

      <InputFile
        type="file"
        onChange={onSelectImage}
        ref={e => (inputFile.current = e)}
      />
    </Container>
  );
};
