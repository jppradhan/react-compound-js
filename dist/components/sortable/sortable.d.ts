import * as React from "react";
interface Props {
    children: React.ReactNode;
}
interface State {
    children: React.ReactElement<any>[];
    dragClassIndex: number | null;
}
export declare class Sortable extends React.Component<Props, State> {
    private dragElementIndex;
    constructor(props: Props);
    render(): JSX.Element;
    private onDrop;
    private onDragStart;
    private moveElement;
    private onDragOver;
    private onDragEnd;
}
export {};
