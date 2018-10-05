import * as React from "react";
import "./styles.scss";

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
    <div className="form-elems">
      <label className="input-label">{label}</label>
      <input type={type} {...rest} className={`form-input format-${format}`} />
      {format === "error" && errorMessage ? (
        <p className="input-error-message">{errorMessage}</p>
      ) : null}
    </div>
  );
};
