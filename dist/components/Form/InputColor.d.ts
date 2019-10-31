import { SFC, ChangeEvent, ReactNode, InputHTMLAttributes } from "react";
interface Props extends InputHTMLAttributes<HTMLInputElement> {
    label: ReactNode;
    value: string;
    name: string;
    format: "default" | "error" | "success";
    errorMessage?: string;
    isValid?: boolean;
    onChange?: (e: ChangeEvent<any>) => void;
}
export declare const InputColor: SFC<Props>;
export {};
