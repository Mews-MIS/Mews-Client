import React from "react";
import Link from "next/link";
import * as s from "./styles";
import { NewsListIcon } from "../../types/article";

export interface NewsListItemProps {
  contentInfo: NewsListIcon;
}

function NewsListItem({ contentInfo }: NewsListItemProps) {
  return (
    <Link href={`articles/${contentInfo.id}`}>
      <s.Wrapper>
        <s.NewsItemContainer>
          <s.LeftItems>
            <s.NewsTitle>{contentInfo.title}</s.NewsTitle>
            <s.AuthorContainer>
              {contentInfo.authorNames.map((name) => {
                return <s.Author key={name}>{name}</s.Author>;
              })}
            </s.AuthorContainer>
            <s.CountItems>
              <s.Views>조회수 {contentInfo.views}</s.Views>
              <s.LikeNum>좋아요 {contentInfo.likeNum}</s.LikeNum>
              <s.BookmarkNum>북마크 {contentInfo.bookmarkNum}</s.BookmarkNum>
            </s.CountItems>
          </s.LeftItems>
          <s.RightItems>
            <s.Thumbnail src={contentInfo.thumbnailURL} />
            <s.CommentNumBox>
              <s.CommentNum>{contentInfo.commentNum}</s.CommentNum>
              <s.CommentCountLabel>댓글</s.CommentCountLabel>
            </s.CommentNumBox>
          </s.RightItems>
        </s.NewsItemContainer>
      </s.Wrapper>
    </Link>
  );
}

export default NewsListItem;
