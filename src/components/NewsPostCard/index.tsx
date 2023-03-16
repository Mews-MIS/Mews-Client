import * as s from "./styles";
import Link from "next/link";
export interface NewsPostCardProps {
  id?: number;
  type: string;
  title: string;
  fileUrls: string[];
}

const NewsPostCard = ({ id, type, title, fileUrls }: NewsPostCardProps) => {
  return (
    <Link href={`article/${id}`}>
      <s.Wrapper>
        <s.ContentContainer>
          <s.ImageContainer src={fileUrls[0]} />
          <s.NewsInfoSummary>
            <s.NewsTitleLabel>{title}</s.NewsTitleLabel>
            <s.NewsCategoryLabel>{type}</s.NewsCategoryLabel>
          </s.NewsInfoSummary>
        </s.ContentContainer>
      </s.Wrapper>
    </Link>
  );
};
export default NewsPostCard;
