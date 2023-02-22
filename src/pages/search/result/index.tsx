import SearchAPI from "@api/SearchAPI";
import { useEffect } from "react";
import PageTemplate from "@components/PageTemplate";

export async function getServerSideProps({ query }: { query: any }) {
  const { keyword } = query;

  const response = await SearchAPI.getSearchResult({ keyword });
  console.log(response);
  return {
    props: {
      keyword,
      // getArticleRes: response.getArticleRes,
      // getEditorRes: response.getEditorRes,
    },
  };
}

const SearchedResultPage = (props: any) => {
  useEffect(() => {
    const searchKeyword = props.keyword;
    let recentKeywords = JSON.parse(localStorage.getItem("recentKeywords")) || [];

    recentKeywords = recentKeywords.filter((keyword: any) => keyword !== searchKeyword);
    recentKeywords.unshift(searchKeyword);
    recentKeywords = recentKeywords.slice(0, 5);
    localStorage.setItem("recentKeywords", JSON.stringify(recentKeywords));
  });

  return (
    <PageTemplate>
      <h1>d</h1>
    </PageTemplate>
  );
};

export default SearchedResultPage;
