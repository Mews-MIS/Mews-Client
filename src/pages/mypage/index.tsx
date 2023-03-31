import ContentWrapper from "@components/ContentWrapper";
import CardsSlider from "@components/CardSlider";
import ContentCard from "@components/ContentCard";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import PageTemplate from "@components/PageTemplate";
import { useSession } from "next-auth/react";
import useMyProfile from "@hooks/query/mypage/useMyProfile";
import useMyProfileBookmark from "@hooks/query/mypage/useMyProfileBookmark";
import * as s from "./styles";

// eslint-disable-next-line no-empty-pattern
export async function getServerSideProps({}: any) {
  return {
    props: {},
  };
}

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

  const [bookmarkList, setBookmarkList] = useState<IBookmark[]>([]);

  const { data: session } = useSession();

  let myProfile: any = useMyProfile(session);
  let myBookmark: any = useMyProfileBookmark(session);

  useEffect(() => {
    /* 세션 정보 있는 경우(초기상태) */
    if (session !== undefined) {
      /* 세션으로 요청한 데이터 응답 받은 경우 -> 로컬스토리지에 저장 */
      if (
        myProfile[0].isSuccess &&
        myProfile[0].data !== undefined &&
        myProfile[0].data !== null &&
        myBookmark.isSuccess &&
        myBookmark.data !== undefined &&
        myBookmark.data !== null
      ) {
        localStorage.setItem("profileData", JSON.stringify(myProfile));
        localStorage.setItem("bookmarkData", JSON.stringify(myBookmark));
      }
    } else {
      /* 세션 정보 없는 경우(새로고침) -> 로컬스토리지에서 세션정보 가져옴 */
      const localStorageProfile = localStorage.getItem("profileData");
      const localStorageBookmark = localStorage.getItem("bookmarkData");
      myProfile = JSON.parse(localStorageProfile as string) || [];
      myBookmark = JSON.parse(localStorageBookmark as string) || [];
    }
  }, [session, myProfile[0].isSuccess, myProfile[0].data, myBookmark.isSuccess, myBookmark.data]);

  useEffect(() => {
    if (myProfile[0].data !== undefined && myProfile[0].data !== null) {
      setName(myProfile[0].data?.userName);
      setIntroduce(myProfile[0].data?.introduction);
      setLikeNum(myProfile[0].data?.likeCount);
      setBookmarkNum(myProfile[0].data?.bookmarkCount);
      setSubscribeNum(myProfile[0].data?.subscribeCount);
      setImgURL(myProfile[0].data?.imgUrl);
    }
  }, [myProfile]);

  useEffect(() => {
    if (myBookmark.data !== undefined && myBookmark.data !== null) {
      setBookmarkList([...myBookmark.data]);
    }
  }, [myBookmark.isSuccess, myBookmark.data]);

  const onClickProfileEdit = () => {
    // eslint-disable-next-line no-restricted-globals
    location.href = "/mypage/edit";
  };

  return (
    <PageTemplate>
      <s.Wrapper>
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
            <Link href="/mypage/postlist/like">
              <s.ArticleNumberItem>
                <s.Num>{likeNum}</s.Num>
                <s.Type>좋아요</s.Type>
              </s.ArticleNumberItem>
            </Link>

            <Link href="/mypage/postlist/bookmark">
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
                    <Link href={`article/${e.id}`}>
                      <ContentCard
                        id={e.id}
                        category={e.category}
                        title={e.title}
                        authorNames={e.editors}
                        isBookmark={e.bookmarked}
                        isLike={e.liked}
                        like_count={e.likeCount}
                      />
                    </Link>
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
