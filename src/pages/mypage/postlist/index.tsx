import React from "react";
import { useState, useEffect } from "react";
import AuthorIntro from "@components/AuthorIntro";
import ContentWrapper from "@components/ContentWrapper";
import ContentRow from "@components/ContentRow";
import myBookmarkArticle from "@pages/tmp/myBookmarkArticle";
import { Article } from "../../../types/article";
import * as s from "./styles";
import { tmpImageURL } from "@pages/tmp/tmpImageURL";
import authors from "@pages/tmp/authors";

// 추후 userName은 props로 받아오는것으로 수정되어야 함
interface textSetInterface {
  bookmarkPost: string;
  likePost: string;
  userName: Array<string>;
}

export default function PostList() {
  const [array, setArray] = useState<Article[]>([]);

  //api로 받아오는 로그인 유저 정보,페이지 정보(더미데이터)
  const userId = "한수정";
  const isBookmark = false;

  useEffect(() => {
    getArticleList();
  }, []);

  const textSet: textSetInterface = {
    bookmarkPost: " 북마크한 글",
    likePost: " 좋아요를 누른 글",
    userName: ["내가", "님이"],
  };

  //임시 데이터 불러옴
  const getArticleList = () => {
    setArray([...array, ...myBookmarkArticle]);
  };

  return (
    <div>
      <s.Wrapper>
        <s.TopContainer>
          <AuthorIntro
            authorName={authors[0].authorName}
            intro={authors[0].intro}
            imageURL={tmpImageURL}
          />
        </s.TopContainer>
        <s.AllPostContainer>
          <s.AllPost>
            {(userId === authors[0].authorName
              ? textSet.userName[0]
              : authors[0].authorName + textSet.userName[1]) +
              (isBookmark ? textSet.bookmarkPost : textSet.likePost)}
          </s.AllPost>
          <s.CountPost>{myBookmarkArticle.length}개</s.CountPost>
        </s.AllPostContainer>
        <s.BottomContainer>
          <ContentWrapper
            contentName={
              (userId === authors[0].authorName
                ? textSet.userName[0]
                : authors[0].authorName + textSet.userName[1]) +
              (isBookmark ? textSet.bookmarkPost : textSet.likePost)
            }
          >
            {myBookmarkArticle.length
              ? array.map((e: Article, index: number) => (
                  <ContentRow
                    index={index + 1}
                    key={index + 1}
                    contentInfo={{
                      ...e,
                    }}
                  />
                ))
              : "게시글이 없습니다."}
            <button onClick={() => getArticleList()}>더 불러오기</button>
          </ContentWrapper>
        </s.BottomContainer>
      </s.Wrapper>
    </div>
  );
}
