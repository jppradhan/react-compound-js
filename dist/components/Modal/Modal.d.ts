import * as React from "react";
interface Props {
    onDismiss: () => void;
    isShowing: boolean;
    title: string;
    children: React.ReactNode;
}
interface State {
    isShowing: boolean;
    innerClass: "close" | "open";
}
export declare class Modal extends React.Component<Props, State> {
    private modalElem;
    constructor(props: Props);
    componentDidUpdate(): void;
    componentWillReceiveProps(nextProps: Props): void;
    render(): JSX.Element | null;
    onCloseModal: () => void;
    private onClickOutSide;
    private onKeyPress;
}
export {};
