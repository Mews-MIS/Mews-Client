import ContentWrapper from "@components/ContentWrapper";
import CardsSlider from "@components/CardSlider";
import ContentCard from "@components/ContentCard";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import PageTemplate from "@components/PageTemplate";
import { useSession } from "next-auth/react";
import * as s from "./styles";
import useMyProfile from "@hooks/query/mypage/useMyProfile";

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
  const result: any = useMyProfile(session);
  const loading = result.some((res: any) => res.isLoading);
  
  
  useEffect(() => {
    console.log({session}, {result});
    // if(session !== undefined && result !== undefined){
    setName(result[0]?.data?.userName);
    setIntroduce(result[0]?.data?.introduction); 
    setLikeNum(result[0]?.data?.likeCount);
    setBookmarkNum(result[0]?.data?.bookmarkCount);
    setSubscribeNum(result[0]?.data?.subscribeCount);
    setImgURL(result[0]?.data?.imgUrl);

    // setBookmarkList([...result[1]?.data]);
    // setBookmarkNum(result[1]?.data.length);
    // }
      // const profile: Promise<any> = MyProfileAPI.getProfiles(session);
      // profile
      //   .then((d: IProfile) => {

      //   })
      //   .catch((e) => {
      //     console.log(e);
      //   });
      // const bookmarks: Promise<any> = MyBookmarkAPI.getBookmarks(session);
      // bookmarks
      //   .then((data: IBookmark[]) => {

      //   })
      //   .catch((e) => {
      //     console.log(e);
      //   });
  
      // const likes: Promise<any> = MyLikeAPI.getLikes(session);
      // likes
      //   .then((data: ILike[]) => {
      // setLikeList([...like]);
      // setLikeNum(like.length);
      //   })
      //   .catch((e) => {
      //     console.log(e);
      //   });
  }, [result]);

  const onClickProfileEdit = () => {
    // eslint-disable-next-line no-restricted-globals
    location.href = "/mypage/edit";
  };

  // if(loading) {
  //   return <div>Loading...</div>;
  // }

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
                        category={e.category}
                        title={e.title}
                        authorNames={e.editors}
                        isActive={e.bookmarked}
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
