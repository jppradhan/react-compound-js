import * as React from "react";
interface Props extends React.ButtonHTMLAttributes<any> {
    children: React.ReactNode;
    format?: "primary" | "success" | "default" | "danger" | "light";
    disabled?: boolean;
}
export declare const Button: React.SFC<Props>;
export {};
//# sourceMappingURL=Button.d.ts.map