import React, { SFC } from "react";
import styled from "styled-components";
import { white, lightGrey } from "styled/colors";

interface Row {
  name: string;
  id: number | string;
}

interface Props {
  values: Row[];
  children: React.ReactNode;
  open: boolean;
}

const Wrapper = styled.div`
  position: relative;
`;

const ListContainer = styled.ul`
  position: absolute;
  top: 102%;
  left: 0;
  max-height: 300px;
  width: 100%;
  max-width: 300px;
  padding: 0;
  background-color: ${white};
  border: 1px solid ${lightGrey};
  border-radius: 4px;
  overflow: auto;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.5);
`;

const List = styled.li`
  list-style: none;
  padding: 12px;
  border-bottom: 1px solid ${lightGrey};
`;

const handleKeyDown = (e: any, props: Props) => {
  console.log(e.keyCode);
};

export const AutoComplete: SFC<Props> = props => {
  return (
    <Wrapper onKeyDown={e => handleKeyDown(e, props)}>
      {props.children}
      {props.open && (
        <ListContainer>
          {props.values.map(value => (
            <List key={value.id}>{value.name}</List>
          ))}
        </ListContainer>
      )}
    </Wrapper>
  );
};
