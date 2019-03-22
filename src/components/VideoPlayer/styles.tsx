import styled, { css } from "styled-components";
import { greyText, red } from "styled/colors";

export const VideoContainer = styled.div`
  width: 100%;
  height: 100%;
  video {
    width: 100%;
    height: 100%;
  }
`;

export const VideoList = styled.div`
  width: 150px;
  position: absolute;
  right: 0;
  top: 0;
  height: 90%;
  overflow-y: auto;
  z-index: 10;
  padding-top: 15px;
  padding-right: 15px;
  opacity: 0;
  transition: opacity 0.2s linear;
`;

export const PreviewItem = styled.div<{
  selected: boolean;
}>`
  height: 80px;
  width: 100%;
  margin-bottom: 10px;
  position: relative;
  border-radius: 4px;
  border: 1px solid ${greyText};
  overflow: hidden;
  cursor: pointer;
  background-color: #131313;
  ${props =>
    props.selected &&
    css`
      border: 2px solid ${red};
    `}
`;

export const Title = styled.div`
  display: flex;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  align-items: center;
  justify-content: center;
  color: $lightGrey;
  padding: 0 15px;
  font-size: 12px;
  background-color: rgba(0, 0, 0, 0.3);
`;

export const PreviewThumb = styled.img`
  width: 100%;
  height: 100%;
`;

export const VideoWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  &:hover {
    ${VideoList} {
      opacity: 1;
    }
  }
`;
