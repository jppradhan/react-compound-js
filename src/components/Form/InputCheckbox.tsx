import * as React from "react";

interface Props {
  label: React.ReactNode;
  value?: string;
  name: string;
  checked?: boolean;
  id?: string;
}

interface LabelProps {
  for?: string;
  className?: string;
}

const Label: React.SFC<LabelProps> = props => <label {...props} />;

export const InputCheckbox: React.SFC<Props> = ({ label, id, ...rest }) => {
  return (
    <div className="form-elems form-checkbox">
      <input type="checkbox" {...rest} id={id} />
      <Label className="checkbox-label" for={id}>
        {label}
      </Label>
    </div>
  );
};
