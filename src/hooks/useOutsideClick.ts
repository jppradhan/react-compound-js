import { useRef, useEffect } from "react";

interface SyntheticEvent<T> {
  target: EventTarget & T;
}

export const useOutsideClick = (callback: () => void) => {
  const elemRef = useRef<HTMLElement>(null);

  const handleOutsideClick = (event: SyntheticEvent<HTMLElement>) => {
    if (elemRef.current && elemRef.current.contains(event.target)) {
      if (callback) {
        callback();
      }
    }
  };

  useEffect(() => {
    //@ts-ignore
    document.addEventListener("click", handleOutsideClick);
    //@ts-ignore
    return () => document.removeEventListener("click", handleOutsideClick);
  });

  return elemRef;
};
