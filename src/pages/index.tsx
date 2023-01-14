import Head from "next/head";
import ContentCard, { ContentCardProps } from "@components/ContentCard";
import ContentWrapper from "@components/ContentWrapper";
import React from "react";
import CardSlider from "@components/CardSlider";
import { Article } from "../types/article";

export default function Home() {
  // 더미 데이터
  const mySubscribeArticle = [
    {
      id: 1,
      category: "경정인을 소개합니다.",
      title: "재직자편 - 최시운",
      authorNames: ["이정우", "김현제"],
      isActive: false,
      isLike: false,
      likeNum: 132,
    },
    {
      id: 2,
      category: "경정인2을 소개합니다.",
      title: "재직자편 - 최시운2",
      authorNames: ["이정우2", "김현제2"],
      isActive: true,
      isLike: false,
      likeNum: 1312,
    },
  ];
  return (
    <>
      <Head>
        <title>Mews</title>
        <meta name="description" content="동국대학교 뉴스 소모임" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Mews" />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <ContentWrapper contentName="내가 구독하고 있는 게시글" viewMoreLink="/link">
          {mySubscribeArticle.length ? (
            <CardSlider>
              {mySubscribeArticle.map((element: Article) => {
                return (
                  <ContentCard
                    key={element.id}
                    category={element.category}
                    title={element.title}
                    authorNames={element.authorNames}
                    isActive={element.isActive}
                    isLike={element.isLike}
                    likeNum={element.likeNum}
                  />
                );
              })}
            </CardSlider>
          ) : (
            "구독하고 있는 필진이 없습니다."
          )}
        </ContentWrapper>
      </main>
    </>
  );
}
