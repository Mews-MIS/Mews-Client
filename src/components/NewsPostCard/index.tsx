import React, { useState } from "react";
import * as s from "./styles";

export interface NewsPostCardProps {
  category: string;
  title: string;
  imgUrl?: string;
}

const NewsPostCard = ({ category, title, imgUrl }: NewsPostCardProps) => {
  category = "경정인을 소개합니다";
  title = "경정인을 소개합니다 - 재직자편";

  return (
    <s.Wrapper>
      <s.ContentContainer>
        <s.ImageContainer />
        <s.NewsInfoSummary>
          <s.NewsTitleLabel>{title}</s.NewsTitleLabel>
          <s.NewsCategoryLabel>{category}</s.NewsCategoryLabel>
        </s.NewsInfoSummary>
      </s.ContentContainer>
    </s.Wrapper>
  );
};
export default NewsPostCard;
