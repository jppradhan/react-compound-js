import * as React from "react";
import "./styles.scss";
interface Props {
    rate: number;
    icon: React.ReactNode;
    width: number;
    height: number;
    margin?: number;
    readonly?: boolean;
    onSetRating?: (rating: number) => void;
}
interface State {
    rate: number;
}
export declare class Ratings extends React.Component<Props, State> {
    private containerWidth;
    constructor(props: Props);
    render(): JSX.Element;
    private getRatingStyle;
    private getIconStyle;
    private getContainerStyle;
    private setRatings;
}
export {};
//# sourceMappingURL=Ratings.d.ts.map