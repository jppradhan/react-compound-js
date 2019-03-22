import styled, { css } from "styled-components";

export const CarouselWrapper = styled.div`
  position: relative;
`;

export const Viewport = styled.div`
  display: flex;
  width: 100%;
  overflow: hidden;
`;

export const Wrapper = styled.div`
  flex-wrap: nowrap;
  display: flex;
`;

interface BtnProps extends React.ButtonHTMLAttributes<any> {
  prevBtn?: boolean;
  nextBtn?: boolean;
}

export const Btn = styled.button<BtnProps>`
  position: absolute;
  z-index: 5;
  border: none;
  outline: none;
  width: 40px;
  height: 40px;
  border-radius: 40px;
  background-color: rgba(255, 255, 255, 0.5);
  margin: 0;
  top: calc(50% - 20px);
  padding: 5px;
  cursor: pointer;
  ${props =>
    props.prevBtn &&
    css`
      left: 30px;
      svg {
        transform: rotate(180deg);
      }
    `}

  ${props =>
    props.nextBtn &&
    css`
      right: 30px;
    `}
`;
