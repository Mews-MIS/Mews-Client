import Head from "next/head";
import ContentCard from "@components/ContentCard";
import ContentWrapper from "@components/ContentWrapper";
import React, { useEffect } from "react";
import CardSlider from "@components/CardSlider";
import mySubscribeArticle from "@pages/tmp/mySubscribeArticle";

import topView from "@pages/tmp/topView";
import ContentRow from "@components/ContentRow";
import Curations from "@pages/tmp/Curations";
import PageTemplate from "@components/PageTemplate";

import ArticleAPI from "@api/ArticleAPI";
import styled from "@emotion/styled";
import theme from "@styles/Theme";
import { Article, CurationType } from "../types/article";

const NoneContentWrapper = styled.div`
  width: 100%;
  height: 120px;

  text-align: center;
  padding-top: 50px;

  font-size: 14px;
  color: ${theme.COLORS.LINE_GRAY};
`;

export const getServerSideProps = async () => {
  const response = await ArticleAPI.getPageArticles({ page: 1 });
  return {
    props: {
      newArticleList: response,
    },
  };
};

export default function Home(props: any) {
  const curation: CurationType = Curations[0];
  const { newArticleList } = props;

  console.log(newArticleList);

  useEffect(() => {
    // api 호출 .
  }, []);

  return (
    <>
      <Head>
        <title>Mews</title>
        <meta name="description" content="동국대학교 뉴스 소모임" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Mews" />
        <meta property="og:type" content="website" />
      </Head>
      <main>
        <PageTemplate>
          <ContentWrapper contentName="내가 구독하고 있는 게시글" viewMoreLink="/link">
            {mySubscribeArticle.length ? (
              <CardSlider>
                {mySubscribeArticle.map((element: Article, index: number) => {
                  return (
                    <ContentCard
                      key={`Subscribe ${element.id}${element.title}`}
                      category={element.type}
                      title={element.title}
                      authorNames={element.authorNames}
                      isActive={element.isActive}
                      isLike={element.isLike}
                      like_count={element.like_count}
                      fileUrls={element?.fileUrls}
                    />
                  );
                })}
              </CardSlider>
            ) : (
              <NoneContentWrapper>구독하고 있는 필진이 없습니다.</NoneContentWrapper>
            )}
          </ContentWrapper>

          <ContentWrapper contentName="새로운 게시글" viewMoreLink="/newArticle">
            {newArticleList ? (
              <CardSlider>
                {newArticleList.map((element: Article) => {
                  return (
                    <ContentCard
                      key={`new Article${element.id}${element.title}`}
                      category={element.type}
                      title={element.title}
                      authorNames={["이정우", "김현제"]}
                      isActive={element.isActive}
                      isLike={element.isLike}
                      like_count={element.like_count}
                      fileUrls={element.fileUrls}
                    />
                  );
                })}
              </CardSlider>
            ) : (
              <NoneContentWrapper>새로운 게시글이 없습니다.</NoneContentWrapper>
            )}
          </ContentWrapper>

          <ContentWrapper contentName="조회수 top5">
            {/* {topView.length */}
            {/*  ? topView.map((element: Article, index) => { */}
            {/*      return ( */}
            {/*        <ContentRow */}
            {/*          key={`rank${index}${element.title}`} */}
            {/*          index={index + 1} */}
            {/*          contentInfo={element} */}
            {/*        /> */}
            {/*      ); */}
            {/*    }) */}
            {/*  : "새로운 게시글이 없습니다."} */}
          </ContentWrapper>

          <ContentWrapper contentName={curation.title} viewMoreLink={`/curation/${curation.title}`}>
            <CardSlider>
              {curation.content.map((element: Article) => {
                return (
                  <ContentCard
                    key={`curation ${element.id}${element.title}`}
                    category={element.type}
                    title={element.title}
                    authorNames={element.authorNames}
                    isActive={element.isActive}
                    isLike={element.isLike}
                    like_count={element.like_count}
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
