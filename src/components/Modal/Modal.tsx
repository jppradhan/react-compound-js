import * as React from "react";
import {
  StyledModal,
  ModalInner,
  ModalTitle,
  CloseDialog,
  ModalBody
} from "./styles";
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
  innerClass: "close" | "open";
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
        <StyledModal
          onClick={this.onClickOutSide}
          onKeyUp={this.onKeyPress}
          tabIndex={0}
          ref={(e: any) => (this.modalElem = e)}
        >
          <ModalInner innerClass={this.state.innerClass}>
            <ModalTitle>
              <h2>{title}</h2>
              <CloseDialog onClick={this.onCloseModal}>
                <Cross />
              </CloseDialog>
            </ModalTitle>
            <ModalBody>{children}</ModalBody>
          </ModalInner>
        </StyledModal>
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
    if (e.target.classList.contains(styles.modal)) {
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
