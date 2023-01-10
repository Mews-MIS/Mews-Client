import * as s from "./styles";
import React, { useState } from "react";
import BookmarkBtn from "@public/button/BookmarkBtn.svg";
import LikeBtn from "@public/button/LikeBtn.svg";
const ContentCard = () => {
  // 더미 데이터
  const category = "경정인을 소개합니다.";
  const title = "대학생편 - 최시운편";
  const [isActive, setIsActive] = useState(true);
  const [isLike, setIsLike] = useState(true);
  const authorNames = ["이정우", "김현제"];
  const likeNum = 312;

  const onBookmark = () => {
    setIsActive(!isActive);
  };
  const onClickLike = () => {
    setIsLike(!isLike);
  };

  return (
    <s.Wrapper>
      {/** 해당 부분 이미지 추가 필요 **/}
      <s.ImageContainer />
      <s.ContentContainer>
        <s.ContentTopArea>
          <div>
            <s.CategoryLabel>{category}</s.CategoryLabel>
            <s.ContentTitleLabel>{title}</s.ContentTitleLabel>
          </div>
          <s.BookmarkButtonContainer onClick={onBookmark}>
            <s.BookmarkButton className={isActive ? "active" : "inactive"}>
              <BookmarkBtn />
            </s.BookmarkButton>
          </s.BookmarkButtonContainer>
        </s.ContentTopArea>
        <s.ContentBottomArea>
          <s.AuthorContainer>
            {authorNames.map((name) => {
              return <s.InformationLabel key={name}>{name}</s.InformationLabel>;
            })}
          </s.AuthorContainer>
          <s.LikeContainer onClick={onClickLike}>
            <s.LikeIconContainer className={isLike ? "active" : "inactive"}>
              <LikeBtn />
            </s.LikeIconContainer>
            <s.InformationLabel>{likeNum}</s.InformationLabel>
          </s.LikeContainer>
        </s.ContentBottomArea>
      </s.ContentContainer>
    </s.Wrapper>
  );
};

export default ContentCard;
