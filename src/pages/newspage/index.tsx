import NewsListItem from "@components/NewListItem";
import NewsList from "@pages/tmp/newslist";
import React, { useEffect, useState } from "react";
import { NewsListIcon } from "src/types/article";
// eslint-disable-next-line import/no-named-as-default
import Paging from "@components/Pagination";

import * as s from "./styles";

const NewsPage = () => {
  const [items, setItems] = useState<NewsListIcon[]>([] as any); // 리스트에 나타낼 아이템
  const [count, setCount] = useState(0); // 아이템 총 개수
  const [currentpage, setCurrentpage] = useState(1); // 현재페이지
  const [postPerPage] = useState(10); // 페이지당 아이템 개수

  const [indexOfLastPost, setIndexOfLastPost] = useState(0);
  const [indexOfFirstPost, setIndexOfFirstPost] = useState(0);
  const [currentPosts, setCurrentPosts] = useState(0);

  useEffect(() => {
    setItems(NewsList);
    setCount(NewsList.length);
    setIndexOfLastPost(currentpage * postPerPage);
    setIndexOfFirstPost(indexOfLastPost - postPerPage);
    setCurrentPosts(NewsList.slice(indexOfFirstPost, indexOfLastPost));
  }, [currentpage, indexOfFirstPost, indexOfLastPost, items, postPerPage]);

  const setPage = (e) => {
    setCurrentpage(e);
  };

  return (
    <s.Wrapper>
      <s.NewsbottomContainer>
        <s.NewsListBox>
          {currentPosts && items.length > 0
            ? currentPosts.map((element: NewsListIcon, index: number) => {
                return <NewsListItem key={element.id} index={index + 1} contentInfo={element} />;
              })
            : "등록된 게시물이 없습니다"}
        </s.NewsListBox>

        <Paging page={currentpage} count={count} setPage={setPage} />
      </s.NewsbottomContainer>
    </s.Wrapper>
  );
};
export default NewsPage;
