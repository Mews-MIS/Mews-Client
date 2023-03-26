import React, { useState } from "react";
import BookmarkBtn from "@public/button/BookmarkBtn.svg";
import LikeBtn from "@public/button/LikeBtn.svg";
import { useSession } from "next-auth/react";
import BookmarkButton from "@components/BookmarkButton";
import * as s from "./styles";

export interface ContentCardProps {
  id: number;
  category: string;
  title: string;
  isActive: boolean;
  isLike: boolean;
  authorNames: string[];
  like_count: number;

  fileUrls?: string[];
}
const ContentCard = ({
  id,
  category,
  title,
  isActive,
  isLike,
  authorNames,
  like_count,
  fileUrls,
}: ContentCardProps) => {
  const [active, setActive] = useState<Boolean>(isActive);
  const [like, setLike] = useState<Boolean>(isLike);
  const { data: session } = useSession();

  const onClickBookmark = () => {
    setActive(!active);
  };
  const onClickLike = () => {
    setLike(!like);
  };

  return (
    <s.Wrapper>
      {/** 해당 부분 이미지 추가 필요 * */}
      <s.ImageContainer>
        {fileUrls && <img src={fileUrls["0"]} alt="메인 이미지" />}
      </s.ImageContainer>
      <s.ContentContainer>
        <s.ContentTopArea>
          <s.ContentInfoSummary>
            <s.CategoryLabel>{category}</s.CategoryLabel>
            <s.ContentTitleLabel>{title}</s.ContentTitleLabel>
          </s.ContentInfoSummary>
          <s.BookmarkButtonContainer onClick={onClickBookmark}>
            <s.BookmarkButton className={active ? "active" : "inactive"}>
              <BookmarkButton articleId={id} session={session} isActive={isActive} />
            </s.BookmarkButton>
          </s.BookmarkButtonContainer>
        </s.ContentTopArea>
        <s.ContentBottomArea>
          <s.AuthorContainer>
            {authorNames &&
              authorNames.map((name) => {
                return <s.InformationLabel key={name}>{name}</s.InformationLabel>;
              })}
          </s.AuthorContainer>
          <s.LikeContainer onClick={onClickLike}>
            <s.LikeIconContainer className={like ? "active" : "inactive"}>
              <LikeBtn />
            </s.LikeIconContainer>
            <s.InformationLabel>{like_count}</s.InformationLabel>
          </s.LikeContainer>
        </s.ContentBottomArea>
      </s.ContentContainer>
    </s.Wrapper>
  );
};

export default ContentCard;
