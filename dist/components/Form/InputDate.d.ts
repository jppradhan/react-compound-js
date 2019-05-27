import { SFC, ReactNode, ChangeEvent } from "react";
interface Props {
    value: string;
    dateFormat: string;
    label: ReactNode;
    name: string;
    format: "default" | "error" | "success";
    onChange?: (e: ChangeEvent<any>) => void;
}
export declare const InputDate: SFC<Props>;
export {};
