import { SFC, ReactNode } from "react";
interface Props {
    label: ReactNode;
    value?: string;
    name: string;
    checked?: boolean;
    id: string;
}
export declare const InputRadio: SFC<Props>;
export {};
