import * as React from "react";
import cx from "classnames";
import styles from "./styles.scss";

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
      <div className={styles.image}>
        {this.state.isLoading && (
          <div className={styles.loadingWrapper}>{loadingIcon}</div>
        )}
        <img
          src={src}
          onLoad={this.loadImage}
          className={cx({
            [styles.hide]: this.state.isLoading,
            [styles.show]: !this.state.isLoading
          })}
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
