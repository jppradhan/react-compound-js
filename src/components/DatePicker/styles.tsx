import styled, { css } from "styled-components";
import { darkGrey, white, black, success } from "styled/colors";

export const Root = styled.div`
  max-width: 306px;
  min-height: 291px;
  border-radius: 4px;
  border: 1px solid ${darkGrey};
  position: relative;
  background-color: ${white};
  display: inline-block;
`;

export const Header = styled.div`
  border-bottom: 1px solid ${darkGrey};
  height: 35px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Arrow = styled.span<{
  leftArrow?: boolean;
  rightArrow?: boolean;
}>`
  width: 35px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  svg {
    path {
      fill: ${black};
    }
  }
  ${props =>
    props.leftArrow &&
    css`
      transform: rotate(180deg);
    `}
  ${props =>
    props.rightArrow &&
    css`
      transform: rotate(0);
    `}
`;

export const MonthYear = styled.div`
  font-size: 14px;
  cursor: pointer;
  span {
    display: inline-block;
  }
  span:first-child {
    margin-right: 10px;
  }
`;

export const StyledDate = styled.div`
  padding: 5px;
`;

export const StyledDays = styled.div<{
  today?: boolean;
  selected?: boolean;
  disabled?: boolean;
}>`
  min-width: 49px;
  height: 49px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: background-color 0.2s ease-in, color 0.2s ease-in;
  &:hover {
    border-radius: 3px;
    background-color: ${success};
    color: ${white};
  }
  ${props =>
    props.today &&
    css`
      background-color: rgba(${success}, 0.6);
      border-radius: 3px;
      &:hover {
        background-color: ${success};
      }
    `}
  ${props =>
    props.selected &&
    css`
      border-radius: 3px;
      background-color: ${success};
      color: ${white};
    `}
  ${props =>
    props.disabled &&
    css`
      opacity: 0.3;
      pointer-events: none;
      user-select: none;
    `}
`;

export const StyledMonthView = styled.div`
  position: absolute;
  left: 0;
  top: 35px;
  background-color: ${white};
  width: 100%;
  height: 100%;
  max-height: 300px;
  padding: 5px;
  z-index: 1;
  padding-top: 25px;
  padding-bottom: 20px;
`;

export const StyledMonth = styled.div`
  width: 73px;
  height: 70px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;
  font-size: 12px;
  transition: background-color 0.2s ease-in, color 0.2s ease-in;
  cursor: pointer;
  &:hover {
    border-radius: 3px;
    background-color: ${success};
    color: ${white};
  }
`;

export const StyledYearView = styled.div`
  position: absolute;
  top: 35px;
  left: 0;
  width: 100%;
  height: 100%;
  max-height: 300px;
  padding: 5px;
  overflow: auto;
  background-color: ${white};
  z-index: 1;
`;

export const StyledYear = styled.div`
  width: 49px;
  height: 40px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;
  font-size: 12px;
  transition: background-color 0.2s ease-in, color 0.2s ease-in;
  cursor: pointer;
  &:hover {
    border-radius: 3px;
    background-color: ${success};
    color: ${white};
  }
`;
