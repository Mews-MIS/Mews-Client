import Wrapper from "@styles/PageStyles/search/_fragments/RecentSearched/styles";
import ClockIcon from "public/icon/ClockIcon.svg";
import Link from "next/link";

const RecentSearched = ({ keyword }: { keyword: string }) => {
  return (
    <Link href={`/search/result?keyword=${keyword}`}>
      <Wrapper>
        <ClockIcon />
        <p>{keyword}</p>
      </Wrapper>
    </Link>
  );
};

export default RecentSearched;
