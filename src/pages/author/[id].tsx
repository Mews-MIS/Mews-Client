import React, { useState } from "react";
import AuthorIntro from "@components/AuthorIntro";
import ContentRow from "@components/ContentRow";
import PageTemplate from "@components/PageTemplate";
import ArticleAPI from "@api/ArticleAPI";
import EditorAPI from "@api/EditorAPI";
import { getSession } from "next-auth/react";
import { debounce } from "lodash";
import { Article } from "../../types/article";
import * as s from "./styles";

export const getServerSideProps = async (context: any) => {
  const session = await getSession(context);
  const editorId = context.params.id;
  const articleList = await ArticleAPI.getEditorArticles(editorId);
  const editorInfo = await EditorAPI.getEditorInfo(editorId, session);

  // const editorInfo2 = await EditorAPI.getEditorDetailInfo(editorId, session);

  return {
    props: {
      editorId,
      session,
      articleList,
      editorInfo,
    },
  };
};

export default function AuthorInfo(props: any) {
  const { editorId, articleList, editorInfo, session } = props;
  const { id, imgUrl, introduction, isSubscribed, name } = editorInfo;
  const [firstState, setFirstState] = useState<Boolean>(isSubscribed);
  const [subscribe, setSubscribe] = useState<Boolean>(isSubscribed);
  console.log(session);
  console.log(editorInfo);

  const onClickSubscribe = async () => {
    setSubscribe(!subscribe);
    const debouncedFunction = debounce(async () => {
      if (firstState === subscribe) {
        const response = await EditorAPI.postSubscribeEditor(editorId, session);
        console.log(response);
        setFirstState(!subscribe);
      }
    }, 1000);
    await setSubscribe(!subscribe);
    await debouncedFunction();
  };

  return (
    <PageTemplate>
      <s.Wrapper>
        <s.TopContainer>
          <AuthorIntro id={id} name={name} imgUrl={imgUrl} introduction={introduction} />
          <s.SubscribeBtnContainer onClick={onClickSubscribe}>
            <s.SubscribeBtn className={subscribe ? "active" : ""}>
              {subscribe ? "구독 취소" : "구독"}
            </s.SubscribeBtn>
          </s.SubscribeBtnContainer>
        </s.TopContainer>
        <s.AllPostContainer>
          <s.AllPost>작성한 글</s.AllPost>
          <s.CountPost>{articleList.articles.length}개</s.CountPost>
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
