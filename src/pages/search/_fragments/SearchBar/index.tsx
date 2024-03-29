import SearchIcon from "@public/icon/SearchIcon.svg";
import * as s from "@styles/PageStyles/search/_fragments/SearchBar/styles";

const SearchBar = () => {
  return (
    <form action="/search/result" method="get">
      <s.Wrapper>
        <SearchIcon />
        <s.SearchInput type="text" name="keyword" placeholder="검색어를 입력해주세요." required />
      </s.Wrapper>
    </form>
  );
};

export default SearchBar;
