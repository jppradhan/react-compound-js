import styled, { keyframes, css } from "styled-components";
import { white, darkGrey, black } from "styled/colors";

const FadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const FadeOut = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

export const StyledModal = styled.div`
  position: fixed;
  z-index: 20;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
`;
export const ModalInner = styled.div<{
  innerClass: "open" | "close";
}>`
  min-height: 400px;
  background: ${white};
  border: 1px solid ${darkGrey};
  border-radius: 5px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
  min-width: 350px;
  opacity: 0;
  animation: ${FadeOut} 0.2s linear forwards;
  ${props =>
    props.innerClass === "open" &&
    css`
      animation: ${FadeIn} 0.2s linear forwards;
    `}
  ${props =>
    props.innerClass === "close" &&
    css`
      animation: ${FadeOut} 0.2s linear forwards;
    `}
`;

export const ModalTitle = styled.div`
  padding: 20px;
  font-size: 28px;
  border-bottom: 1px solid ${darkGrey};
  position: relative;
`;

export const CloseDialog = styled.span`
  position: absolute;
  color: ${black};
  font-size: 14px;
  display: inline-flex;
  width: 16px;
  height: 16px;
  top: 15px;
  right: 15px;
  justify-content: center;
  cursor: pointer;
`;

export const ModalBody = styled.div`
  padding: 10px;
`;
