import * as React from "react";
import { FormElems, InputLabel, FormInput, InputErrorMessage } from "./styles";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label: React.ReactNode;
  value: string | number;
  name: string;
  format: "default" | "error" | "success";
  errorMessage?: string;
  isValid?: boolean;
  onChange?: (e: React.ChangeEvent<any>) => void;
}

export const InputColor: React.SFC<Props> = ({
  type = "text",
  format = "default",
  label,
  errorMessage,
  isValid,
  ...rest
}) => {
  return (
    <FormElems>
      <InputLabel>{label}</InputLabel>
      <FormInput type='color' format={format} {...rest} />
      {format === "error" && errorMessage ? (
        <InputErrorMessage>{errorMessage}</InputErrorMessage>
      ) : null}
    </FormElems>
  );
};
