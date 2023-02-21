import SearchBar from "@pages/search/_fragments/SearchBar";
import RecentSearched from "@pages/search/_fragments/RecentSearched";
import ContentWrapper from "@components/ContentWrapper";
import PopularKeyword from "@pages/search/_fragments/PopularKeyword";
import PageTemplate from "@components/PageTemplate";
import SearchAPI from "@api/SearchAPI";
import { useEffect, useState } from "react";
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
  const [recentKeywordList, setRecentKeywordList] = useState<string[]>([]);

  useEffect(() => {
    const recentKeywords = localStorage.getItem("recentKeywords");
    console.log(JSON.parse(recentKeywords as string));
    setRecentKeywordList(JSON.parse(recentKeywords as string));
  }, []);

  return (
    <PageTemplate>
      <SearchBar />
      <ContentWrapper contentName="최근 검색어">
        <SearchedContainer>
          {recentKeywordList.map((recentKeyword) => {
            return <RecentSearched keyword={recentKeyword} />;
          })}
        </SearchedContainer>
      </ContentWrapper>
      <ContentWrapper contentName="인기 검색어">
        <SearchedContainer>
          {/* {popularKeywords.map((popularKeyword: string, index: number) => { */}
          {/*  return <PopularKeyword rank={index + 1} keyword={popularKeyword} />; */}
          {/* })} */}
        </SearchedContainer>
      </ContentWrapper>
    </PageTemplate>
  );
};

export default searchPage;
