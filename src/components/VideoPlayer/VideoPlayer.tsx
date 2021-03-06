import * as React from "react";
import {
  VideoWrapper,
  VideoList,
  PreviewItem,
  PreviewThumb,
  Title,
  VideoContainer
} from "./styles";

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

export class VideoPlayer extends React.Component<Props, State> {
  private wrapper: HTMLElement | null = null;
  public constructor(props: Props) {
    super(props);
    this.state = {
      selectedVideo: this.props.videos[0],
      listHeight: "0px",
      selectedVideoIndex: 0
    };
  }

  public componentDidMount() {
    this.setState({
      listHeight: this.getListHeight()
    });
  }

  public render() {
    const { videos, children } = this.props;
    return (
      <VideoWrapper ref={(e: any) => (this.wrapper = e)}>
        <VideoList style={{ height: this.state.listHeight }}>
          {videos.map((video, v) => (
            <PreviewItem
              onClick={() => this.onSelectVideo(video, v)}
              key={`PREVIEW__${v}`}
              selected={this.state.selectedVideoIndex === v}
            >
              <PreviewThumb src={video.thumb} />
              <Title>
                <h4>{video.title}</h4>
              </Title>
            </PreviewItem>
          ))}
        </VideoList>
        <VideoContainer>{children(this.state.selectedVideo)}</VideoContainer>
      </VideoWrapper>
    );
  }

  private getListHeight = () => {
    if (this.wrapper) {
      return `${this.wrapper.offsetHeight - 20}px`;
    }
    return `0px`;
  };

  private onSelectVideo = (video: Video, index: number) => {
    this.setState({
      selectedVideo: video,
      selectedVideoIndex: index
    });
  };
}
