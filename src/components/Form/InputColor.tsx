import React, {
  useState,
  SFC,
  ChangeEvent,
  ReactNode,
  InputHTMLAttributes
} from "react";
import { ColorPicker } from "components/ColorPicker/ColorPicker";
import { useOutsideClick } from "hooks/useOutsideClick";
import {
  FormElems,
  InputLabel,
  FormInput,
  InputErrorMessage,
  ColorInput,
  ColorPickerWrapper,
  ColorPreview
} from "./styles";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: ReactNode;
  value: string | number;
  name: string;
  format: "default" | "error" | "success";
  errorMessage?: string;
  isValid?: boolean;
  onChange?: (e: ChangeEvent<any>) => void;
}

const DEFAULT_COLOR = "#000000";

export const InputColor: SFC<Props> = ({
  type = "text",
  format = "default",
  label,
  errorMessage,
  isValid,
  ...rest
}) => {
  const [color, setColor] = useState(DEFAULT_COLOR);
  const [showPicker, setShowPicker] = useState(false);

  const colorElem = useOutsideClick(() => {
    setShowPicker(false);
  });

  const handleInputClick = () => {
    setShowPicker(true);
  };

  return (
    //@ts-ignore
    <ColorInput ref={e => (colorElem.current = e)}>
      <FormElems>
        <InputLabel>{label}</InputLabel>
        <FormInput
          {...rest}
          type='text'
          format={format}
          value={color}
          onClick={handleInputClick}
        />
        <ColorPreview
          style={{ backgroundColor: color }}
          onClick={handleInputClick}
        />
        {showPicker && (
          <ColorPickerWrapper>
            <ColorPicker onSelect={setColor} />
          </ColorPickerWrapper>
        )}
        {format === "error" && errorMessage ? (
          <InputErrorMessage>{errorMessage}</InputErrorMessage>
        ) : null}
      </FormElems>
    </ColorInput>
  );
};
