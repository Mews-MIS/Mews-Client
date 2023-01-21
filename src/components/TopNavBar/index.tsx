import Logo from "@public/icon/Logo.svg";
import SearchIcon from "@public/icon/SearchIcon.svg";
import Hamberger from "@public/icon/Hamberger.svg";
import * as s from "./styles";


const TobNavBar = () => {

  const onClickLogo = () => {
    console.log("메인 페이지로 라우팅");
  };

  const onClickSearch = () => {
    console.log("검색 페이지로 라우팅");
  };

  const onClickHamberger = () => {
    console.log("메뉴 페이지 렌더링");
  };

  return (
    <s.Wrapper>
      <s.NavContainer>
        <s.NavLeftIcon onClick={onClickLogo}>
          <Logo />
        </s.NavLeftIcon>

        <s.NavRightIcons>
          <s.NavSearch onClick={onClickSearch}>
            <SearchIcon />
          </s.NavSearch>

          <s.NavHamberger onClick={onClickHamberger}>
            <Hamberger />
          </s.NavHamberger>
        </s.NavRightIcons>
      </s.NavContainer>
    </s.Wrapper>
  );
};

export default TobNavBar;

