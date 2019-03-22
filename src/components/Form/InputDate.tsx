import * as React from "react";
import { DatePicker } from "components/DatePicker/DatePicker";
import { FormDate, FormInput, InputLabel, PickerWrapper } from "./styles";

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
      <FormDate>
        <InputLabel>{label}</InputLabel>
        <FormInput
          {...rest}
          onFocus={this.openDatePicker}
          type="text"
          value={this.state.selectedValue}
          format={format}
        />
        <PickerWrapper>
          {this.state.showDatePicker ? (
            <DatePicker
              format={dateFormat}
              currentDate={value}
              onSelectDate={val => this.setDateValue(val)}
            />
          ) : null}
        </PickerWrapper>
      </FormDate>
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
