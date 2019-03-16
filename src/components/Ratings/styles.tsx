import styled from "styled-components";
import { darkGrey, white, red } from "styled/colors";

export const Ratings = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  svg {
    path {
      fill: ${darkGrey};
    }
  }
`;

export const RatingsIcon = styled.span`
  display: inline-block;
  margin-right: 5px;
`;

export const TopLayer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
  background-color: ${white};
  white-space: nowrap;
  overflow: hidden;
  svg {
    path {
      fill: ${red};
    }
  }
`;

export const BottomLayer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;
