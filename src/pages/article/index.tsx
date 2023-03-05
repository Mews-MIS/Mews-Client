import NewsPostCard, { NewsPostCardProps } from "@components/NewsPostCard";
import NewsPostSlider from "@components/NewsPostSlider";
import newsPost from "@pages/tmp/newsPostCards";
import React, { useEffect, useState } from "react";
// eslint-disable-next-line import/no-named-as-default
import Paging from "@components/Pagination";

import usePostByPageNumber from "@hooks/query/article/useNewArticle";
import NewsListItem from "@components/NewsListItem";
import * as s from "./styles";

const NewsPage = () => {
  const [pageNumber, setPageNumber] = useState(1); // 현재페이지
  const { data: posts, isLoading } = usePostByPageNumber(pageNumber);

  if (isLoading) {
    return <div>로딩중</div>;
  }

  console.log(posts);

  const setPage = (e: number) => {
    setPageNumber(e);
  };

  return (
    <s.Wrapper>
      <s.NewsTopContainer>
        <NewsPostSlider>
          {newsPost.slice(0, 5).map((e: NewsPostCardProps) => {
            return <NewsPostCard {...e} />;
          })}
        </NewsPostSlider>
      </s.NewsTopContainer>
      <s.NewsbottomContainer>
        <s.NewsListBox>
          {posts
            ? posts.map((element: any, index: number) => {
                return <NewsListItem key={element.id} index={index + 1} contentInfo={element} />;
              })
            : "등록된 게시물이 없습니다"}
        </s.NewsListBox>

        <Paging page={pageNumber} count={10} setPage={setPage} />
      </s.NewsbottomContainer>
    </s.Wrapper>
  );
};
export default NewsPage;
