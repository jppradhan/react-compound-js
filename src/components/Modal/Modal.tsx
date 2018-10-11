import * as React from "react";
import "./styles.scss";
//@ts-ignore
import Cross from "../../icons/cross.svg";

interface Props {
  onDismiss: () => void;
  isShowing: boolean;
  title: string;
  children: React.ReactNode;
}

interface State {
  isShowing: boolean;
  innerClass: string;
}

export class Modal extends React.Component<Props, State> {
  private modalElem: HTMLElement | null = null;

  public constructor(props: Props) {
    super(props);
    this.state = {
      isShowing: this.props.isShowing,
      innerClass: this.props.isShowing ? "open" : "close"
    };
  }

  public componentDidUpdate() {
    if (this.modalElem) {
      this.modalElem.focus();
    }
  }

  public componentWillReceiveProps(nextProps: Props) {
    if (nextProps.isShowing !== this.props.isShowing) {
      this.setState({
        isShowing: nextProps.isShowing,
        innerClass: nextProps.isShowing ? "open" : "close"
      });
    }
  }

  public render() {
    const { title, children } = this.props;
    if (this.state.isShowing) {
      return (
        <div
          className="modal"
          onClick={this.onClickOutSide}
          onKeyUp={this.onKeyPress}
          tabIndex={0}
          ref={e => (this.modalElem = e)}
        >
          <div className={`modal__inner ${this.state.innerClass}`}>
            <div className="modal__title">
              <h2>{title}</h2>
              <span className="close__dialog" onClick={this.onCloseModal}>
                <Cross />
              </span>
            </div>
            <div className="modal__body">{children}</div>
          </div>
        </div>
      );
    }
    return null;
  }

  public onCloseModal = () => {
    this.setState({
      innerClass: "close"
    });
    setTimeout(() => {
      this.setState(
        {
          isShowing: false
        },
        () => {
          this.props.onDismiss();
        }
      );
    }, 300);
  };

  private onClickOutSide = (e: React.SyntheticEvent<any>) => {
    //@ts-ignore
    if (e.target.classList.contains("modal")) {
      return this.onCloseModal();
    }
    return false;
  };

  private onKeyPress = (e: React.SyntheticEvent<any>) => {
    //@ts-ignore
    if (e.keyCode === 27) {
      return this.onCloseModal();
    }
    return false;
  };
}
