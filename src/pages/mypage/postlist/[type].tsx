import React from "react";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import AuthorIntro from "@components/AuthorIntro";
import ContentWrapper from "@components/ContentWrapper";
import ContentRow from "@components/ContentRow";
import myBookmarkArticle from "@pages/tmp/myBookmarkArticle";
import { Article } from "../../../types/article";
import * as s from "./styles";
import { tmpImageURL } from "@pages/tmp/tmpImageURL";
import authors from "@pages/tmp/authors";
import { useSession } from "next-auth/react";
import MyPageAPI from "@api/MyPageAPI";
import { IAuthorProps } from "../../../components/AuthorIntro/index";
import PageTemplate from "@components/PageTemplate";
import { ProfileContainer } from "@components/AuthorIntro/styles";
import MyProfileAPI from "@pages/api/MyProfileAPI";
import { IProfile } from "../../mypage/index";

// 추후 userName은 props로 받아오는것으로 수정되어야 함
interface textSetInterface {
  bookmarkPost: string;
  likePost: string;
  userName: Array<string>;
}

const props: IAuthorProps = {
  id: 3,
  name: "한수정",
  imgUrl: "http//",
  introduction: "안녕하세요",
};

export default function PostList() {
  const [array, setArray] = useState<Article[]>([]);
  const [userId, setUserId] = useState<number>();
  const [type, setType] = useState<string>("");
  const [count, setCount] = useState<number>(13);
  const [name, setName] = useState("");
  const [introduce, setIntroduce] = useState("");
  const [imgURL, setImgURL] = useState("/");
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    session && setUserId(session.userId);
    console.log(session.userId);
    router.query.type === "bookmark" &&
      MyPageAPI.getMyBookmark(userId).then((data) => {
        setType("내가 북마크한 글");
        // setCount(data.length);
      });
    router.query.type === "like" &&
      MyPageAPI.getMyLikeArticle(userId).then((data) => {
        setType("내가 좋아요를 누른 글");
        // setCount(data.length);
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
          <s.CountPost>{count}개</s.CountPost>
        </s.AllPostContainer>
        <s.BottomContainer>
          <ContentWrapper
            contentName={
              "ㅇㅇ"
              //   (userId === authors[0].authorName
              //     ? textSet.userName[0]
              //     : authors[0].authorName + textSet.userName[1]) +
              //   (isBookmark ? textSet.bookmarkPost : textSet.likePost)
            }
          >
            {myBookmarkArticle.length
              ? array.map((e: Article, index: number) => (
                  <ContentRow
                    index={index + 1}
                    key={index + 1}
                    contentInfo={{
                      ...e,
                    }}
                  />
                ))
              : "게시글이 없습니다."}
            {/* <button onClick={() => getArticleList()}>더 불러오기</button> */}
          </ContentWrapper>
        </s.BottomContainer>
      </s.Wrapper>
    </PageTemplate>
  );
}
