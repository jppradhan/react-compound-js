import * as React from "react";
import "./styles.scss";

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
  public constructor(props: Props) {
    super(props);
    this.state = {
      start: this.props.start,
      end: this.props.end,
      inputStart: this.props.start,
      inputEnd: this.props.end
    };
  }

  public render() {
    const {
      label,
      startInputName = "start",
      endInputName = "end"
    } = this.props;

    const { start, end } = this.state;
    return (
      <div className="form-elems form-range">
        <label className="input-label">{label}</label>
        <div className="range-wrapper" ref={e => (this.rangeElem = e)}>
          <div className="range" style={this.getRangeStyle(start, end)}>
            <span
              className="range-button left"
              onDrag={e => this.onDragButton(e, "start")}
              role="slider"
              draggable={true}
            />
            <span
              className="range-button right"
              onDrag={e => this.onDragButton(e, "end")}
              role="slider"
              draggable={true}
            />
          </div>
        </div>
        <div className="range-inputs">
          <input
            type="text"
            name={startInputName}
            className="form-input format-default"
            value={this.state.inputStart}
            onChange={this.onChangeStart}
            onKeyDown={this.onKeyDownStart}
          />
          <input
            type="text"
            name={endInputName}
            className="form-input format-default"
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

  // private getLeftStyle = (start: number, end: number) => {
  //   return {
  //     left: `${start}%`
  //   };
  // };

  // private getRightStyle = (start: number, end: number) => {
  //   return {
  //     left: `${end}%`
  //   };
  // };

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
}
