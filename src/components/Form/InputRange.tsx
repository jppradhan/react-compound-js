import * as React from "react";
import cx from "classnames";
import styles from "./styles.scss";

interface Props {
  start: number;
  end: number;
  max: number;
  label: React.ReactNode;
  startInputName?: string;
  endInputName?: string;
  onSlideDone?: (start: number, end: number) => void;
}

interface State {
  start: number;
  end: number;
  inputStart: number;
  inputEnd: number;
}

export class InputRange extends React.Component<Props, State> {
  private rangeElem: HTMLElement | null = null;
  private startMouseDown: boolean = false;
  private endMouseDown: boolean = false;
  public constructor(props: Props) {
    super(props);
    this.state = {
      start: this.props.start,
      end: this.props.end,
      inputStart: this.props.start,
      inputEnd: this.props.end
    };
  }

  public componentDidMount() {
    document.addEventListener("mousedown", this.onMouseDown);
    document.addEventListener("mouseup", this.onMouseUp);
    document.addEventListener("mousemove", this.onMouseMove);
  }

  public componentWillUnmount() {
    document.removeEventListener("mousedown", this.onMouseDown);
    document.removeEventListener("mouseup", this.onMouseUp);
    document.removeEventListener("mousemove", this.onMouseMove);
  }

  public render() {
    const {
      label,
      startInputName = "start",
      endInputName = "end"
    } = this.props;

    const { start, end } = this.state;
    return (
      <div className={cx([styles.formElems, styles.formRange])}>
        <label className={styles.inputLabel}>{label}</label>
        <div className={styles.rangeWrapper} ref={e => (this.rangeElem = e)}>
          <div className={styles.range} style={this.getRangeStyle(start, end)}>
            <span
              className={cx([styles.rangeButton, styles.left])}
              id="start-button"
              role="slider"
            />
            <span
              className={cx([styles.rangeButton, styles.right])}
              role="slider"
              id="end-button"
            />
          </div>
        </div>
        <div className={styles.rangeInputs}>
          <input
            type="text"
            name={startInputName}
            className={cx([styles.formInput, styles.formatDefault])}
            value={this.state.inputStart}
            onChange={this.onChangeStart}
            onKeyDown={this.onKeyDownStart}
          />
          <input
            type="text"
            name={endInputName}
            className={cx([styles.formInput, styles.formatDefault])}
            value={this.state.inputEnd}
            onChange={this.onChangeEnd}
            onKeyDown={this.onKeyDownEnd}
          />
        </div>
      </div>
    );
  }

  private getRangeStyle = (start: number, end: number) => {
    return {
      width: `${end - start}%`,
      marginLeft: `${start}%`
    };
  };

  private onKeyDownStart = (e: React.KeyboardEvent) => {
    if (e.keyCode !== 13) {
      return;
    }
    //@ts-ignore
    const val = parseInt(e.target.value);
    if (val < 0 || val > this.state.end) {
      return;
    }
    this.setState({
      start: val
    });
  };

  private onKeyDownEnd = (e: React.KeyboardEvent) => {
    if (e.keyCode !== 13) {
      return;
    }
    //@ts-ignore
    const val = parseInt(e.target.value);
    if (val < 0 || val < this.state.start) {
      return;
    }
    this.setState({
      end: val
    });
  };

  private onChangeStart = (e: React.ChangeEvent) => {
    //@ts-ignore
    const val = e.target.value;
    this.setState({
      inputStart: val
    });
  };

  private onChangeEnd = (e: React.ChangeEvent) => {
    //@ts-ignore
    const val = e.target.value;
    this.setState({
      inputEnd: val
    });
  };

  private onDragButton = (e: React.MouseEvent, buttonType: string) => {
    if (this.rangeElem) {
      const rangeWrapperWidth = this.rangeElem.offsetWidth;
      //@ts-ignore
      const wrapper = this.rangeElem.getBoundingClientRect();
      //@ts-ignore
      const leftPos = e.clientX - wrapper.left;
      if (leftPos < 0) {
        return;
      }
      const leftPercentage = Math.round((leftPos / rangeWrapperWidth) * 100);
      if (
        buttonType === "start" &&
        leftPercentage < this.state.end &&
        leftPercentage >= 0
      ) {
        this.setState({
          start: leftPercentage,
          inputStart: leftPercentage
        });
      }

      if (
        buttonType === "end" &&
        leftPercentage > this.state.start &&
        leftPercentage <= this.props.max
      ) {
        this.setState({
          end: leftPercentage,
          inputEnd: leftPercentage
        });
      }
    }
  };

  private onMouseDown = (e: Event) => {
    // @ts-ignore
    if (e.target.getAttribute("id") === "start-button") {
      this.startMouseDown = true;
    }
    // @ts-ignore
    if (e.target.getAttribute("id") === "end-button") {
      this.endMouseDown = true;
    }
  };

  private onMouseUp = (e: Event) => {
    this.startMouseDown = false;
    this.endMouseDown = false;
  };

  private onMouseMove = (e: Event) => {
    if (this.startMouseDown) {
      // @ts-ignore
      this.onDragButton(e, "start");
    }

    if (this.endMouseDown) {
      // @ts-ignore
      this.onDragButton(e, "end");
    }
  };
}
