import React, { SFC } from "react";
import styled from "styled-components";
import { lightGrey, text } from "styled/colors";
//@ts-ignore
import Cross from "../../icons/cross.svg";

interface Props {
  label: string;
  onRemove: () => void;
}

const Pill = styled.div`
  display: inline-block;
  padding: 10px 15px;
  background-color: ${lightGrey};
  color: ${text};
  font-size: 14px;
  position: relative;
  border-radius: 4px;
  padding-right: 30px;
  margin-right: 10px;
  margin-bottom: 10px;
`;

const Label = styled.span`
  margin-right: 5px;
`;

const RemoveIcon = styled.span`
  display: inline-block;
  width: 16px;
  height: 16px;
  position: absolute;
  right: 7px;
  top: 9px;
  cursor: pointer;
`;

export const Pills: SFC<Props> = props => {
  const { label, onRemove } = props;

  return (
    <Pill>
      <Label>{label}</Label>
      <RemoveIcon onClick={onRemove}>
        <Cross width={16} height={16} />
      </RemoveIcon>
    </Pill>
  );
};
