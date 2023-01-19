import SearchIcon from "@public/icon/SearchIcon.svg";
import * as s from "./styles";

const RecommendKeyword = ({ keyword }: { keyword: string }) => {
  return (
    <s.Wrapper>
      <SearchIcon />
      <p>{keyword}</p>
    </s.Wrapper>
  );
};

export default RecommendKeyword;
