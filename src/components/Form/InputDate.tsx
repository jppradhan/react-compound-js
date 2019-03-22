import React, { useState, SFC, ReactNode, ChangeEvent } from "react";
import { DatePicker } from "components/DatePicker/DatePicker";
import { FormDate, FormInput, InputLabel, PickerWrapper } from "./styles";

interface Props {
  value: string;
  dateFormat: string;
  label: ReactNode;
  name: string;
  format: "default" | "error" | "success";
  onChange?: (e: ChangeEvent<any>) => void;
}

export const InputDate: SFC<Props> = props => {
  const [selectedValue, setSelectedValue] = useState(props.value);
  const [showDatePicker, setShowDatePicker] = useState(false);

  const openDatePicker = () => {
    setShowDatePicker(true);
  };

  const setDateValue = (val: string) => {
    setShowDatePicker(false);
    setSelectedValue(val);
  };

  const { value, label, dateFormat, format = "default", ...rest } = props;
  return (
    <FormDate>
      <InputLabel>{label}</InputLabel>
      <FormInput
        {...rest}
        onFocus={openDatePicker}
        type="text"
        value={selectedValue}
        format={format}
      />
      <PickerWrapper>
        {showDatePicker ? (
          <DatePicker
            format={dateFormat}
            currentDate={value}
            onSelectDate={val => setDateValue(val)}
          />
        ) : null}
      </PickerWrapper>
    </FormDate>
  );
};
