import React, { useRef, useEffect, SFC } from "react";
import Picker from "./Picker";

interface Props {
  onSelect: (color: string) => void;
}

export const ColorPicker: SFC<Props> = ({ onSelect }) => {
  const picker: { current: HTMLElement | null } = useRef(null);

  useEffect(() => {
    if (picker.current) {
      new Picker({
        element: picker.current,
        onSelect: color => {
          if (typeof onSelect === "function") {
            onSelect(color);
          }
        }
      });
    }
  }, []);

  return <div ref={e => (picker.current = e)} />;
};
