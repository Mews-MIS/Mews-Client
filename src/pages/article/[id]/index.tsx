import Link from "next/link";
import React, { useEffect, useState } from "react";
import AuthorIntro from "@components/AuthorIntro";
import NewsViewBookmarkBtn from "@public/button/NewsViewBookmarkBtn.svg";
import NewsViewLikeBtn from "@public/button/NewsViewLikeBtn.svg";
import LinkBtn from "@public/button/LinkBtn.svg";
import Comment from "@components/Comment";
import Swal from "sweetalert2";
import * as s from "./styles";

export interface NewsViewProps {
  isLike: boolean;
  isActive: boolean;
}
const NewsView = ({ isLike, isActive }: NewsViewProps) => {
  /* 더미데이터 */
  // 추후에 사진도 추가되어야 함
  const [news, setNews] = useState<News>({
    category: "경정인을 소개합니다.",
    title: "뮤즈의 제작기 들어보실래요? \n -프론트엔드 최시운 편",
    created_at: "2023-01-25",
    content:
      "코로나19로 인한 비대면 대학 생활로 인해, 3년 만에 대동전이 마지막이라 모두가 기억도 가물가물하고 준비하는 데 어려움이 있었을 텐데 여럿이 힘을 합쳐 재밌는 축제를 만들 수 있었던 것 같습니다. (식품산업공학과 19학번 김00)",
  });

  const [like, setLike] = useState<Boolean>(isLike);
  const [active, setActive] = useState<Boolean>(isActive);

  const onClickLike = () => {
    setLike(!like);
  };
  const onClickBookmark = () => {
    setActive(!active);
  };
  const copyURL = () => {
    const currentUrl = window.document.location.href;
    const url = document.createElement("textarea");
    document.body.appendChild(url);
    url.value = currentUrl;
    url.select();
    document.execCommand("copy");
    document.body.removeChild(url);

    Swal.fire({
      customClass: "swal",
      title: "링크가 복사되었습니다.",
      icon: "success",
      showConfirmButton: false,
      heightAuto: false,
      timer: 1500,
      width: 200,
    });
  };

  useEffect(() => {
    /*   getNews(); */
  }, []);

  return (
    <s.Wrapper>
      <s.newsviewContainer>
        <s.newsContainer>
          <s.newsTitleBox>
            <s.category>{news?.category}</s.category>
            <s.title>{news?.title}</s.title>
            <s.date>{news?.created_at}</s.date>
          </s.newsTitleBox>
          {/* 뉴스 이미지 들어갈 자리 */}
          <s.newsImageBox />
          <s.contentBox>
            <s.content>{news?.content}</s.content>
          </s.contentBox>

          <s.AuthorIntroContainer>
            <Link href="/">
              <AuthorIntro authorName="이정우" intro="꿈은 없고 놀고만 싶습니다." imageURL="" />
            </Link>
          </s.AuthorIntroContainer>

          <s.BottomContainer>
            <s.BtnContainer>
              <s.LikeIconContainer onClick={onClickLike} className={like ? "active" : "inactive"}>
                <NewsViewLikeBtn />
              </s.LikeIconContainer>
              <s.BookmarkIconContainer
                onClick={onClickBookmark}
                className={active ? "active" : "inactive"}
              >
                <NewsViewBookmarkBtn />
              </s.BookmarkIconContainer>
              <s.LinkIconContainer>
                <LinkBtn onClick={copyURL} />
              </s.LinkIconContainer>
            </s.BtnContainer>
          </s.BottomContainer>
        </s.newsContainer>
        <Comment commentArray={undefined} />
      </s.newsviewContainer>
    </s.Wrapper>
  );
};

export default NewsView;
