import * as React from "react";
import { DatePicker } from "../DatePicker/DatePicker";
import "./styles.scss";

interface Props {
  value: string;
  dateFormat: string;
  label: React.ReactNode;
  name: string;
  format: "default" | "error" | "success";
  onChange?: (e: React.ChangeEvent<any>) => void;
}

interface State {
  selectedValue: string;
  showDatePicker: boolean;
}

export class InputDate extends React.Component<Props, State> {
  public constructor(props: Props) {
    super(props);
    this.state = {
      selectedValue: this.props.value,
      showDatePicker: false
    };
  }

  public render() {
    const {
      value,
      label,
      dateFormat,
      format = "default",
      ...rest
    } = this.props;
    return (
      <div className="form-elems form-date">
        <label className="input-label">{label}</label>
        <input
          type="text"
          value={this.state.selectedValue}
          {...rest}
          onFocus={this.openDatePicker}
          className={`form-input format-${format}`}
        />
        <div className="picker__wrapper">
          {this.state.showDatePicker ? (
            <DatePicker
              format={dateFormat}
              currentDate={value}
              onSelectDate={val => this.setDateValue(val)}
            />
          ) : null}
        </div>
      </div>
    );
  }

  private setDateValue = (val: string) => {
    this.setState({
      showDatePicker: false,
      selectedValue: val
    });
  };

  private openDatePicker = () => {
    this.setState({
      showDatePicker: true
    });
  };
}
