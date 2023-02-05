import React from "react";
import * as s from "./styles";

const Pagination = ({
  limit,
  page,
  setPage,
  blockNum,
  setBlockNum,
  counts,
}: {
  limit: number;
  page: number;
  setPage: Function;
  blockNum: number;
  setBlockNum: Function;
  counts: number;
}): JSX.Element => {
  const createArr = (n: number) => {
    const iArr: number[] = new Array(n);
    for (let i = 0; i < n; i += 1) iArr[i] = i + 1;
    return iArr;
  };

  const pageLimit = 10;
  const totalPage: number = Math.ceil(counts / limit);

  const blockArea: number = Number(blockNum * pageLimit);
  const nArr = createArr(Number(totalPage));
  const pArr = nArr?.slice(blockArea, Number(pageLimit) + blockArea);

  const firstPage = () => {
    setPage(1);
    setBlockNum(0);
  };

  const lastPage = () => {
    setPage(totalPage);
    setBlockNum(Math.ceil(totalPage / pageLimit) - 1);
  };

  const prevPage = () => {
    if (page <= 1) {
      return;
    }
    if (page - 1 <= pageLimit * blockNum) {
      setBlockNum((n: number) => n - 1);
    }
    setPage((n: number) => n - 1);
  };

  const nextPage = () => {
    if (page >= totalPage) {
      return;
    }
    if (pageLimit * Number(blockNum + 1) < Number(page + 1)) {
      setBlockNum((n: number) => n + 1);
    }
    setPage((n: number) => n + 1);
  };

  return (
    <s.Wrapper>
      <s.PaginationContainer>
        <s.moveToFirstPage
          onClick={() => {
            firstPage();
          }}
        >
          &lt;&lt;
        </s.moveToFirstPage>
        <s.moveToPreviousPage
          onClick={() => {
            prevPage();
          }}
          disabled={page === 1}
        >
          &lt;
        </s.moveToPreviousPage>
        <s.pageBtnWrapper>
          {pArr.map((n: number) => (
            // eslint-disable-next-line react/button-has-type
            <s.pageBtn
              key={n}
              onClick={() => {
                setPage(n);
              }}
              aria-current={page === n ? "page" : undefined}
            >
              {n}
            </s.pageBtn>
          ))}
        </s.pageBtnWrapper>
        <s.moveToNextPage
          onClick={() => {
            nextPage();
          }}
          disabled={page === totalPage}
        >
          &gt;
        </s.moveToNextPage>
        <s.moveToLastPage
          onClick={() => {
            lastPage();
          }}
        >
          &gt;&gt;
        </s.moveToLastPage>
      </s.PaginationContainer>
    </s.Wrapper>
  );
};

export default Pagination;
