import * as React from "react";
import styles from "./styles.scss";

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
      <div
        className={styles.ratings}
        style={this.getContainerStyle()}
        onClick={this.setRatings}
      >
        <div className={styles.topLayer} style={this.getRatingStyle()}>
          {blankStar.map((b, i) => (
            <span
              className={styles.ratingsIcon}
              key={`RATINGS_ICON_${i}`}
              style={this.getIconStyle()}
            >
              {icon}
            </span>
          ))}
        </div>
        <div className={styles.bottomLayer}>
          {blankStar.map((b, i) => (
            <span
              className={styles.ratingsIcon}
              key={`RATINGS_ICON_${i}`}
              style={this.getIconStyle()}
            >
              {icon}
            </span>
          ))}
        </div>
      </div>
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
