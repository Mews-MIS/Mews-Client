import Link from "next/link";
import * as s from "./styles";

export interface NewsPostCardProps {
  id?: number;
  type: string;
  title: string;
  fileUrls: string[];
  // eslint-disable-next-line react/no-unused-prop-types
  article?: any;
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
