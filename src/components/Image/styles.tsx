import styled, { css } from "styled-components";

export const ImageWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  overflow: hidden;
  position: relative;
`;

export const StyledImage = styled.img<{
  show?: boolean;
}>`
  width: 100%;
  opacity: 0;
  ${props =>
    props.show &&
    css`
      opacity: 1;
    `}
`;

export const LoadingWrapper = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
