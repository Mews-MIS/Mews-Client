import React from "react";
import { useState } from "react";
import TobNavBar from "@components/TopNavBar";
import AuthorIntro from "@components/AuthorIntro";
import ContentCard from "@components/ContentCard";
import ContentWrapper from "@components/ContentWrapper";
import CardSlider from "@components/CardSlider";
import mySubscribeArticle from "@pages/tmp/mySubscribeArticle";
import { Article, CurationType } from "../../types/article";
import * as s from "./styles";

export default function AuthorInfo() {
  const [subscribe, setSubscribe] = useState<Boolean>(false);
  const authorName = "한수정";
  const countPost = 12;
  const onClickSubscribe = () => {
    setSubscribe(!subscribe);
  };

  return (
    <div>
      <s.Wrapper>
        <TobNavBar />
        <s.TopContainer>
          <AuthorIntro />
          <s.SubscribeBtnContainer onClick={onClickSubscribe}>
            <s.SubscribeBtn className={subscribe ? "active" : ""}>
              {subscribe ? "구독 취소" : "구독"}
            </s.SubscribeBtn>
          </s.SubscribeBtnContainer>
        </s.TopContainer>
      </s.Wrapper>
      <s.BottomContainer>
        <ContentWrapper contentName={authorName}>
          <CardSlider>
            {mySubscribeArticle.map((e: Article) => {
              return (
                <ContentCard
                  key={e.id}
                  category={e.category}
                  title={e.title}
                  authorNames={e.authorNames}
                  isActive={e.isActive}
                  isLike={e.isLike}
                  likeNum={e.likeNum}
                />
              );
            })}
          </CardSlider>
        </ContentWrapper>
      </s.BottomContainer>
    </div>
  );
}
