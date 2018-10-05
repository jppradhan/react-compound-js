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

export const InputRadio: React.SFC<Props> = ({ label, id, ...rest }) => {
  return (
    <div className="form-elems form-radio">
      <input type="radio" {...rest} id={id} />
      <Label className="radio-label" for={id}>
        {label}
      </Label>
    </div>
  );
};
