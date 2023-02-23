import SearchAPI from "@api/SearchAPI";
import { useEffect } from "react";
import PageTemplate from "@components/PageTemplate";
import { ArticleSearchedResult } from "../../../types/article";
import * as s from "./styles";

export async function getServerSideProps({ query }: { query: any }) {
  const { keyword } = query;

  const response = await SearchAPI.getSearchResult({ keyword });
  return {
    props: {
      keyword,
      getArticleRes: response.getArticleRes,
      getEditorRes: response.getEditorRes,
    },
  };
}

interface SearchedResultPageProps {
  keyword: string;
  getArticleRes: Array<ArticleSearchedResult>;
  getEditorRes: Array<any>;
}

const SearchedResultPage = (props: SearchedResultPageProps) => {
  const { keyword, getEditorRes, getArticleRes } = props;
  useEffect(() => {
    const searchKeyword = keyword;
    let recentKeywords = JSON.parse(localStorage.getItem("recentKeywords")) || [];

    recentKeywords = recentKeywords.filter((keyword: any) => keyword !== searchKeyword);
    recentKeywords.unshift(searchKeyword);
    recentKeywords = recentKeywords.slice(0, 5);
    localStorage.setItem("recentKeywords", JSON.stringify(recentKeywords));
  }, []);

  return (
    <PageTemplate>
      <div>
        <h1>{keyword}에 대한 검색결과</h1>
      </div>
      <div>
        <h1>에디터 검색 결과</h1>
        {getEditorRes.length > 0 ? (
          getEditorRes.map((editor: any) => {
            return <h1>에디터 정보</h1>;
          })
        ) : (
          <h1> 에디터 검색 결과가 없습니다.</h1>
        )}
      </div>
      <div>
        <h1>아티클 검색 결과</h1>
        {getArticleRes.length > 0 ? (
          getArticleRes.map((article: ArticleSearchedResult) => {
            return (
              <div>
                <img src={article.imgUrl} />
                <h1>{article.title}</h1>
              </div>
            );
          })
        ) : (
          <h1> 검색 결과가 없습니다..</h1>
        )}
      </div>
    </PageTemplate>
  );
};

export default SearchedResultPage;
