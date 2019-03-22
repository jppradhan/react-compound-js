import styled, { css } from "styled-components";
import { text, greyText, darkGrey } from "styled/colors";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${text};
`;

export const StyledButton = styled.button<{
  disabled?: boolean;
}>`
  background-color: ${darkGrey};
  border: 1px solid ${greyText};
  border-radius: 4px;
  height: 40px;
  width: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  outline: 0;
  &:first-child {
    transform: rotate(-180deg);
  }
  &:focus {
    box-shadow: 0px 0px 0px 2px #0c96f2;
  }
  ${props =>
    props.disabled &&
    css`
      pointer-events: none;
      opacity: 0.5;
    `}
`;

export const StyledInput = styled.input`
  height: 40px;
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${text};
  text-align: center;
  border-radius: 4px;
  margin: 0 10px;
  border: 1px solid ${greyText};
  font-size: 14px;
  outline: 0;
  &:focus {
    box-shadow: 0px 0px 0px 2px #0c96f2;
  }
`;

export const Remain = styled.span`
  margin-left: 10px;
`;
