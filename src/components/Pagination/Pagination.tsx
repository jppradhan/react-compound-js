import * as React from "react";
//@ts-ignore
import Arrow from "../../icons/right-arrow.svg";
import "./styles.scss";

interface Props {
  total: number;
  page: number;
  onGoToPage: (page: number) => void;
}

interface State {
  currentPage: number;
  pageInput: number;
}

export class Pagination extends React.Component<Props, State> {
  public constructor(props: Props) {
    super(props);
    this.state = {
      currentPage: props.page,
      pageInput: props.page
    };
    this.setActivePage = this.setActivePage.bind(this);
    this.renderPaginateButtons = this.renderPaginateButtons.bind(this);
    this.onChangeInput = this.onChangeInput.bind(this);
    this.onKeyPressInput = this.onKeyPressInput.bind(this);
  }

  public render() {
    const { currentPage } = this.state;
    const { total } = this.props;
    return (
      <div className="page__wrapper">
        <button
          onClick={() => this.setActivePage(currentPage - 1)}
          className="page__button"
          disabled={currentPage <= 0}
        >
          <Arrow />
        </button>
        <input
          type="number"
          value={this.state.pageInput}
          onChange={this.onChangeInput}
          onKeyPress={this.onKeyPressInput}
          className="page__input"
        />
        <button
          onClick={() => this.setActivePage(currentPage + 1)}
          className="page__button"
          disabled={currentPage >= total}
        >
          <Arrow />
        </button>
        <span className="page__remain"> of {total}</span>
      </div>
    );
  }

  private setActivePage(page: number) {
    if (page < 0 || page > this.props.total) {
      return;
    }
    this.setState(
      {
        currentPage: page,
        pageInput: page
      },
      () => {
        this.props.onGoToPage(page);
      }
    );
  }

  private renderPaginateButtons() {
    const buttons = [];
    const { total, onGoToPage } = this.props;
    const totalCount = total <= 5 ? total : 5;
    for (let i = 0; i < totalCount; i += 1) {
      buttons.push(
        <button
          className={this.state.currentPage === i ? "active" : ""}
          onClick={() => onGoToPage(i)}
        >
          {i + 1}
        </button>
      );
    }
    return buttons;
  }

  private onChangeInput(e: React.ChangeEvent<any>) {
    const val = e.target.value;
    if (val < 0 || val > this.props.total) {
      return;
    }
    this.setState({
      pageInput: val
    });
  }

  private onKeyPressInput(e: React.KeyboardEvent<any>) {
    if (e.key === "Enter") {
      this.setActivePage(this.state.pageInput);
    }
  }
}
