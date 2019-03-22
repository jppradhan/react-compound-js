import styled, { css } from "styled-components";
import { primary, text, white, darkGrey, red, success } from "styled/colors";

export const FormElems = styled.div`
  width: 100%;
  margin-bottom: 15px;
`;

export const CheckboxLabel = styled.label`
  display: inline-block;
  font-weight: 500;
  font-size: 16px;
  color: ${text};
  padding-left: 30px;
  position: relative;
  line-height: 20px;
  cursor: pointer;
  &:after {
    content: "";
    position: absolute;
    display: inline-block;
    height: 20px;
    width: 20px;
    border-radius: 3px;
    border: 1px solid ${primary};
    left: 0;
    top: 0;
  }
`;

export const FormCheckbox = styled(FormElems)`
  display: flex;
  input {
    display: none;
  }
  input:checked + ${CheckboxLabel} {
    &:after {
      color: ${primary};
      background-color: ${primary};
    }
    &:before {
      content: "";
      position: absolute;
      top: 2px;
      left: 1px;
      width: 5px;
      height: 10px;
      border-top: 2px solid transparent;
      border-left: 2px solid transparent;
      border-right: 2px solid ${white};
      border-bottom: 2px solid ${white};
      z-index: 1;
      transform: rotateZ(37deg);
      transform-origin: 100% 100%;
    }
  }
`;

export const RadioLabel = styled.label`
  display: inline-block;
  font-weight: 500;
  font-size: 16px;
  color: ${text};
  padding-left: 30px;
  position: relative;
  line-height: 20px;
  cursor: pointer;
  &:after {
    content: "";
    position: absolute;
    display: inline-block;
    height: 20px;
    width: 20px;
    border-radius: 50%;
    border: 2px solid ${primary};
    left: 0;
    top: 0;
  }
`;

export const FormRadio = styled(FormElems)`
  display: flex;
  input {
    display: none;
  }
  input:checked + ${RadioLabel} {
    &:before {
      content: "";
      position: absolute;
      width: 12px;
      height: 12px;
      z-index: 1;
      border-radius: 50%;
      background-color: ${primary};
      left: 6px;
      top: 6px;
    }
  }
`;

export const InputLabel = styled.label`
  margin-bottom: 10px;
  display: inline-block;
  font-weight: 500;
  font-size: 16px;
  color: ${text};
`;

export const FormInput = styled.input`
  padding: 0 10px;
  border-radius: 5px;
  border: 1px solid ${darkGrey};
  color: ${text};
  width: 100%;
  font-size: 14px;
  outline: none;
  height: 42px;
  line-height: 42px;
  &:focus {
    border: 2px solid ${primary};
  }
  ${props =>
    props.format === "error" &&
    css`
      border: 1px solid ${red};
      &:focus {
        border: 2px solid ${red};
      }
    `}
  ${props =>
    props.format === "success" &&
    css`
      border: 1px solid ${success};
      &:focus {
        border: 2px solid ${success};
      }
    `}
`;

export const InputErrorMessage = styled.p`
  color: ${red};
  font-size: 12px;
  line-height: 25px;
`;

export const PickerWrapper = styled.div`
  position: absolute;
  top: 70px;
  left: 0;
  z-index: 4;
  box-shadow: 1px 0px 11px 0px rgba(0, 0, 0, 0.54);
  border-radius: 4px;
`;

export const FormDate = styled(FormElems)`
  position: relative;
`;

export const FormRange = styled(FormElems)`
  position: relative;
`;

export const Range = styled.div`
  background-color: ${primary};
  height: 8px;
  width: 0;
  position: relative;
  transition: width 0.05s linear, margin-left 0.05s linear;
  ${props => {
    const width = `${props.end - props.start}%`;
    const marginLeft = `${props.start}%`;
    return css`
      width: ${width};
      margin-left: ${marginLeft};
    `;
  }}
`;

export const RangeWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 8px;
  background-color: ${darkGrey};
  margin-top: 10px;
  border-radius: 2px;
`;

export const RangeButton = styled.span`
  display: inline-block;
  position: absolute;
  top: -9px;
  left: 0;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background-color: #fff;
  box-shadow: 0px 0px 19px 0px rgba(0, 0, 0, 0.75);
  user-select: none;
  cursor: pointer;
  ${props =>
    props.right &&
    css`
      right: 0;
      left: initial;
    `}
`;

export const RangeInputs = styled.div`
  display: flex;
  margin-top: 20px;
  justify-content: space-between;
  input {
    width: 40px;
    height: 30px;
  }
`;
