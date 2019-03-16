import * as React from "react";
import styled, { css } from "styled-components";
import { lightGrey, primary, white, red, success } from "styled/colors";
import { focusStyle } from "styled/mixins";

interface Props extends React.ButtonHTMLAttributes<any> {
  children: React.ReactNode;
  format?: "primary" | "success" | "default" | "danger" | "light";
  disabled?: boolean;
}

const default_border_color = "#e5e7e8";
const default_hover_bg = "#e6e6e6";
const success_hover_bg = "#3dab27";
const primary_hover_bg = "#0095ce";
const danger_hover_bg = "#c72121";

const StyledButton = styled.button`
  background-color: ${lightGrey};
  padding: 0;
  padding-left: 15px;
  padding-right: 15px;
  height: 35px;
  line-height: 1;
  border: 1px solid ${default_border_color};
  font-weight: 500;
  font-size: 14px;
  border-radius: 4px;
  display: inline-flex;
  justify-content: center;
  margin-left: 5px;
  margin-right: 5px;
  outline: none;
  &:hover {
    cursor: pointer;
    background-color: ${default_hover_bg};
  }
  &:focus {
    ${focusStyle};
  }
  ${props =>
    props.disabled &&
    css`
      opacity: 0.6;
      pointer-events: none !important;
      cursor: not-allowed;
    `}
  ${props =>
    props.primary &&
    css`
      background-color: ${primary};
      border: 1px solid ${primary};
      color: ${white};
      &:hover {
        border: 1px solid ${primary_hover_bg};
        background-color: ${primary_hover_bg};
      }
    `}

  ${props =>
    props.success &&
    css`
      background-color: ${success};
      border: 1px solid ${success};
      color: $white;
      &:hover {
        border: 1px solid ${success_hover_bg};
        background-color: ${success_hover_bg};
      }
    `}
  ${props =>
    props.danger &&
    css`
      background-color: ${red};
      border: 1px solid ${red};
      color: ${white};
      &:hover {
        border: 1px solid ${danger_hover_bg};
        background-color: ${danger_hover_bg};
      }
    `}  
`;
export const Button: React.SFC<Props> = ({
  children,
  format = "default",
  disabled = false,
  ...rest
}) => (
  <StyledButton {...{ format, disabled, ...rest }}>{children}</StyledButton>
);
