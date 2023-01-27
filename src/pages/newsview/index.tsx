import axios from "axios";
import AuthorIntro from "@components/AuthorIntro";
import React, { useEffect, useState } from "react";
import * as s from "./styles";
export interface NewsViewProps {
  category: string;
  title: string;
  created_at: Date;
  content: string;
  isActive: boolean;
  isLike: boolean;
  isLink: boolean;
}
const NewsView = () => {
  /* 더미데이터 */
  const [news, setNews] = useState<News>({
    category: "경정인을 소개합니다.",
    title: "뮤즈의 제작기 들어보실래요? \n -프론트엔드 최시운 편",
    created_at: "2023-01-25",
    content:
      "코로나19로 인한 비대면 대학 생활로 인해, 3년 만에 대동전이 마지막이라 모두가 기억도 가물가물하고 준비하는 데 어려움이 있었을 텐데 여럿이 힘을 합쳐 재밌는 축제를 만들 수 있었던 것 같습니다. (식품산업공학과 19학번 김00)",
  });

  useEffect(() => {
    /*   getNews(); */
  }, []);

  return (
    <s.Wrapper>
      <s.newsviewContainer>
        <s.newsContainer>
          <s.detail>
            <s.category>{news?.category}</s.category>
            <s.title>{news?.title}</s.title>
            <s.date>{news?.created_at}</s.date>
          </s.detail>
          {/* 뉴스 이미지 들어갈 자리 */}
          <s.newsImageBox />
          <s.contentBox>
            <s.content>{news?.content}</s.content>
          </s.contentBox>
          <AuthorIntro />
        </s.newsContainer>
        {/* 댓글 */}
      </s.newsviewContainer>
    </s.Wrapper>
  );
};

export default NewsView;
