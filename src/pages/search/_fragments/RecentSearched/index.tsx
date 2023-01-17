import Wrapper from "@pages/search/_fragments/RecentSearched/styles";
import ClockIcon from "public/icon/ClockIcon.svg";
import Link from "next/link";

const RecentSearched = ({ keyword, articleId }: { keyword: string; articleId: number }) => {
  return (
    <Link href={`/articles/${articleId}`}>
      <Wrapper>
        <ClockIcon />
        <p>{keyword}</p>
      </Wrapper>
    </Link>
  );
};

export default RecentSearched;
