import React, { SFC, useReducer, useRef } from "react";
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

interface Action {
  type: string;
  value: number;
}

const KEYDOWN = "KEYDOWN";
const ONCLICK = "ONCLICK";

const Wrapper = styled.div`
  position: relative;
`;

const ListContainer = styled.ul`
  position: absolute;
  top: 102%;
  left: 0;
  max-height: 300px;
  width: 100%;
  max-width: 480px;
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
  cursor: pointer;
  ${props =>
    props.active &&
    css`
      background-color: ${lightGrey};
    `}
`;

const initialState: State = {
  selected: 0
};

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case ONCLICK:
    case KEYDOWN:
      return { ...state, selected: action.value };
    default:
      return state;
  }
};

export const AutoComplete: SFC<Props> = props => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const listElem: { current: HTMLLIElement | null } = useRef(null);

  const handleOnclick = (index: number) => {
    dispatch({
      type: ONCLICK,
      value: index
    });
    props.onEnter(props.values[index]);
  };

  const handleScroll = (elemIndex: number) => {
    if (
      !listElem.current ||
      elemIndex < 0 ||
      elemIndex > props.values.length - 1
    ) {
      return;
    }
    const itemHeight = listElem.current.childNodes[0].offsetHeight;
    listElem.current.scroll({
      top: itemHeight * elemIndex,
      behavior: "smooth"
    });
  };

  const handleKeyDown = (e: any) => {
    if (e.keyCode === 40) {
      dispatch({
        type: KEYDOWN,
        value:
          props.values.length - 2 >= state.selected
            ? state.selected + 1
            : state.selected
      });
      handleScroll(state.selected + 1);
    }

    if (e.keyCode === 38) {
      dispatch({
        type: KEYDOWN,
        value: state.selected > 0 ? state.selected - 1 : state.selected
      });
      handleScroll(state.selected - 1);
    }

    if (e.keyCode === 13) {
      props.onEnter(props.values[state.selected]);
    }
  };

  return (
    <Wrapper onKeyDown={e => handleKeyDown(e)}>
      {props.children}
      {props.open && (
        <ListContainer ref={e => (listElem.current = e)}>
          {props.values.map((value, index) => (
            <List
              key={value.id}
              active={state.selected === index}
              onClick={handleOnclick.bind(null, index)}
            >
              {value.name}
            </List>
          ))}
        </ListContainer>
      )}
    </Wrapper>
  );
};
