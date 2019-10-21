import { useEffect, useRef } from "react";

interface Props<T> {
  <T>(arg: T): T;
}

const equals = <U>(prev: Props<U>, next: Props<U>): boolean => {
  let status = true;
  const keys = Object.keys(prev);
  for (let i = 0; i < keys.length; i += 1) {
    const key = keys[i];
    if (typeof prev[key] === "object") {
      return equals(prev[key], next[key]);
    }
    if (prev[key] != next[key]) {
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
    if (!equals(props, prevState.current)) {
      callback(prevState.current);
      prevState.current = props;
    }
  }, [props]);

  return prevState.current;
};
