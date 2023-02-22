import Wrapper from "@pages/search/_fragments/PopularKeyword/styles";
import Link from "next/link";

const PopularKeyword = ({ rank, keyword }: { rank: number; keyword: string }) => {
  return (
    <Link href={`/search/result?keyword=${keyword}`}>
      <Wrapper>
        <p className="Rank">{rank}</p>
        <p>{keyword}</p>
      </Wrapper>
    </Link>
  );
};

export default PopularKeyword;
