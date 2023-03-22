import Link from "next/link";
import NewsViewBookmarkBtn from "@public/button/NewsViewBookmarkBtn.svg";
import LinkBtn from "@public/button/LinkBtn.svg";
import Swal from "sweetalert2";
import ArticleAPI from "@api/ArticleAPI";
import { dehydrate, QueryClient, useQuery } from "react-query";
import useArticleById from "@hooks/query/article/useArticleById";
import AuthorIntro, { IAuthorProps } from "@components/AuthorIntro";
import TurndownService from "turndown";
import MarkdownIt from "markdown-it";
import EditorAPI from "@api/EditorAPI";
import { Article } from "../../../types/article";
import * as s from "./styles";
import { useEffect, useState } from "react";

export interface NewsViewProps {
  isLike: boolean;
  isActive: boolean;
}

export const getServerSideProps = async (context: any) => {
  const { id } = context.query;
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(["article", id], async () => {
    const response = await ArticleAPI.getArticle(id);
    const data: Article = response;
    return data;
  });

  const articleInfo = queryClient.getQueryData(["article", id]);
  console.log("dfgd", articleInfo);
  const editorNumsList = articleInfo ? articleInfo.editorIdList : [];

  const editorInfoList = await editorNumsList.reduce(
    async (acc: Promise<IAuthorProps[]>, cur: number) => {
      const getUserInfo = async () => {
        const info = await EditorAPI.getEditorInfo(cur);
        return info;
      };
      const userInfo = await getUserInfo();
      const result = await acc;
      result.push(userInfo);
      return result;
    },
    Promise.resolve([])
  );

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
      id,
      editorInfoList,
      // editorInfo,
    },
  };
};

const NewsView = ({
  dehydratedState,
  id,
  editorInfoList,
}: {
  dehydratedState: any;
  id: number;
  editorInfoList: IAuthorProps[];
}) => {
  const { data: news }: { data: any } = useArticleById({ id, dehydratedState, editorInfoList });
  const md = new MarkdownIt();

  useEffect(() => {});
  const copyURL = () => {
    const currentUrl = window.document.location.href;
    const url = document.createElement("textarea");
    document.body.appendChild(url);
    url.value = currentUrl;
    url.select();
    document.execCommand("copy");
    document.body.removeChild(url);

    Swal.fire({
      title: "Mews",
      text: "링크가 복사되었습니다",
      icon: "success",
      showConfirmButton: false,
      timer: 1500,
      width: 200,
    });
  };

  return (
    <s.Wrapper>
      <s.newsviewContainer>
        <s.newsTitleContainer>
          <s.newsTitleBox>
            <s.category>{news?.type}</s.category>
            <s.title>{news?.title}</s.title>
            <s.date>{`${news?.modifiedAt[0]}.${news?.modifiedAt[1]}.${news?.modifiedAt[2]} ${news?.modifiedAt[3]}:${news?.modifiedAt[4]}`}</s.date>
          </s.newsTitleBox>
        </s.newsTitleContainer>
        <s.contentBox>
          {news?.content && (
            // eslint-disable-next-line react/no-danger
            <s.content dangerouslySetInnerHTML={{ __html: md.render(news.content) }} />
          )}
        </s.contentBox>

        <s.ArticleBottomContainer>
          <s.ArticleBottomBox>
            <s.AuthorIntroContainer>
              {editorInfoList &&
                editorInfoList.map((editorInfo) => (
                  <AuthorIntro
                    id={editorInfo.id}
                    name={editorInfo.name}
                    imgUrl={editorInfo.imgUrl}
                    introduction={editorInfo.introduction}
                  />
                ))}
            </s.AuthorIntroContainer>
            <s.BottomContainer>
              <s.BtnContainer>
                <s.LikeIconContainer />
                <s.BookmarkIconContainer
                // className={active ? "active" : "inactive"}
                >
                  <NewsViewBookmarkBtn />
                </s.BookmarkIconContainer>
                <s.LinkIconContainer>
                  <LinkBtn onClick={copyURL} />
                </s.LinkIconContainer>
              </s.BtnContainer>
            </s.BottomContainer>
          </s.ArticleBottomBox>
        </s.ArticleBottomContainer>
      </s.newsviewContainer>
    </s.Wrapper>
  );
};

export default NewsView;
