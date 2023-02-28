import React, { useState, useEffect } from "react";
import AuthorIntro from "@components/AuthorIntro";
import ContentCard from "@components/ContentCard";
import ContentWrapper from "@components/ContentWrapper";
import CardSlider from "@components/CardSlider";
import ContentRow from "@components/ContentRow";
import infiniteArticle from "@pages/tmp/infiniteArticle";
import PageTemplate from "@components/PageTemplate";
import ArticleAPI from "@api/ArticleAPI";
import EditorAPI from "@api/EditorAPI";
import { Article } from "../../types/article";
import * as s from "./styles";

export const getServerSideProps = async (context: any) => {
  const editorId = context.params.id;
  const articleList = await ArticleAPI.getEditorArticles(editorId);
  const editorInfo = await EditorAPI.getEditorInfo(editorId);

  return {
    props: {
      articleList,
      editorInfo,
    },
  };
};

export default function AuthorInfo(props: any) {
  const [subscribe, setSubscribe] = useState<Boolean>(false);
  const { articleList, editorInfo } = props;

  const onClickSubscribe = () => {
    setSubscribe(!subscribe);
  };

  return (
    <PageTemplate>
      <s.Wrapper>
        <s.TopContainer>
          <AuthorIntro
            id={editorInfo.id}
            name={editorInfo.name}
            imgUrl={editorInfo.imgUrl}
            introduction={editorInfo.introduction}
          />
          <s.SubscribeBtnContainer onClick={onClickSubscribe}>
            <s.SubscribeBtn className={subscribe ? "active" : ""}>
              {subscribe ? "구독 취소" : "구독"}
            </s.SubscribeBtn>
          </s.SubscribeBtnContainer>
        </s.TopContainer>
        <s.AllPostContainer>
          <s.AllPost>작성한 글</s.AllPost>
          <s.CountPost>{infiniteArticle.length}개</s.CountPost>
        </s.AllPostContainer>
        <s.BottomContainer>
          {articleList.articles.length > 0
            ? articleList.articles.map((article: Article, index: number) => (
                <ContentRow
                  index={index + 1}
                  key={article.id}
                  contentInfo={{
                    ...article,
                  }}
                />
              ))
            : "게시글이 없습니다."}
        </s.BottomContainer>
      </s.Wrapper>
    </PageTemplate>
  );
}
