import styled, { css, keyframes } from "styled-components";
import { white } from "styled/colors";

export const OpenPopover = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const PopoverWrapper = styled.div<{
  position: "bottom" | "left" | "right" | "top";
  size: "sm" | "md" | "lg";
}>`
  position: absolute;
  background: ${white};
  z-index: 10;
  border-radius: 5px;
  box-shadow: 0px 0px 30px 2px rgba(0,0,0,0.75);
  opacity: 0;
  animation: ${OpenPopover} 0.4s ease-out forwards;
  padding: 10px;
  &:after {
    content: '';
    position: absolute;
    color: inherit;
    background-color: transparent;
    width: 0; 
    height: 0; 
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 10px solid ${white};
  }
  ${props =>
    props.position === "bottom" &&
    css`
      top: 100%;
      left: 50%;
      transform: translate(-50%, 15px);
      &:after {
        top: -10px;
        left: 50%;
        transform: translateX(-10px);
      }
    `}
  ${props =>
    props.position === "left" &&
    css`
      top: 50%;
      right: 100%;
      transform: translate(-15px, -50%);
      &:after {
        border-top: 10px solid transparent;
        border-bottom: 10px solid transparent;
        border-right: 10px solid transparent;
        border-left: 10px solid ${white};
        top: 50%;
        right: -10px;
        transform: translate(10px, -10px);
      }
    `}
  ${props =>
    props.position === "right" &&
    css`
      top: 50%;
      left: 100%;
      transform: translate(15px, -50%);
      &:after {
        border-top: 10px solid transparent;
        border-bottom: 10px solid transparent;
        border-left: 10px solid transparent;
        border-right: 10px solid ${white};
        top: 50%;
        left: -10px;
        transform: translate(-10px, -10px);
      }
    `}
  ${props =>
    props.position === "top" &&
    css`
      bottom: 100%;
      left: 50%;
      transform: translate(-50%, -15px);
      &:after {
        border-left: 10px solid transparent;
        border-right: 10px solid transparent;
        border-bottom: 10px solid transparent;
        border-top: 10px solid ${white};
        left: 50%;
        transform: translateX(-10px);
        top: 100%;
      }
    `}
  ${props =>
    props.size === "md" &&
    css`
      width: 400px;
    `}
  ${props =>
    props.size === "lg" &&
    css`
      width: 600px;
    `}
  ${props =>
    props.size === "sm" &&
    css`
      width: 280px;
    `}
`;

export const PopoverContainer = styled.div.attrs({
  class: "popover-container"
})`
  position: relative;
  display: inline-block;
`;
