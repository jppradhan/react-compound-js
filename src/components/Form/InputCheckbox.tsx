import * as React from "react";
import { FormCheckbox, CheckboxLabel } from "./styles";

interface Props {
  label: React.ReactNode;
  value?: string;
  name: string;
  checked?: boolean;
  id?: string;
}

export const InputCheckbox: React.SFC<Props> = ({ label, id, ...rest }) => {
  return (
    <FormCheckbox>
      <input type="checkbox" {...rest} id={id} />
      <CheckboxLabel for={id}>{label}</CheckboxLabel>
    </FormCheckbox>
  );
};
