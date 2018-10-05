import * as React from "react";
import "./styles.scss";

interface Props {
  src: string;
  loadingIcon: React.ReactNode;
}

interface State {
  isLoading: boolean;
}

export class Image extends React.Component<Props, State> {
  // private img: any = null;
  public constructor(props: Props) {
    super(props);
    this.state = {
      isLoading: true
    };
  }

  public render() {
    const { src, loadingIcon } = this.props;
    return (
      <div className="image">
        {this.state.isLoading && (
          <div className="loadingWrapper">{loadingIcon}</div>
        )}
        <img
          src={src}
          onLoad={this.loadImage}
          className={this.state.isLoading ? "hide" : "show"}
        />
      </div>
    );
  }

  private loadImage = (e: any) => {
    this.setState({
      isLoading: false
    });
  };
}
