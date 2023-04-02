import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import ContentWrapper from "@components/ContentWrapper";
import ContentRow from "@components/ContentRow";
import { Article } from "../../../types/article";
import * as s from "./styles";
import { useSession } from "next-auth/react";
import PageTemplate from "@components/PageTemplate";
import { ProfileContainer } from "@components/AuthorIntro/styles";
import MyProfileAPI from "@pages/api/MyProfileAPI";
import MyBookmarkAPI from "@pages/api/MyBookmarkAPI";
import MyLikeAPI from "@pages/api/MyLikeAPI";
import MysubscribeAPI from "@pages/api/MysubscribeAPI";
import { IProfile } from "../../mypage/index";
import { IAuthorProps } from "@components/AuthorIntro";
import AuthorIntro from "@components/AuthorIntro";

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
        console.log(data);
        data && setPostCount(data.length);
        let newArticles: Article[] = [];
        data?.forEach((item) => {
          newArticles.push({
            editorIdList(editorIdList) {},
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
      MyLikeAPI.getLikes(session).then((data) => {
        data && setPostCount(data.length);
        let newArticles: Article[] = [];
        data?.forEach((item) => {
          newArticles.push({
            editorIdList(editorIdList) {},
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
        data && setPostCount(data.length);
        let newSubscribeEditors: IAuthorProps[] = [];
        data &&
          data.forEach((item) => {
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
  }, []);

  useEffect(() => {
    const profile: Promise<any> = MyProfileAPI.getProfiles(session);
    profile
      .then((data: IProfile) => {
        setName(data.userName);
        setIntroduce(data.introduction);
        setImgURL(data.imgUrl);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

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
          {router.query.type === "subscribe" ? (
            subscribeEditors.length ? (
              subscribeEditors.map((e: IAuthorProps) => <AuthorIntro {...e} />)
            ) : (
              <s.Text>구독한 필진이 없습니다.</s.Text>
            )
          ) : (
            <ContentWrapper contentName={type}>
              {articles.length ? (
                articles.map((e: Article, index: number) => (
                  <ContentRow
                    index={index + 1}
                    key={index + 1}
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
