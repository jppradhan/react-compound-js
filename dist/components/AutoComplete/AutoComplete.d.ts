import React, { SFC } from "react";
interface Row {
    name: string;
    id: number | string;
}
interface Props {
    values: Row[];
    children: React.ReactNode;
    open: boolean;
    onEnter: (value: Row) => void;
}
export declare const AutoComplete: SFC<Props>;
export {};
