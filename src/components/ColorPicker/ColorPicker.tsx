import React, { useRef, useEffect, SFC } from "react";
import Picker from "./Picker";

export const ColorPicker: SFC<{}> = () => {
  const picker: { current: HTMLElement | null } = useRef(null);

  useEffect(() => {
    if (picker.current) {
      new Picker({
        element: picker.current,
        onSelect: color => {
          console.log(color);
        }
      });
    }
  }, []);

  return <div ref={e => (picker.current = e)} />;
};
