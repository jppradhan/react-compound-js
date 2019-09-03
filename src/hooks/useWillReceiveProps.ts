import { useEffect, useRef, useState } from "react";

const equals = (prev, next) => {
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

export const useWillReceiveProps = (props, callback) => {
  const prevState = useRef(props);

  useEffect(() => {
    callback(prevState.current);
    prevState.current = props;
  }, [equals(props, prevState.current)]);

  return prevState.current;
};
