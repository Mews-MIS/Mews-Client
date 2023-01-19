import SearchBar from "@pages/search/_fragments/SearchBar";
import RecentSearched from "@pages/search/_fragments/RecentSearched";
import ContentWrapper from "@components/ContentWrapper";
import { popularKeywords, recentKeywords } from "@pages/search/data";
import PopularKeyword from "@pages/search/_fragments/PopularKeyword";
import * as s from "./styles";

const searchPage = () => {
  return (
    <s.PageTemplate>
      <SearchBar />
      <ContentWrapper contentName="최근 검색어">
        {recentKeywords.map((recentKeyword) => {
          return (
            <RecentSearched keyword={recentKeyword.keyword} articleId={recentKeyword.articleId} />
          );
        })}
      </ContentWrapper>
      <ContentWrapper contentName="인기 검색어">
        {popularKeywords.map((popularKeyword) => {
          return (
            <PopularKeyword
              rank={popularKeyword.rank}
              keyword={popularKeyword.keyword}
              articleId={popularKeyword.articleId}
            />
          );
        })}
      </ContentWrapper>
    </s.PageTemplate>
  );
};

export default searchPage;
