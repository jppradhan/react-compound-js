import styled from "styled-components";
import { lightGrey } from "styled/colors";

export const StyledImage = styled.img.attrs((props) => ({
  style: props.style,
}))`
  width: 100%;
  height: 100%;
`;

export const OverlayImage = styled.img.attrs((props) => ({
  style: props.style,
}))`
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 2;
  opacity: 0;
`;

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 200px;
`;

export const Overlay = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.4);
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const InputFile = styled.input`
  display: none;
`;

export const ImageWrappper = styled.div`
  min-height: 200px;
  background-color: ${lightGrey};
  margin-bottom: 10px;
  border-radius: 4px;
  width: 100%;
  position: relative;
  height: 100%;
  overflow: hidden;
`;

export const ActionWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Clipper = styled.div.attrs((props) => ({
  style: props.style,
}))`
  border: 2px dashed ${lightGrey};
  z-index: 4;
  cursor: move;
  height: 30%;
  width: 30%;
`;
