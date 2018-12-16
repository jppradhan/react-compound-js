import * as React from "react";
import cx from "classnames";
import styles from "./styles.scss";

interface Props extends React.ButtonHTMLAttributes<any> {
  children: React.ReactNode;
  format?: "primary" | "success" | "default" | "danger" | "light";
  disabled?: boolean;
}

const classStyles = (props: any) =>
  cx({
    [styles.default]: true,
    [styles[props.format]]: true,
    [styles.disabled]: props.disabled
  });

export const Button: React.SFC<Props> = ({
  children,
  format = "default",
  disabled = false,
  ...rest
}) => (
  <button className={classStyles({ format, disabled, ...rest })} {...rest}>
    {children}
  </button>
);
