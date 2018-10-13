import * as React from "react";
import "./styles.scss";
interface Props {
    children: React.ReactNode;
    loop?: boolean;
    iconDimension?: number;
}
interface State {
    translateY: number;
    children?: React.ReactNode;
}
export declare class Carousel extends React.Component<Props, State> {
    private wrapperRef;
    private wrapperWidth;
    private itemWidth;
    private viewPortRef;
    private viewPortWidth;
    private maxTranslate;
    private minTranslate;
    private offsetItem;
    private dragStartPoint;
    private dragEndPoint;
    constructor(props: Props);
    componentDidMount(): void;
    render(): JSX.Element;
    private onClickPrev;
    private onClickNext;
    private getTransform;
    private setTranslate;
    private shiftChildren;
    private onDragStart;
    private onDragEnd;
    private onTouchStart;
    private onTouchEnd;
    private onSlide;
}
export {};
//# sourceMappingURL=Carousel.d.ts.map