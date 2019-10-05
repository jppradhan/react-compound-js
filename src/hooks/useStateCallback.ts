import { useState, useEffect } from "react";

interface Props<T> {
  <T>(arg: T): T;
}

export const useStateCallback = <U>(args: Props<U>, callback: () => void) => {
  const [state, setState] = useState(args);

  useEffect(() => {
    if (callback) return callback();
  }, [args]);

  return [state, setState];
};
