import React, { SFC, ReactNode } from "react";
import { FormRadio, RadioLabel } from "./styles";

interface Props {
  label: ReactNode;
  value?: string;
  name: string;
  checked?: boolean;
  id: string;
}

export const InputRadio: SFC<Props> = ({ label, id, ...rest }) => {
  return (
    <FormRadio>
      <input type="radio" {...rest} id={id} />
      <RadioLabel htmlFor={id}>{label}</RadioLabel>
    </FormRadio>
  );
};
