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

export class PopOver extends React.Component<Props, State> {
  public constructor(props: Props) {
    super(props);
    this.state = {
      isShowing: false
    };
  }

  public componentWillUnmount() {
    document.removeEventListener("click", this.onClickOutside);
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

  private openPopup = () => {
    this.setState(
      {
        isShowing: true
      },
      () => {
        document.addEventListener("click", this.onClickOutside);
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
