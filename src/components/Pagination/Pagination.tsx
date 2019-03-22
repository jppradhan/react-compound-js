import * as React from "react";
//@ts-ignore
import Arrow from "../../icons/right-arrow.svg";
import { Wrapper, StyledButton, StyledInput, Remain } from "./styles";

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
    this.onChangeInput = this.onChangeInput.bind(this);
    this.onKeyPressInput = this.onKeyPressInput.bind(this);
  }

  public render() {
    const { currentPage } = this.state;
    const { total } = this.props;
    return (
      <Wrapper>
        <StyledButton
          onClick={() => this.setActivePage(currentPage - 1)}
          disabled={currentPage <= 0}
        >
          <Arrow />
        </StyledButton>
        <StyledInput
          type="number"
          value={this.state.pageInput}
          onChange={this.onChangeInput}
          onKeyPress={this.onKeyPressInput}
        />
        <StyledButton
          onClick={() => this.setActivePage(currentPage + 1)}
          disabled={currentPage >= total}
        >
          <Arrow />
        </StyledButton>
        <Remain> of {total}</Remain>
      </Wrapper>
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
