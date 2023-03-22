import SearchAPI from "@api/SearchAPI";
import { useEffect } from "react";
import PageTemplate from "@components/PageTemplate";
import SearchBar from "@pages/search/_fragments/SearchBar";
import EditorProfile from "@pages/search/result/_fragments/EditorProfile";
import Link from "next/link";
import CardSlider from "@components/CardSlider";
import { ArticleSearchedResult } from "../../../types/article";
import * as s from "./styles";
import { Editor } from "../../../types/editor";

export async function getServerSideProps({ query }: { query: any }) {
  const { keyword } = query;

  const response = await SearchAPI.getSearchResult({ keyword });
  return {
    props: {
      keyword,
      getArticleRes: response?.getArticleRes,
      getEditorRes: response?.getEditorRes,
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
  console.log(getEditorRes);
  useEffect(() => {
    const searchKeyword = keyword;
    let recentKeywords = JSON.parse(localStorage.getItem("recentKeywords")) || [];

    // eslint-disable-next-line @typescript-eslint/no-shadow
    recentKeywords = recentKeywords.filter((keyword: any) => keyword !== searchKeyword);
    recentKeywords.unshift(searchKeyword);
    recentKeywords = recentKeywords.slice(0, 5);
    localStorage.setItem("recentKeywords", JSON.stringify(recentKeywords));
  }, []);

  return (
    <PageTemplate>
      <s.Wrapper>
        <SearchBar />
      </s.Wrapper>
      <s.Wrapper>
        <s.ResultContainer>
          <s.ResultHeader>
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            <span>'{keyword}' </span>에 대한 검색결과
          </s.ResultHeader>
          <s.EditorResultContainer>
            <h1>에디터 검색 결과</h1>
            <s.EditorProfileContainer>
              <CardSlider>
                {getEditorRes.length > 0 ? (
                  getEditorRes.map((editor: Editor) => {
                    return (
                      <EditorProfile id={editor.id} name={editor.name} imgUrl={editor.imgUrl} />
                    );
                  })
                ) : (
                  <span> 에디터 검색 결과가 없습니다.</span>
                )}
              </CardSlider>
            </s.EditorProfileContainer>
          </s.EditorResultContainer>
          <s.ArticleResultContainer>
            <h1>아티클 검색 결과</h1>
            <s.ArticleInfoContainer>
              {getArticleRes.length > 0 ? (
                getArticleRes.map((article: ArticleSearchedResult) => {
                  return (
                    <Link href={`/article/${article.id}`}>
                      <s.ArticleInfo>
                        <img src={article.imgUrl} alt="기사 썸네일" />
                        <s.ArticleTitle>{article.title}</s.ArticleTitle>
                      </s.ArticleInfo>
                    </Link>
                  );
                })
              ) : (
                <span> 검색 결과가 없습니다.</span>
              )}
            </s.ArticleInfoContainer>
          </s.ArticleResultContainer>
        </s.ResultContainer>
      </s.Wrapper>
    </PageTemplate>
  );
};

export default SearchedResultPage;
