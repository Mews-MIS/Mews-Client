import * as s from "./styles";

export interface NewsPostCardProps {
  category: string;
  title: string;
  imgUrl?: string;
}

const NewsPostCard = ({ category, title, imgUrl }: NewsPostCardProps) => {
  return (
    <s.Wrapper>
      <s.ContentContainer>
        {/* 이미지 추가해야 함 */}
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
