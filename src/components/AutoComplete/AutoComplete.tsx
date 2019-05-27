import React, { SFC, useReducer } from "react";
import styled, { css } from "styled-components";
import { white, lightGrey } from "styled/colors";

interface Row {
  name: string;
  id: number | string;
}

interface Props {
  values: Row[];
  children: React.ReactNode;
  open: boolean;
  onEnter: (value: Row) => void;
}

interface State {
  selected: number;
}

const KEYDOWN = "KEYDOWN";

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

const List = styled.li<{ active: boolean }>`
  list-style: none;
  padding: 12px;
  border-bottom: 1px solid ${lightGrey};
  ${props =>
    props.active &&
    css`
      background-color: ${lightGrey};
    `}
`;

const initialState: State = {
  selected: 0
};

const reducer = (state: State, action: { type: string; value: any }) => {
  switch (action.type) {
    case KEYDOWN:
      return { ...state, selected: action.value };
    default:
      return state;
  }
};

const handleKeyDown = (
  e: any,
  props: Props,
  state: State,
  dispatch: ({ type: string, value: any }) => void
) => {
  if (e.keyCode === 40) {
    dispatch({
      type: KEYDOWN,
      value:
        props.values.length - 2 >= state.selected
          ? state.selected + 1
          : state.selected
    });
  }
  if (e.keyCode === 38) {
    dispatch({
      type: KEYDOWN,
      value: state.selected > 0 ? state.selected - 1 : state.selected
    });
  }

  if (e.keyCode === 13) {
    props.onEnter(props.values[state.selected]);
  }
};

export const AutoComplete: SFC<Props> = props => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Wrapper onKeyDown={e => handleKeyDown(e, props, state, dispatch)}>
      {props.children}
      {props.open && (
        <ListContainer>
          {props.values.map((value, index) => (
            <List key={value.id} active={state.selected === index}>
              {value.name}
            </List>
          ))}
        </ListContainer>
      )}
    </Wrapper>
  );
};
