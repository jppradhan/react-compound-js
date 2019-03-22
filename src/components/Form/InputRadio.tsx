import * as React from "react";
import { FormRadio, RadioLabel } from "./styles";

interface Props {
  label: React.ReactNode;
  value?: string;
  name: string;
  checked?: boolean;
  id?: string;
}

export const InputRadio: React.SFC<Props> = ({ label, id, ...rest }) => {
  return (
    <FormRadio>
      <input type="radio" {...rest} id={id} />
      <RadioLabel for={id}>{label}</RadioLabel>
    </FormRadio>
  );
};
