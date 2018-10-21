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

  public render() {
    const { children, content, position = "bottom", size = "md" } = this.props;
    return (
      <div className="popover__container" onClick={this.togglePopup}>
        {children}
        {this.state.isShowing ? (
          <div className={`popover__wrapper ${position} ${size}`}>
            {content}
          </div>
        ) : null}
      </div>
    );
  }

  private togglePopup = () => {
    this.setState({
      isShowing: !this.state.isShowing
    });
  };
}
