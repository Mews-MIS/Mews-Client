import React, { useEffect, useState } from 'react';
import * as s from "./styles";
import { tmpImageURL } from "@pages/tmp/tmpImageURL";
import TopNavBar from '@components/TopNavBar';
import ContentWrapper from '@components/ContentWrapper';
import CardsSlider from '@components/CardSlider';
import myBookmarkArticle from '@pages/tmp/myBookmarkArticle';
import { Article } from 'src/types/article';
import ContentCard from '@components/ContentCard';

const ProfilePage = () => {
  /* 비공개 여부 */
  const [isPrivate, setIsPrivate] = useState(false);

  /* 더미 데이터 */
  const [articleNumData, setArticleNumData] = useState([3, 2, 1]);
  const [articleNumType, setArticleNumType] = useState(["좋아요", "북마크", "구독"]);
  const [name, setName] = useState("박상준");
  const [introduce, setIntroduce] = useState("테스트 자기소개");
  const blindedText = "해당 유저는 비공개 상태입니다.";
  
  /* 비동기 처리 필요 */
  useEffect(() => {
    setName("박상준");
    setIntroduce("테스트 자기소개");
    setArticleNumData([3, 2, 1]);
    setArticleNumType(["좋아요", "북마크", "구독"]);
  }, []);

  return (
    <s.Wrapper>
      <TopNavBar />
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

        <s.ArticleNumberContainer>
          {articleNumData.map((d, i) => {
            return (
              <s.ArticleNumberItem key={i}>
                {isPrivate ? <s.Num>{0}</s.Num> : <s.Num>{d}</s.Num>}
                <s.Type>{articleNumType[i]}</s.Type>
              </s.ArticleNumberItem>
            );
          })}
        </s.ArticleNumberContainer>
      </s.TopContainer>

      <s.BottomContainer>
        {isPrivate ? 
          <s.BlindedWrapper>
            <s.BlindedContent>{blindedText}</s.BlindedContent>
          </s.BlindedWrapper> 
            :
          <ContentWrapper contentName={`${name}님이 북마크 한 글`}>
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
        }
      </s.BottomContainer>
    </s.Wrapper>
  );
};

export default ProfilePage;