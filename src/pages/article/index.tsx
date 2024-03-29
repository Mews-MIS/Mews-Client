import NewsPostCard, { NewsPostCardProps } from "@components/NewsPostCard";
import NewsPostSlider from "@components/NewsPostSlider";
import React, { useState, useEffect } from "react";
// eslint-disable-next-line import/no-named-as-default
import Paging from "@components/Pagination";

import usePostByPageNumber from "@hooks/query/article/useNewArticle";
import NewsListItem from "@components/NewsListItem";
import ArticleAPI from "@api/ArticleAPI";

import * as s from "@styles/PageStyles/article/styles";

const NewsPage = () => {
  const [pageNumber, setPageNumber] = useState(1); // 현재페이지
  const [article, setArticle] = useState<NewsPostCardProps[] | null>([]);
  const { data, isLoading } = usePostByPageNumber(pageNumber);
  const [totalItemsCount, setTotalItemsCount] = useState<number>(0);
  const itemsCountPerPage = 10;

  useEffect(() => {
    ArticleAPI.getPageArticles(1, {}).then((articleData: any) => {
      setArticle(articleData.articles);
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      data && setTotalItemsCount(Math.ceil(data.pageCount * itemsCountPerPage));
    });
  }, [data]);

  if (isLoading) {
    return <h1>로딩중</h1>;
  }

  const setPage = (e: number) => {
    setPageNumber(e);
  };

  return (
    <s.Wrapper>
      <s.NewsTopContainer>
        <NewsPostSlider>
          {article &&
            article.slice(0, 5).map((e: NewsPostCardProps) => {
              // eslint-disable-next-line react/jsx-props-no-spreading
              return <NewsPostCard key={`article${e?.article.id}`} {...e.article} />;
            })}
        </NewsPostSlider>
      </s.NewsTopContainer>
      <s.NewsbottomContainer>
        <s.NewsListBox>
          {data?.articles
            ? data.articles.map((element: any, index: number) => {
                const articleInfo = element.article;
                return (
                  <NewsListItem
                    key={`newItem${articleInfo.id}`}
                    index={index + 1}
                    contentInfo={articleInfo}
                  />
                );
              })
            : "등록된 게시물이 없습니다"}
        </s.NewsListBox>

        <Paging page={pageNumber} count={totalItemsCount} setPage={setPage} />
      </s.NewsbottomContainer>
    </s.Wrapper>
  );
};

export default NewsPage;
