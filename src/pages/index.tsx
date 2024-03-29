import Head from "next/head";
import ContentCard from "@components/ContentCard";
import ContentWrapper from "@components/ContentWrapper";
import React from "react";
import CardSlider from "@components/CardSlider";
import PageTemplate from "@components/PageTemplate";

import ArticleAPI from "@api/ArticleAPI";
import styled from "@emotion/styled";
import theme from "@styles/Theme";
import ContentRow from "@components/ContentRow";
import CurationAPI from "@api/CurationAPI";
import { getSession } from "next-auth/react";
import { Article } from "../types/article";

const NoneContentWrapper = styled.div`
  width: 100%;
  height: 120px;

  text-align: center;
  padding-top: 50px;

  font-size: 14px;
  color: ${theme.COLORS.LINE_GRAY};
`;

export const getServerSideProps = async (context: any) => {
  const session: any = await getSession(context);
  const SubscribeArticleList = await ArticleAPI.getSubscribeArticles(session);
  // 새로운 게시글
  const newArticleList = await ArticleAPI.getPageArticles(1, session);
  // 조회수 top5
  const popularArticleList = await ArticleAPI.getPopularArticles();
  // 표시된 큐레이션
  const checkedCuration = await CurationAPI.getCheckedCuration();
  // 첫 큐레이션이 있을 경우 표시
  const firstCurationInfo =
    checkedCuration?.length > 0 ? await CurationAPI.getCurationInfo(checkedCuration[0]) : [];

  return {
    props: {
      session,
      newArticleList,
      popularArticleList,
      checkedCuration,
      firstCurationInfo,
      SubscribeArticleList,
    },
  };
};

export default function Home(props: any) {
  const { newArticleList, popularArticleList, firstCurationInfo, SubscribeArticleList } = props;

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
            {SubscribeArticleList?.length ? (
              <CardSlider>
                {SubscribeArticleList.map(
                  (element: {
                    article: any;
                    editors: any[];
                    bookmarked: boolean;
                    liked: boolean;
                  }) => {
                    const { article, editors } = element;
                    const editorNameList = editors.map((editor) => {
                      return editor.name;
                    });
                    return (
                      <ContentCard
                        id={article.id}
                        key={`Subscribe ${article.id}${article.title}`}
                        category={article.type}
                        title={article.title}
                        authorNames={editorNameList}
                        isBookmark={article.isActive}
                        isLike={article.isLike}
                        like_count={article.like_count}
                        fileUrls={article?.fileUrls}
                      />
                    );
                  }
                )}
              </CardSlider>
            ) : (
              <NoneContentWrapper>구독하고 있는 필진이 없습니다.</NoneContentWrapper>
            )}
          </ContentWrapper>
          <ContentWrapper contentName="새로운 게시글" viewMoreLink="/article">
            {newArticleList ? (
              <CardSlider>
                {newArticleList.articles.map(
                  (element: {
                    article: any;
                    editorList: any[];
                    bookmarked: boolean;
                    liked: boolean;
                  }) => {
                    const { article, editorList, bookmarked, liked } = element;
                    const editorNameList = editorList.map((editor) => {
                      return editor.name;
                    });
                    return (
                      <ContentCard
                        id={article.id}
                        key={`new Article${article.id}${article.title}`}
                        category={article.type}
                        title={article.title}
                        authorNames={editorNameList}
                        isBookmark={bookmarked}
                        isLike={liked}
                        like_count={article.like_count}
                        fileUrls={article.fileUrls}
                      />
                    );
                  }
                )}
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
          {firstCurationInfo?.length > 0 ? (
            <ContentWrapper contentName={firstCurationInfo.title}>
              <CardSlider>
                {firstCurationInfo.list.map((article: Article) => {
                  return (
                    <ContentCard
                      id={article.id}
                      key={`curation ${article.id}${article.title}`}
                      category={article.type as string}
                      title={article.title}
                      authorNames={article.authorNames as string[]}
                      isBookmark={article.isActive as boolean}
                      isLike={article.isLike as boolean}
                      like_count={article.like_count as number}
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
