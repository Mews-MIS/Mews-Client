import Wrapper from "@pages/search/_fragments/PopularKeyword/styles";
import Link from "next/link";

const PopularKeyword = ({
  rank,
  keyword,
  articleId,
}: {
  rank: number;
  keyword: string;
  articleId: number;
}) => {
  return (
    <Link href={`/articles/${articleId}`}>
      <Wrapper>
        <p className="Rank">{rank}</p>
        <p>{keyword}</p>
      </Wrapper>
    </Link>
  );
};

export default PopularKeyword;
