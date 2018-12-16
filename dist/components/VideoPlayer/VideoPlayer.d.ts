import * as React from "react";
interface Video {
    title: string;
    description?: string;
    sources: string[];
    subtitle?: string;
    thumb?: string;
}
interface Props {
    videos: Video[];
    children: (video: Video) => React.ReactNode;
}
interface State {
    selectedVideo: Video;
    listHeight: string;
    selectedVideoIndex: number;
}
export declare class VideoPlayer extends React.Component<Props, State> {
    private wrapper;
    constructor(props: Props);
    componentDidMount(): void;
    render(): JSX.Element;
    private getListHeight;
    private onSelectVideo;
}
export {};
//# sourceMappingURL=VideoPlayer.d.ts.map