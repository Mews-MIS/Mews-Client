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
import { IProfile } from "../../mypage/index";

export default function PostList() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [type, setType] = useState<string>("");
  const [postCount, setPostCount] = useState<number>(0);
  const [name, setName] = useState("");
  const [introduce, setIntroduce] = useState("");
  const [imgURL, setImgURL] = useState("/");
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    router.query.type === "bookmark" &&
      MyBookmarkAPI.getBookmarks(session).then((data) => {
        console.log(data);
        setType("내가 북마크한 글");
        data && setPostCount(data.length);
        let newArticles: Article[] = [];
        data?.forEach((item) => {
          newArticles.push({
            editorIdList(editorIdList) {},
            id: item.id,
            fileUrls: item.img,
            title: item.title,
          });
        });
        setArticles(newArticles);
      });
    router.query.type === "like" &&
      MyLikeAPI.getLikes(session).then((data) => {
        setType("내가 좋아요를 누른 글");
        data && setPostCount(data.length);
        let newArticles: Article[] = [];
        data?.forEach((item) => {
          newArticles.push({
            editorIdList(editorIdList) {},
            id: item.id,
            fileUrls: item.img,
            title: item.title,
          });
        });
        setArticles(newArticles);
      });
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
        </s.BottomContainer>
      </s.Wrapper>
    </PageTemplate>
  );
}
