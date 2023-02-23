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
      <s.ResultHeader>
        <h1>{keyword}에 대한 검색결과</h1>
      </s.ResultHeader>
      <s.EditorResultContainer>
        <h1>에디터 검색 결과</h1>
        <s.EditorProfileContainer>
          {getEditorRes.length > 0 ? (
            getEditorRes.map((editor: any) => {
              return <s.EditorProfile>에디터 정보</s.EditorProfile>;
            })
          ) : (
            <h1> 에디터 검색 결과가 없습니다.</h1>
          )}
        </s.EditorProfileContainer>
      </s.EditorResultContainer>
      <s.ArticleResultContainer>
        <h1>아티클 검색 결과</h1>
        <s.ArticleInfoContainer>
          {getArticleRes.length > 0 ? (
            getArticleRes.map((article: ArticleSearchedResult) => {
              return (
                <s.ArticleInfo>
                  <img src={article.imgUrl} />
                  <h1>{article.title}</h1>
                </s.ArticleInfo>
              );
            })
          ) : (
            <h1> 검색 결과가 없습니다..</h1>
          )}
        </s.ArticleInfoContainer>
      </s.ArticleResultContainer>
    </PageTemplate>
  );
};

export default SearchedResultPage;
