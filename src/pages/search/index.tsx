import SearchBar from "@pages/search/_fragments/SearchBar";
import RecentSearched from "@pages/search/_fragments/RecentSearched";
import ContentWrapper from "@components/ContentWrapper";
import { recentKeywords } from "@pages/search/data";
import PopularKeyword from "@pages/search/_fragments/PopularKeyword";
import PageTemplate from "@components/PageTemplate";
import SearchAPI from "@api/SearchAPI";
import { SearchedContainer } from "./styles";

export async function getServerSideProps() {
  const response = await SearchAPI.getPopularResult();
  return {
    props: {
      popularKeywords: response,
    },
  };
}
const searchPage = (props: any) => {
  const { popularKeywords } = props;
  console.log(popularKeywords);
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
          {popularKeywords.map((popularKeyword: string, index: number) => {
            return <PopularKeyword rank={index + 1} keyword={popularKeyword} />;
          })}
        </SearchedContainer>
      </ContentWrapper>
    </PageTemplate>
  );
};

export default searchPage;
