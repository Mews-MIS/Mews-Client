import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import ContentWrapper from "@components/ContentWrapper";
import ContentRow from "@components/ContentRow";
import { useSession } from "next-auth/react";
import PageTemplate from "@components/PageTemplate";
import { ProfileContainer } from "@components/AuthorIntro/styles";
import MyProfileAPI from "@api/MyProfileAPI";
import MyBookmarkAPI from "@api/MyBookmarkAPI";
import MyLikeAPI from "@api/MyLikeAPI";
import MysubscribeAPI from "@api/MysubscribeAPI";
import AuthorIntro, { IAuthorProps } from "@components/AuthorIntro";
import * as s from "@styles/PageStyles/mypage/postlist/styles";
import { IProfile } from "../index";
import { Article } from "../../../types/article";

export default function PostList() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [type, setType] = useState<string>("");
  const [postCount, setPostCount] = useState<number>(0);
  const [name, setName] = useState("");
  const [introduce, setIntroduce] = useState("");
  const [imgURL, setImgURL] = useState("/");
  const [subscribeEditors, setSubscribeEditors] = useState<IAuthorProps[]>([]);
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (router.query.type === "bookmark") {
      setType("내가 북마크한 글");
      MyBookmarkAPI.getBookmarks(session).then((data) => {
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        data && setPostCount(data.length);
        const newArticles: Article[] = [];
        data?.forEach((item: any) => {
          newArticles.push({
            id: item.id,
            fileUrls: item.img,
            type: item.type,
            title: item.title,
            isActive: true,
            isLike: item.liked,
            authorNames: item.editors,
            like_count: item.likeCount,
          });
        });
        setArticles(newArticles);
      });
    } else if (router.query.type === "like") {
      setType("내가 좋아요를 누른 글");
      MyLikeAPI.getLikes(session).then((data: any) => {
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        data && setPostCount(data.length);
        const newArticles: Article[] = [];
        data?.forEach((item: any) => {
          newArticles.push({
            id: item.id,
            fileUrls: item.img,
            type: item.type,
            title: item.title,
            isActive: true,
            isLike: item.liked,
            authorNames: item.editors,
            like_count: item.likeCount,
          });
        });
        setArticles(newArticles);
      });
    } else if (router.query.type === "subscribe") {
      setType("내가 구독한 필진 목록");
      MysubscribeAPI.getMySubEditor(session).then((data) => {
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        data && setPostCount(data.length);
        const newSubscribeEditors: IAuthorProps[] = [];
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        data &&
          data.forEach((item: any) => {
            newSubscribeEditors.push({
              id: item.id,
              name: item.name,
              imgUrl: item.imgUrl,
              introduction: item.introduction,
            });
            setSubscribeEditors(newSubscribeEditors);
          });
      });
    }
  }, [router.query.type, session]);

  useEffect(() => {
    const profile: Promise<any> = MyProfileAPI.getProfiles(session);
    profile
      .then((data: IProfile) => {
        setName(data.userName);
        setIntroduce(data.introduction);
        setImgURL(data.imgUrl);
      })
      .catch((e) => {
        console.error(e);
      });
  }, [session]);

  return (
    <PageTemplate>
      <s.Wrapper>
        <s.TopContainer>
          <ProfileContainer>
            <s.ImageBox>
              <s.Image src={imgURL} />
            </s.ImageBox>
            <s.TextBox>
              <s.Name>{name}</s.Name>
              <s.Introduce>{introduce}</s.Introduce>
            </s.TextBox>
          </ProfileContainer>
        </s.TopContainer>
        <s.AllPostContainer>
          <s.AllPost>{type} </s.AllPost>
          <s.CountPost>{postCount}개</s.CountPost>
        </s.AllPostContainer>
        <s.BottomContainer>
          {/* eslint-disable-next-line no-nested-ternary */}
          {router.query.type === "subscribe" ? (
            subscribeEditors.length ? (
              subscribeEditors.map((e: IAuthorProps) => (
                <s.AuthorListContainer>
                  {/* eslint-disable-next-line react/jsx-props-no-spreading */}
                  <AuthorIntro {...e} />
                </s.AuthorListContainer>
              ))
            ) : (
              <s.Text>구독한 필진이 없습니다.</s.Text>
            )
          ) : (
            <ContentWrapper contentName={type}>
              {articles.length ? (
                articles.map((e: Article, index: number) => (
                  <ContentRow
                    index={index + 1}
                    key={`subEditor ${e.id}`}
                    contentInfo={{
                      ...e,
                    }}
                  />
                ))
              ) : (
                <s.Text>게시글이 없습니다.</s.Text>
              )}
            </ContentWrapper>
          )}
        </s.BottomContainer>
      </s.Wrapper>
    </PageTemplate>
  );
}
