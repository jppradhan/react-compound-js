import * as React from "react";
import { ImageWrapper, LoadingWrapper, StyledImage } from "./styles";

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
      <ImageWrapper>
        {this.state.isLoading && <LoadingWrapper>{loadingIcon}</LoadingWrapper>}
        <StyledImage
          src={src}
          onLoad={this.loadImage}
          show={!this.state.isLoading}
        />
      </ImageWrapper>
    );
  }

  private loadImage = (e: any) => {
    this.setState({
      isLoading: false
    });
  };
}
