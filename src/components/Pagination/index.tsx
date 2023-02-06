import Pagination from "react-js-pagination";
import React from "react";
import * as s from "./styles";

export const Paging = ({ page, count, setPage }) => {
  return (
    <s.Wrapper>
      <Pagination
        activePage={page}
        itemsCountPerPage={10}
        totalItemsCount={count}
        pageRangeDisplayed={5}
        prevPageText="‹"
        nextPageText="›"
        onChange={setPage}
      />
    </s.Wrapper>
  );
};
export default Paging;
