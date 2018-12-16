import * as React from "react";
import cx from "classnames";
import styles from "./styles.scss";

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
    <div className={cx(styles.formElems, styles.formRadio)}>
      <input type="radio" {...rest} id={id} />
      <Label className={styles.radioLabel} for={id}>
        {label}
      </Label>
    </div>
  );
};
