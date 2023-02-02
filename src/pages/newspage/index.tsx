import NewsListItem from "@components/NewListItem";
import NewsList from "@pages/tmp/newslist";
import React from "react";
import { NewsListIcon } from "src/types/article";
import * as s from "./styles";

const NewsPage = () => {
  return (
    <s.Wrapper>
      <p>뉴스 리스트 예시</p>
      {NewsList.length
        ? NewsList.map((element: NewsListIcon) => {
            return <NewsListItem key={element.id} contentInfo={element} />;
          })
        : "게시물이 없습니다"}
    </s.Wrapper>
  );
};
export default NewsPage;
