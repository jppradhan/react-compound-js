import * as React from "react";
import cx from "classnames";
import styles from "./styles.scss";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label: React.ReactNode;
  value: string | number;
  type?: string;
  name: string;
  format: "default" | "error" | "success";
  errorMessage?: string;
  isValid?: boolean;
  onChange?: (e: React.ChangeEvent<any>) => void;
}

export const InputText: React.SFC<Props> = ({
  type = "text",
  format = "default",
  label,
  errorMessage,
  isValid,
  ...rest
}) => {
  return (
    <div className={styles.formElems}>
      <label className={styles.inputLabel}>{label}</label>
      <input
        type={type}
        {...rest}
        className={cx([styles.formInput, styles[`format-${format}`]])}
      />
      {format === "error" && errorMessage ? (
        <p className={styles.inputErrorMessage}>{errorMessage}</p>
      ) : null}
    </div>
  );
};
