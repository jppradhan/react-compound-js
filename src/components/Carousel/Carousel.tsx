import * as React from "react";
import cx from "classnames";
//@ts-ignore
import Arrow from "../../icons/right-arrow.svg";
import styles from "./styles.scss";

interface Props {
  children: React.ReactNode;
  loop?: boolean;
  iconDimension?: number;
}

interface State {
  translateY: number;
  children?: React.ReactNode;
}

const ICON_DIMENSIONS = 20;

export class Carousel extends React.Component<Props, State> {
  private wrapperRef: HTMLElement | null = null;
  private wrapperWidth: number = 0;
  private itemWidth: number = 0;
  private viewPortRef: HTMLElement | null = null;
  private viewPortWidth: number = 0;
  private maxTranslate: number = 0;
  private minTranslate: number = 0;
  private offsetItem: number = 0;
  private dragStartPoint = 0;
  private dragEndPoint = 0;

  public constructor(props: Props) {
    super(props);
    const { loop, children } = this.props;
    this.state = {
      translateY: 0,
      children: loop ? children : null
    };
  }

  public componentDidMount() {
    if (this.wrapperRef) {
      this.wrapperWidth = this.wrapperRef.offsetWidth;
      const count = React.Children.count(this.props.children);
      this.itemWidth = count > 0 ? this.wrapperWidth / count : 0;
    }
    if (this.viewPortRef) {
      this.viewPortWidth = this.viewPortRef.offsetWidth;
      this.offsetItem =
        this.itemWidth > 0
          ? Math.floor(this.viewPortWidth / this.itemWidth)
          : 0;
      this.maxTranslate = this.itemWidth * this.offsetItem - this.wrapperWidth;
    }
  }

  public render() {
    const { loop, children, iconDimension } = this.props;
    return (
      <div className={styles.carousel}>
        <div className={styles.viewport} ref={e => (this.viewPortRef = e)}>
          <div
            className={styles.wrapper}
            ref={e => (this.wrapperRef = e)}
            style={this.getTransform()}
            onDragStart={this.onDragStart}
            onDragEnd={this.onDragEnd}
            onTouchStart={this.onTouchStart}
            onTouchEnd={this.onTouchEnd}
            draggable={true}
          >
            {loop ? this.state.children : children}
          </div>
        </div>
        <div className={styles.controls}>
          <button
            onClick={this.onClickPrev}
            className={cx([styles.btn, styles.prevBtn])}
          >
            <Arrow
              width={iconDimension || ICON_DIMENSIONS}
              height={iconDimension || ICON_DIMENSIONS}
            />
          </button>
          <button
            onClick={this.onClickNext}
            className={cx([styles.btn, styles.nextBtn])}
          >
            <Arrow
              width={iconDimension || ICON_DIMENSIONS}
              height={iconDimension || ICON_DIMENSIONS}
            />
          </button>
        </div>
      </div>
    );
  }

  private onClickPrev = () => {
    this.setTranslate(this.itemWidth, "prev");
  };

  private onClickNext = () => {
    this.setTranslate(this.itemWidth, "next");
  };

  private getTransform = (): React.CSSProperties => {
    return {
      transform: `translateX(${this.state.translateY}px)`,
      transition: "transform 0.3s linear",
      WebkitTransform: `translateX(${this.state.translateY}px)`,
      //@ts-ignore
      MozTransform: `translateX(${this.state.translateY}px)`,
      WebkitTransition: "transform 0.3s linear",
      MozTransition: "transform 0.3s linear"
      //@ts-check
    };
  };

  private setTranslate = (distance: number, direction: string) => {
    if (this.props.loop) {
      this.setState(prevState => ({
        ...prevState,
        children: this.shiftChildren(prevState, direction)
      }));
    } else {
      const previousTranslate =
        direction === "prev"
          ? this.state.translateY + distance
          : this.state.translateY - distance;

      if (
        previousTranslate < this.maxTranslate ||
        previousTranslate > this.minTranslate
      ) {
        return;
      }
      this.setState(prevState => ({
        ...prevState,
        translateY: previousTranslate
      }));
    }
  };

  private shiftChildren = (prevState: State, direction: string) => {
    const children = React.Children.toArray(prevState.children);
    if (direction === "next") {
      const firstChild = children.shift();
      // @ts-ignore
      children.push(firstChild);
    }
    if (direction === "prev") {
      const lastChild = children.pop();
      // @ts-ignore
      children.unshift(lastChild);
    }
    return children;
  };

  private onDragStart = (e: React.MouseEvent<any>) => {
    e.persist();
    this.dragStartPoint = e.clientX;
  };

  private onDragEnd = (e: React.MouseEvent<any>) => {
    e.persist();
    this.dragEndPoint = e.clientX;
    this.onSlide();
  };

  private onTouchStart = (e: React.TouchEvent<any>) => {
    e.persist();
    this.dragStartPoint = e.targetTouches[0].clientX;
  };

  private onTouchEnd = (e: React.TouchEvent<any>) => {
    e.persist();
    this.dragEndPoint = e.changedTouches[0].clientX;
    this.onSlide();
  };

  private onSlide = () => {
    if (this.dragEndPoint < this.dragStartPoint) {
      this.setTranslate(this.itemWidth, "next");
    }

    if (this.dragEndPoint > this.dragStartPoint) {
      this.setTranslate(this.itemWidth, "prev");
    }
  };
}
