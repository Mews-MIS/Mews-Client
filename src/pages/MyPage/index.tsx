import * as s from "./styles";
import TobNavBar from "@components/TopNavBar";
import ContentWrapper from "@components/ContentWrapper";
import ContentCard from "@components/ContentCard";
import CardsSlider from "@components/CardSlider";
import AuthorIntro from "@components/AuthorIntro";
import { useState } from "react";

const MyPage = () => {
    const bookmarkArticle = "내가 북마크한 글";
    /* 더미 데이터 */
    const [articleNumData, setArticleNumData] = useState([3, 2, 1]);
    const [articleNumType, setArticleNumType] = useState(["좋아요", "북마크", "구독"]);

    return (
        <s.Wrapper>
            <TobNavBar />
            <s.TopContainer>

                {/* 프로필 사진 컨테이너 자리임. 우선 Author 갖다 쓰겠음 */}
                <AuthorIntro/>
                
                <s.EditProfileBtn>프로필 편집</s.EditProfileBtn>

                <s.ArticleNumberContainer>
                    {articleNumData.map((d, i)=> {
                        return (
                            <s.ArticleNumberItem>
                                <s.Num>{d}</s.Num>
                                <s.Type>{articleNumType[i]}</s.Type>
                            </s.ArticleNumberItem>
                        )
                    })}
                </s.ArticleNumberContainer>

            </s.TopContainer>

            <s.BottomContainer>
                <ContentWrapper contentName={bookmarkArticle}>
                    <CardsSlider>
                        {/* <ContentCard /> */}
                        <ContentCard />
                    </CardsSlider>
                </ContentWrapper>
            </s.BottomContainer>

            {/* Footer 자리 */}
        </s.Wrapper> 
    );
};

export default MyPage;

