import * as React from "react";
import { StyledRatings, TopLayer, BottomLayer, RatingsIcon } from "./styles";

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

const COUNT = 5;
const MARGIN = 5;

export class Ratings extends React.Component<Props, State> {
  private containerWidth: number = 0;

  public constructor(props: Props) {
    super(props);
    this.state = {
      rate: this.props.rate
    };
  }

  public render() {
    const blankStar = [];
    for (let i = 0; i < COUNT; i += 1) {
      blankStar.push(i);
    }
    const { icon } = this.props;
    return (
      <StyledRatings style={this.getContainerStyle()} onClick={this.setRatings}>
        <TopLayer style={this.getRatingStyle()}>
          {blankStar.map((b, i) => (
            <RatingsIcon key={`RATINGS_ICON_${i}`} style={this.getIconStyle()}>
              {icon}
            </RatingsIcon>
          ))}
        </TopLayer>
        <BottomLayer>
          {blankStar.map((b, i) => (
            <RatingsIcon key={`RATINGS_ICON_${i}`} style={this.getIconStyle()}>
              {icon}
            </RatingsIcon>
          ))}
        </BottomLayer>
      </StyledRatings>
    );
  }

  private getRatingStyle = () => {
    const { rate } = this.state;
    return {
      width: `${(100 / COUNT) * rate}%`
    };
  };

  private getIconStyle = () => {
    const { width, height } = this.props;
    return {
      width: `${width}px`,
      height: `${height}px`
    };
  };

  private getContainerStyle = () => {
    const { width, height, margin } = this.props;
    this.containerWidth = (width + (margin || MARGIN)) * COUNT;
    return {
      width: `${this.containerWidth}px`,
      height: `${height}px`
    };
  };

  private setRatings = (e: React.MouseEvent<any>) => {
    if (this.props.readonly) {
      return;
    }
    //@ts-ignore
    const diffWidth = e.clientX - e.currentTarget.offsetLeft;
    const rate = parseFloat(((diffWidth / this.containerWidth) * 5).toFixed(1));
    this.setState(
      {
        rate
      },
      () => {
        if (this.props.onSetRating) {
          this.props.onSetRating(rate);
        }
      }
    );
  };
}
