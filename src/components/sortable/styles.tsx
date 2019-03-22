import styled, { css } from "styled-components";
import { white } from "styled/colors";

export const StyledSortable = styled.div`
  width: 100%;
`;

export const Draggable = styled.div<{
  dragging: boolean;
}>`
  ${props =>
    props.dragging &&
    css`
      opacity: 0.3;
      background: ${white};
      cursor: pointer;
    `}
`;
