import * as React from "react";
import "./styles.css";
interface Props {
    content: React.ReactNode;
    position: "left" | "right" | "top" | "bottom";
    size: "md" | "lg" | "sm";
}
interface State {
    isShowing: boolean;
}
export declare class PopOver extends React.Component<Props, State> {
    constructor(props: Props);
    componentWillUnmount(): void;
    render(): JSX.Element;
    private openPopup;
    private closePopup;
    private onClickOutside;
}
export {};
//# sourceMappingURL=PopOver.d.ts.map