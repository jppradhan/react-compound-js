import styled from "styled-components";
import { Pills } from "components/Pills/Pills";
import { lightGrey, text, darkGrey } from "styled/colors";

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
//@ts-ignore
export const StyledTag = styled<{ label: string; onRemove: () => {} }>(Pills)`
  height: auto;
  margin: 0 5px;
  margin-bottom: 5px;
  min-height: 7px;
  width: auto;
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
    display: inline-block;
    min-width: 60px;
    flex: 1;
`;

export const Placeholder = styled.span`
    color: ${lightGrey};
    font-weight: 500;
    letter-spacing: 1px;
    padding: 10px 0 0  10px;
`;
