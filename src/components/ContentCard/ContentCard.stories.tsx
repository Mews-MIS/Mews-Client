import ContentCard from "@components/ContentCard";
import React from "react";

const data = {
  id: 1,
  category: "경정인을 소개합니다.",
  title: "재직자편 - 최시운",
  authorNames: ["이정우", "김현제"],
  isActive: false,
  isLike: false,
  likeNum: 132,
};

export default {
  title: "component/contentCard",
  component: ContentCard,
};

export const contentCard = () => (
  <ContentCard
    id={data.id}
    key={data.id}
    category={data.category}
    title={data.title}
    authorNames={data.authorNames}
    isLike
    like_count={data.likeNum}
    isBookmark
  />
);
