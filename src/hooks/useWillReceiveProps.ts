import { useEffect, useRef } from "react";

interface Props<T> {
  <T>(arg: T): T;
}

const equals = <U>(prev: Props<U>, next: Props<U>): boolean => {
  let status = true;
  const keys = Object.keys(prev);
  for (let i = 0; i < keys.length; i += 1) {
    if (typeof prev[i] === "object") {
      return equals(prev[i], next[i]);
    }
    if (prev[i] != next[i]) {
      status = false;
      break;
    }
  }
  return status;
};

export const useWillReceiveProps = <U>(
  props: Props<U>,
  callback: <T>(arg: T) => T
) => {
  const prevState = useRef(props);

  useEffect(() => {
    callback(prevState.current);
    prevState.current = props;
    console.log("CALL SECOND");
    return () => {
      console.log("CALL FIRST");
    };
  }, [equals(props, prevState.current)]);

  return prevState.current;
};
