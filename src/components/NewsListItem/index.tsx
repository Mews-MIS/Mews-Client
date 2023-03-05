import React from "react";
import Link from "next/link";
import * as s from "./styles";
import { NewsListIcon } from "../../types/article";

export interface NewsListItemProps {
  // eslint-disable-next-line react/no-unused-prop-types
  index: number;
  contentInfo: {
    id: number;
    title: string;
    views: {
      views: number;
      views_id: number;
    };
    like_count: number;
    filrUrls: string[];
  };
}

function NewsListItem({ contentInfo }: NewsListItemProps) {
  return (
    <Link href={`article/${contentInfo.id}`}>
      <s.Wrapper>
        <s.NewsItemContainer>
          <s.LeftItems>
            <s.NewsTitle>{contentInfo.title}</s.NewsTitle>
            <s.CountItems>
              <s.Views>조회수 {contentInfo.views.views}</s.Views>
              <s.LikeNum>좋아요 {contentInfo.like_count}</s.LikeNum>
            </s.CountItems>
          </s.LeftItems>
          <s.RightItems>
            <s.Thumbnail src={contentInfo.fileUrls[0]} />
          </s.RightItems>
        </s.NewsItemContainer>
      </s.Wrapper>
    </Link>
  );
}

export default NewsListItem;
