import styled, { css, keyframes } from "styled-components";
import { primary } from "styled/colors";

const tab_headers_border = "#ececec";
const tab_active_bg = "#f7f7f7";

const rightSlide = keyframes`
  0% {
    transform: translateX(-100%)
  }
  100% {
    transform: translateX(0)
  }
`;

const leftSlide = keyframes`
  0% {
    transform: translateX(100%)
  }
  100% {
    transform: translateX(0)
  }
`;

const fadeInContent = keyframes`
  0% {
    opacity: 0
  }
  100% {
    opacity: 1;
  }
`;

export const StyledTabs = styled.div`
  margin: 0;
  position: relative;
`;

export const Headers = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  border-bottom: 1px solid ${tab_headers_border};
`;

export const Tabs = styled.div`
  width: 100%;
  height: 45px;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  position: relative;
  ${props =>
    props.active &&
    css`
    background-color: ${tab_active_bg};
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    &:after {
      content: '';
      position: absolute;
      display: inline-block;
      width: 100%;
      border-bottom: 2px solid ${primary};
      bottom: 0;
    }
    //@ts-ignore
    ${props =>
      props.left &&
      css`
        &:after {
          animation: ${leftSlide} 0.3s ease-out;
        }
      `}
    //@ts-ignore
    ${props =>
      props.right &&
      css`
        &:after {
          animation: ${rightSlide} 0.3s ease-out;
        }
      `}
  `}
`;

export const Content = styled.div`
  padding: 15px;
  animation: ${fadeInContent} 0.3s ease-out;
`;
