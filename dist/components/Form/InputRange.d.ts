import * as React from "react";
interface Props {
    start: number;
    end: number;
    max: number;
    label: React.ReactNode;
    startInputName?: string;
    endInputName?: string;
    onSlideDone?: (start: number, end: number) => void;
}
interface State {
    start: number;
    end: number;
    inputStart: number;
    inputEnd: number;
}
export declare class InputRange extends React.Component<Props, State> {
    private rangeElem;
    private startMouseDown;
    private endMouseDown;
    constructor(props: Props);
    componentDidMount(): void;
    componentWillUnmount(): void;
    render(): JSX.Element;
    private getRangeStyle;
    private onKeyDownStart;
    private onKeyDownEnd;
    private onChangeStart;
    private onChangeEnd;
    private onDragButton;
    private onMouseDown;
    private onMouseUp;
    private onMouseMove;
}
export {};
