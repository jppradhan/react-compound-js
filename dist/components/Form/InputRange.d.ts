import * as React from "react";
import "./styles.css";
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
    constructor(props: Props);
    render(): JSX.Element;
    private getRangeStyle;
    private onKeyDownStart;
    private onKeyDownEnd;
    private onChangeStart;
    private onChangeEnd;
    private onDragButton;
}
export {};
//# sourceMappingURL=InputRange.d.ts.map