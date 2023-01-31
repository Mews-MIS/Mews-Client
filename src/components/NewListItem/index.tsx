import React from "react";
import * as s from "./styles";

export interface NewsListItemProps {
  NewsTitle: string;
  authorNames: string[];
  views: number;
  likeNum: number;
  bookmarkNum: number;
  thumbnailURL: string;
  commentNum: number;
}
const NewsListItem = ({
  NewsTitle,
  authorNames,
  views,
  likeNum,
  bookmarkNum,
  thumbnailURL,
  commentNum,
}: NewsListItemProps) => {
  return (
    <s.Wrapper>
      <s.NewsItemContainer>
        <s.LeftItems>
          <s.NewsTitle>{NewsTitle}</s.NewsTitle>
          <s.Author>{authorNames}</s.Author>
          <s.CountItems>
            <s.Views>조회수 {views}</s.Views>
            <s.LikeNum>좋아요 {likeNum}</s.LikeNum>
            <s.BookmarkNum>북마크 {bookmarkNum}</s.BookmarkNum>
          </s.CountItems>
        </s.LeftItems>
        <s.RightItems>
          <s.Thumbnail src={thumbnailURL} />
          <s.CommentNumBox>
            <s.CommentNum>{commentNum}</s.CommentNum>
            <s.CommentCountLabel>댓글</s.CommentCountLabel>
          </s.CommentNumBox>
        </s.RightItems>
      </s.NewsItemContainer>
    </s.Wrapper>
  );
};

export default NewsListItem;
