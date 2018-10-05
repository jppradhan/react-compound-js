import * as React from "react";
import "./styles.scss";

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
      <div className="video__wrapper" ref={e => (this.wrapper = e)}>
        <div className="video__list" style={{ height: this.state.listHeight }}>
          {videos.map((video, v) => (
            <div
              className={`preview__item ${
                this.state.selectedVideoIndex === v ? "selected" : ""
              }`}
              onClick={() => this.onSelectVideo(video, v)}
              key={`PREVIEW__${v}`}
            >
              <img src={video.thumb} className="preview__thumb" />
              <div className="title">
                <h4>{video.title}</h4>
              </div>
            </div>
          ))}
        </div>
        <div className="video__container">
          {children(this.state.selectedVideo)}
        </div>
      </div>
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
