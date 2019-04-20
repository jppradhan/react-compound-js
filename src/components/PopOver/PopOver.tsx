import React, { useState, SFC, useEffect } from "react";
import { PopoverWrapper, PopoverContainer } from "./styles";

interface Props {
  content: React.ReactNode;
  position: "left" | "right" | "top" | "bottom";
  size: "md" | "lg" | "sm";
}

const dispatchClosePopup = () => {
  const event = new Event("closePopup");
  document.dispatchEvent(event);
};

export const PopOver: SFC<Props> = props => {
  const [isShowing, setIsShowing] = useState(false);

  const openPopup = (e: React.MouseEvent<any>) => {
    dispatchClosePopup();
    setIsShowing(true);
  };

  const addEvents = () => {
    document.addEventListener("click", onClickOutside);
    document.addEventListener("closePopup", closePopup);
  };

  const removeEvents = () => {
    document.removeEventListener("click", onClickOutside);
    document.removeEventListener("closePopup", closePopup);
  };

  const closePopup = () => {
    setIsShowing(false);
  };

  const onClickOutside = (e: Event) => {
    //@ts-ignore
    const paths = e.path;
    for (let i = 0; i < paths.length; i += 1) {
      if (
        paths[i].classList &&
        paths[i].classList.contains("popover-container")
      ) {
        return;
      }
    }
    closePopup();
  };

  useEffect(() => {
    if (isShowing) {
      addEvents();
    } else {
      removeEvents();
    }
    return () => {
      removeEvents();
    };
  }, [isShowing]);

  const { children, content, position = "bottom", size = "md" } = props;
  return (
    <PopoverContainer onClick={openPopup}>
      {children}
      {isShowing && (
        <PopoverWrapper position={position} size={size}>
          {content}
        </PopoverWrapper>
      )}
    </PopoverContainer>
  );
};
