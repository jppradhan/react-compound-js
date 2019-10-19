import React, { SFC, useState } from "react";
import { Button } from "components/Button/Button";
import { useWillReceiveProps } from "hooks/useWillReceiveProps";

interface Props {
  onClick: () => void;
  text: string;
}

const ReceiveProps: SFC<Props> = props => {
  //@ts-ignore
  useWillReceiveProps(props, old => {
    console.log("OLD props", old, props);
  });

  return (
    <Button format="default" onClick={props.onClick}>
      {props.text}
    </Button>
  );
};

export const Hooks: SFC<{}> = () => {
  const [count, setCount] = useState(0);

  console.log("Google");

  return (
    <ReceiveProps
      text={`${count} count`}
      onClick={() => {
        setCount(count + 1);
      }}
    />
  );
};
