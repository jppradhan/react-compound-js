import React, { SFC } from "react";
interface Props {
    content: React.ReactNode;
    position: "left" | "right" | "top" | "bottom";
    size: "md" | "lg" | "sm";
}
export declare const PopOver: SFC<Props>;
export {};
