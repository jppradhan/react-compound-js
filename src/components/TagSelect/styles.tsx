import styled from "styled-components";
import { text, darkGrey } from "styled/colors";

export const SelectContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 5px 0;
    width: 100%;
`;

export const SelectArea = styled.div`
  min-height: 12px;
  border: 1px solid  ${darkGrey};
  border-radius: 3px;
  padding: 10px 5px;
  color: ${text};
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  &:hover  {
    border-color: ${text};
  }
`;

export const TagInput = styled.input`
    border: none;
    outline: none;
    color: ${text};
    height: 30px;
    font-size: 14px;
    font-weight: 500;
    letter-spacing: 1px;
    display: inline-block;
    padding-left: 5px;
    width: auto;
    min-width: 60px;
    flex: 1;
`;
