import * as React from "react";
import cx from "classnames";
import { DatePicker } from "../DatePicker/DatePicker";
import styles from "./styles.scss";

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
      <div className={cx([styles.formElems, styles.formDate])}>
        <label className={cx(styles.inputLabel)}>{label}</label>
        <input
          type="text"
          value={this.state.selectedValue}
          {...rest}
          onFocus={this.openDatePicker}
          className={cx([styles.formInput, styles[`format-${format}`]])}
        />
        <div className={styles.pickerWrapper}>
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
