import TobNavBar from "@components/TopNavBar";
import ContentWrapper from "@components/ContentWrapper";
import CardsSlider from "@components/CardSlider";
import myBookmarkArticle from "@pages/tmp/myBookmarkArticle";
import ContentCard from "@components/ContentCard";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import PageTemplate from "@components/PageTemplate";
import MyBookmarkAPI from "@pages/api/MyBookmarkAPI";
import MyLikeAPI from "@pages/api/MyLikeAPI";
import MyProfileAPI from "@pages/api/MyProfileAPI";
import { useSession } from "next-auth/react";
import * as s from "./styles";

export interface IProfile {
  imgUrl: string;
  userName: string;
  introduction: string;
  likeCount: number;
  bookmarkCount: number;
  subscribeCount: number;
}

export interface IBookmark {
  id: number;
  title: string;
  likeCount: number;
  editors: string[];
  img: string[];
  bookmarked: boolean;
  liked: boolean;
  category: string;
}

export interface ILike {
  id: number;
  title: string;
  likeCount: number;
  editors: string[];
  img: string[];
  bookmarked: boolean;
  liked: boolean;
  category: string;
}

const Mypage = () => {
  const [likeNum, setLikeNum] = useState(0);
  const [bookmarkNum, setBookmarkNum] = useState(0);
  const [subscribeNum, setSubscribeNum] = useState(0);
  const [name, setName] = useState("");
  const [introduce, setIntroduce] = useState("");
  const [imgURL, setImgURL] = useState("/");

  const [bookmarkList, setBookmarkList] = useState<IBookmark[]>(myBookmarkArticle);
  const [likeList, setLikeList] = useState<ILike[]>(myBookmarkArticle);
  const { data: session } = useSession();
  console.log(session);

  useEffect(() => {
    const profile: Promise<any> = MyProfileAPI.getProfiles(session);
    profile
      .then((data: IProfile) => {
        setName(data.userName);
        setIntroduce(data.introduction);
        setLikeNum(data.likeCount);
        setBookmarkNum(data.bookmarkCount);
        setSubscribeNum(data.subscribeCount);
        setImgURL(data.imgUrl);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [session]);

  useEffect(() => {
    const bookmarks: Promise<any> = MyBookmarkAPI.getBookmarks(session);
    bookmarks
      .then((data: IBookmark[]) => {
        setBookmarkList([...data]);
        setBookmarkNum(bookmarkList.length);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [bookmarkList, session]);

  useEffect(() => {
    const likes: Promise<any> = MyLikeAPI.getLikes(session);
    likes
      .then((data: ILike[]) => {
        setLikeList([...data]);
        setLikeNum(likeList.length);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [likeList, session]);

  const onClickProfileEdit = () => {
    // eslint-disable-next-line no-restricted-globals
    location.href = "/mypage/edit";
  };

  return (
    <PageTemplate>
      <s.Wrapper>
        <TobNavBar />
        <s.TopContainer>
          <s.ProfileContainer>
            <s.ImageBox>
              <s.Image src={imgURL} />
            </s.ImageBox>
            <s.TextBox>
              <s.Name>{name}</s.Name>
              <s.Introduce>{introduce}</s.Introduce>
            </s.TextBox>
          </s.ProfileContainer>
          <s.EditProfileBtn onClick={onClickProfileEdit}>프로필 편집</s.EditProfileBtn>

          <s.ArticleNumberContainer>
            <Link href="/mypage/postlist">
              <s.ArticleNumberItem>
                <s.Num>{likeNum}</s.Num>
                <s.Type>좋아요</s.Type>
              </s.ArticleNumberItem>
            </Link>

            <Link href="/mypage/postlist">
              <s.ArticleNumberItem>
                <s.Num>{bookmarkNum}</s.Num>
                <s.Type>북마크</s.Type>
              </s.ArticleNumberItem>
            </Link>

            <Link href="/">
              <s.ArticleNumberItem>
                <s.Num>{subscribeNum}</s.Num>
                <s.Type>구독</s.Type>
              </s.ArticleNumberItem>
            </Link>
          </s.ArticleNumberContainer>
        </s.TopContainer>

        <s.BottomContainer>
          <ContentWrapper contentName="내가 북마크한 글">
            <CardsSlider>
              {bookmarkList &&
                bookmarkList.map((e: IBookmark) => {
                  return (
                    <ContentCard
                      category={e.category}
                      title={e.title}
                      authorNames={e.editors}
                      isActive={e.bookmarked}
                      isLike={e.liked}
                      like_count={e.likeCount}
                    />
                  );
                })}
            </CardsSlider>
          </ContentWrapper>
        </s.BottomContainer>
      </s.Wrapper>
    </PageTemplate>
  );
};

export default Mypage;
