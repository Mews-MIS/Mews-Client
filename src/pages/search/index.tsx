import SearchBar from "@pages/search/_fragments/SearchBar";
import RecentSearched from "@pages/search/_fragments/RecentSearched";
import ContentWrapper from "@components/ContentWrapper";
import { popularKeywords, recentKeywords } from "@pages/search/data";
import PopularKeyword from "@pages/search/_fragments/PopularKeyword";
import { PageTemplate, SearchedContainer } from "./styles";

const searchPage = () => {
  return (
    <PageTemplate>
      <SearchBar />
      <ContentWrapper contentName="최근 검색어">
        <SearchedContainer>
          {recentKeywords.map((recentKeyword) => {
            return (
              <RecentSearched keyword={recentKeyword.keyword} articleId={recentKeyword.articleId} />
            );
          })}
        </SearchedContainer>
      </ContentWrapper>
      <ContentWrapper contentName="인기 검색어">
        <SearchedContainer>
          {popularKeywords.map((popularKeyword) => {
            return (
              <PopularKeyword
                rank={popularKeyword.rank}
                keyword={popularKeyword.keyword}
                articleId={popularKeyword.articleId}
              />
            );
          })}
        </SearchedContainer>
      </ContentWrapper>
    </PageTemplate>
  );
};

export default searchPage;
