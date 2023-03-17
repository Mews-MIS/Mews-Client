import NewsPostCard, { NewsPostCardProps } from "@components/NewsPostCard";
import NewsPostSlider from "@components/NewsPostSlider";
import React, { useState, useEffect } from "react";
// eslint-disable-next-line import/no-named-as-default
import Pagination from "react-js-pagination";

import usePostByPageNumber from "@hooks/query/article/useNewArticle";
import NewsListItem from "@components/NewsListItem";
import ArticleAPI from "@api/ArticleAPI";

import * as s from "./styles";

const NewsPage = () => {
  const [page, setPage] = useState<number>(1);
  const [articles, setArticles] = useState([]);
  const [totalItemsCount, setTotalItemsCount] = useState<number>(0);
  const itemsCountPerPage = 10;
  const [article, setArticle] = useState<NewsPostCardProps[] | null>([]);
  useEffect(() => {
    ArticleAPI.getPageArticles({ page: 1 }).then((data) => {
      setArticle(data.articles);
      setArticles(data.articles);
      setTotalItemsCount(Math.ceil(data.pageCount * itemsCountPerPage));
    });
  }, [page]);

  const onclickPageChange = (pageNumber: number) => {
    setPage(pageNumber);
  };

  return (
    <s.Wrapper>
      <s.NewsTopContainer>
        <NewsPostSlider>
          {article &&
            article.slice(0, 5).map((e: NewsPostCardProps) => {
              return <NewsPostCard {...e} />;
            })}
        </NewsPostSlider>
      </s.NewsTopContainer>
      <s.NewsbottomContainer>
        <s.NewsListBox>
          {articles
            ? articles.map((index: number) => {
                return <NewsListItem key={index} index={index + 1} contentInfo={element} />;
              })
            : "등록된 게시물이 없습니다"}
        </s.NewsListBox>

        <s.PaginationBox>
          <Pagination
            activePage={page}
            itemsCountPerPage={itemsCountPerPage}
            totalItemsCount={totalItemsCount}
            pageRangeDisplayed={5}
            onChange={onclickPageChange}
          />
        </s.PaginationBox>
      </s.NewsbottomContainer>
    </s.Wrapper>
  );
};

// 100 pageCount = Math.ceil(articleSum/10)
export default NewsPage;
