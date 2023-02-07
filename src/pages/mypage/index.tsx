import TobNavBar from "@components/TopNavBar";
import ContentWrapper from "@components/ContentWrapper";
import CardsSlider from "@components/CardSlider";
import myBookmarkArticle from "@pages/tmp/myBookmarkArticle";
import ContentCard from "@components/ContentCard";
import { useEffect, useState } from "react";
import { Article } from "src/types/article";
import * as s from "./styles";
import { tmpImageURL } from "@pages/tmp/tmpImageURL";
import Link from "next/link";
import PageTemplate from "@components/PageTemplate";

const Mypage = () => {
  const bookmarkArticle = "내가 북마크한 글";
  /* 더미 데이터 */
  const [articleNumData, setArticleNumData] = useState([3, 2, 1]);
  const [name, setName] = useState("박상준");
  const [introduce, setIntroduce] = useState("테스트 자기소개");

  /* 비동기 처리 필요 */
  useEffect(() => {
    setName("박상준");
    setIntroduce("테스트 자기소개");
    setArticleNumData([3, 2, 1]);
  }, []);

  return (
    <PageTemplate>
      <s.Wrapper>
        <TobNavBar />
        <s.TopContainer>
          <s.ProfileContainer>
            <s.ImageBox>
              <s.Image src={tmpImageURL} />
            </s.ImageBox>
            <s.TextBox>
              <s.Name>{name}</s.Name>
              <s.Introduce>{introduce}</s.Introduce>
            </s.TextBox>
          </s.ProfileContainer>
          <Link href={"/mypage/edit"}>
            <s.EditProfileBtn>프로필 편집</s.EditProfileBtn>
          </Link>

          <s.ArticleNumberContainer>
            
            <Link href={"/mypage/postlist"}>
              <s.ArticleNumberItem>
                <s.Num>{articleNumData[0]}</s.Num>
                <s.Type>좋아요</s.Type>
              </s.ArticleNumberItem>
            </Link>

            <Link href={"/mypage/postlist"}>
              <s.ArticleNumberItem>
                <s.Num>{articleNumData[1]}</s.Num>
                <s.Type>북마크</s.Type>
              </s.ArticleNumberItem>
            </Link>

            
            <Link href={"/"}>
              <s.ArticleNumberItem>
                <s.Num>{articleNumData[2]}</s.Num>
                <s.Type>구독</s.Type>
              </s.ArticleNumberItem>
            </Link>

          </s.ArticleNumberContainer>
        </s.TopContainer>

        <s.BottomContainer>
          <ContentWrapper contentName={bookmarkArticle}>
            <CardsSlider>
              {myBookmarkArticle.map((e: Article) => {
                return (
                  <ContentCard
                    key={e.id}
                    category={e.category}
                    title={e.title}
                    authorNames={e.authorNames}
                    isActive={e.isActive}
                    isLike={e.isLike}
                    likeNum={e.likeNum}
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
