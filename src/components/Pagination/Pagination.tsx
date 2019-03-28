import React, { SFC, useState } from "react";
//@ts-ignore
import Arrow from "../../icons/right-arrow.svg";
import { Wrapper, StyledButton, StyledInput, Remain } from "./styles";

interface Props {
  total: number;
  page: number;
  onGoToPage: (page: number) => void;
}

export const Pagination: SFC<Props> = props => {
  const { total } = props;
  const [currentPage, setCurrentPage] = useState(props.page);
  const [pageInput, setPageInput] = useState(props.page);

  const setActivePage = (page: number) => {
    if (page < 0 || page > total) {
      return;
    }
    setCurrentPage(page);
    setPageInput(page);
    props.onGoToPage(page);
  };

  const onChangeInput = (e: React.ChangeEvent<any>) => {
    const val = e.target.value;
    if (val < 0 || val > props.total) {
      return;
    }
    setPageInput(val);
  };

  const onKeyPressInput = (e: React.KeyboardEvent<any>) => {
    if (e.key === "Enter") {
      setActivePage(pageInput);
    }
  };

  return (
    <Wrapper>
      <StyledButton
        onClick={() => setActivePage(currentPage - 1)}
        disabled={currentPage <= 0}
      >
        <Arrow />
      </StyledButton>
      <StyledInput
        type="number"
        value={pageInput}
        onChange={onChangeInput}
        onKeyPress={onKeyPressInput}
      />
      <StyledButton
        onClick={() => setActivePage(currentPage + 1)}
        disabled={currentPage >= total}
      >
        <Arrow />
      </StyledButton>
      <Remain> of {total}</Remain>
    </Wrapper>
  );
};
