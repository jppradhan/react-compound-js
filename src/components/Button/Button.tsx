import * as React from "react";
import "./styles.scss";

interface Props extends React.ButtonHTMLAttributes<any> {
  children: React.ReactNode;
  format?: "primary" | "success" | "default" | "danger" | "light";
  disabled?: boolean;
}

export const Button: React.SFC<Props> = ({
  children,
  format = "default",
  disabled = false,
  ...rest
}) => (
  <button
    className={`default ${format} ${disabled ? "disabled" : ""}`}
    {...rest}
  >
    {children}
  </button>
);
