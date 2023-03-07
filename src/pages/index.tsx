import Head from "next/head";
import ContentCard from "@components/ContentCard";
import ContentWrapper from "@components/ContentWrapper";
import React from "react";
import CardSlider from "@components/CardSlider";
import mySubscribeArticle from "@pages/tmp/mySubscribeArticle";
import PageTemplate from "@components/PageTemplate";

import ArticleAPI from "@api/ArticleAPI";
import styled from "@emotion/styled";
import theme from "@styles/Theme";
import ContentRow from "@components/ContentRow";
import CurationAPI from "@api/CurationAPI";
import { Article } from "../types/article";

const NoneContentWrapper = styled.div`
  width: 100%;
  height: 120px;

  text-align: center;
  padding-top: 50px;

  font-size: 14px;
  color: ${theme.COLORS.LINE_GRAY};
`;

export const getServerSideProps = async () => {
  const newArticleList = await ArticleAPI.getPageArticles({ page: 1 });
  const popularArticleList = await ArticleAPI.getPopularArticles();
  const checkedCuration = await CurationAPI.getCheckedCuration();
  const firstCurationInfo =
    checkedCuration.length > 0 ? await CurationAPI.getCurationInfo(checkedCuration[0]) : [];

  return {
    props: {
      newArticleList,
      popularArticleList,
      checkedCuration,
      firstCurationInfo,
    },
  };
};

export default function Home(props: any) {
  const { newArticleList, popularArticleList, firstCurationInfo } = props;
  console.log(newArticleList);

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
          <ContentWrapper contentName="내가 구독하고 있는 게시글">
            {mySubscribeArticle.length ? (
              <CardSlider>
                {mySubscribeArticle.map((element: any) => {
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
          <ContentWrapper contentName="새로운 게시글" viewMoreLink="/article">
            {newArticleList ? (
              <CardSlider>
                {newArticleList.articles.map((element: Article) => {
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
            {popularArticleList?.length
              ? popularArticleList.map((element: any, index: number) => {
                  return (
                    <ContentRow
                      key={`rank${element.id}${element.title}`}
                      index={index + 1}
                      contentInfo={element}
                    />
                  );
                })
              : "새로운 게시글이 없습니다."}
          </ContentWrapper>
          {firstCurationInfo.length > 0 ? (
            <ContentWrapper contentName={firstCurationInfo.title}>
              <CardSlider>
                {firstCurationInfo.list.map((article: Article) => {
                  return (
                    <ContentCard
                      key={`curation ${article.id}${article.title}`}
                      category={article.type}
                      title={article.title}
                      authorNames={article.authorNames}
                      isActive={article.isActive}
                      isLike={article.isLike}
                      like_count={article.like_count}
                    />
                  );
                })}
              </CardSlider>
            </ContentWrapper>
          ) : null}
        </PageTemplate>
      </main>
    </>
  );
}
