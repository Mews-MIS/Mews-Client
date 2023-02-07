import Head from "next/head";
import ContentCard from "@components/ContentCard";
import ContentWrapper from "@components/ContentWrapper";
import React from "react";
import CardSlider from "@components/CardSlider";
import mySubscribeArticle from "@pages/tmp/mySubscribeArticle";

import topView from "@pages/tmp/topView";
import ContentRow from "@components/ContentRow";
import newArticle from "@pages/tmp/newArticle";
import Curations from "@pages/tmp/Curations";
import PageTemplate from "@components/PageTemplate";
import { Article, CurationType } from "../types/article";

export default function Home() {
  const curation: CurationType = Curations[0];
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
        <PageTemplate>
          <ContentWrapper contentName="내가 구독하고 있는 게시글" viewMoreLink="/link">
            {mySubscribeArticle.length ? (
              <CardSlider>
                {mySubscribeArticle.map((element: Article) => {
                  return (
                    <ContentCard
                      key={`Subscribe ${element.id}${element.title}`}
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

          <ContentWrapper contentName="새로운 게시글" viewMoreLink="/newArticle">
            {newArticle.length ? (
              <CardSlider>
                {newArticle.map((element: Article) => {
                  return (
                    <ContentCard
                      key={`new Article${element.id}${element.title}`}
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
              "새로운 게시글이 없습니다."
            )}
          </ContentWrapper>

          <ContentWrapper contentName="조회수 top5">
            {topView.length
              ? topView.map((element: Article, index) => {
                  return <ContentRow key={`rank${element.id}${element.title}`} index={index + 1} contentInfo={element} />;
                })
              : "새로운 게시글이 없습니다."}
          </ContentWrapper>

          <ContentWrapper contentName={curation.title} viewMoreLink={`/curation/${curation.title}`}>
            <CardSlider>
              {curation.content.map((element: Article) => {
                return (
                  <ContentCard
                    key={`curation ${element.id}${element.title}`}
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
          </ContentWrapper>
        </PageTemplate>
      </main>
    </>
  );
}
