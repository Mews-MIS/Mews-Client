import SearchIcon from "@public/icon/SearchIcon.svg";
import * as s from "./styles";

const SearchBar = () => {
  return (
    <s.Wrapper>
      <SearchIcon />
      <s.SearchInput placeholder="검색어를 입력해주세요." />
    </s.Wrapper>
  );
};

export default SearchBar;
