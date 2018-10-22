import * as React from "react";
import "./styles.scss";

interface Props {
  content: React.ReactNode;
  position: "left" | "right" | "top" | "bottom";
  size: "md" | "lg" | "sm";
}

interface State {
  isShowing: boolean;
}

const dispatchClosePopup = () => {
  const event = new Event("closePopup");
  document.dispatchEvent(event);
};

export class PopOver extends React.Component<Props, State> {
  public constructor(props: Props) {
    super(props);
    this.state = {
      isShowing: false
    };
  }

  public componentWillUnmount() {
    document.removeEventListener("click", this.onClickOutside);
    document.removeEventListener("closePopup", this.closePopup);
  }

  public render() {
    const { children, content, position = "bottom", size = "md" } = this.props;
    return (
      <div className="popover__container" onClick={this.openPopup}>
        {children}
        {this.state.isShowing ? (
          <div className={`popover__wrapper ${position} ${size}`}>
            {content}
          </div>
        ) : null}
      </div>
    );
  }

  private openPopup = (e: React.MouseEvent<any>) => {
    dispatchClosePopup();
    this.setState(
      {
        isShowing: true
      },
      () => {
        document.addEventListener("click", this.onClickOutside);
        document.addEventListener("closePopup", this.closePopup);
      }
    );
  };

  private closePopup = () => {
    this.setState(
      {
        isShowing: false
      },
      () => {
        document.removeEventListener("click", this.onClickOutside);
        document.removeEventListener("closePopup", this.closePopup);
      }
    );
  };

  private onClickOutside = (e: Event) => {
    //@ts-ignore
    const paths = e.path;
    for (let i = 0; i < paths.length; i += 1) {
      if (
        paths[i].classList &&
        paths[i].classList.contains("popover__container")
      ) {
        return;
      }
    }
    this.closePopup();
  };
}
