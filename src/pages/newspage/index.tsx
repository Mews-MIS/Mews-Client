import NewsListItem from "@components/NewListItem";
import NewsList from "@pages/tmp/newslist";
import React, { useEffect, useState } from "react";
import { NewsListIcon } from "src/types/article";
import Pagination from "@components/Pagination";
import * as s from "./styles";

const NewsPage = () => {
  const [lists, setLists] = useState<NewsListIcon[]>([]);
  const [limit, setLimit] = useState(10); // 한 페이지에 보여줄 데이터 개수
  const [page, setPage] = useState(1); // 페이지 초기값은 1페이지
  const [counts, setCounts] = useState(1); // 데이터의 총 개수를 setCounts에 저장해서 사용
  useEffect(() => {
    setLimit(10);
    setCounts(NewsList.length);
  }, []);
  const [blockNum, setBlockNum] = useState(0); // 한페이지에 보여줄 페이지 네이션 개수를 block으로 지정하는 state

  return (
    <s.Wrapper>
      <s.NewsbottomContainer>
        <s.NewsListBox>
          {NewsList.length
            ? NewsList.slice(0, 10).map((element: NewsListIcon, index: number) => {
                return <NewsListItem key={element.id} index={index + 1} contentInfo={element} />;
              })
            : "등록된 게시물이 없습니다"}
        </s.NewsListBox>

        <div>
          <Pagination
            limit={limit}
            page={page}
            setPage={setPage}
            blockNum={blockNum}
            setBlockNum={setBlockNum}
            counts={counts}
          />
        </div>
      </s.NewsbottomContainer>
    </s.Wrapper>
  );
};
export default NewsPage;
