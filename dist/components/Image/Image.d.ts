import * as React from "react";
interface Props {
    src: string;
    loadingIcon: React.ReactNode;
}
interface State {
    isLoading: boolean;
}
export declare class Image extends React.Component<Props, State> {
    constructor(props: Props);
    render(): JSX.Element;
    private loadImage;
}
export {};
//# sourceMappingURL=Image.d.ts.map