import Logo from "@public/icon/Logo.svg";
import SearchIcon from "@public/icon/SearchIcon.svg";
import Hamberger from "@public/icon/Hamberger.svg";
import { useState } from "react";
import MenuList from "@components/MenuList";
import Link from "next/link";
import * as s from "./styles";

const TobNavBar = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  /* 로그인 상태 비동기 처리 예정 */
  const onClickHamberger = () => {
    setIsOpen(!isOpen);
  };

  return (
    <s.Wrapper>
      <s.NavContainer>
        <Link href="/">
          <s.NavLeftIcon>
            <Logo />
          </s.NavLeftIcon>
        </Link>

        <s.NavRightIcons>
          <Link href="/search">
            <s.NavSearch>
              <SearchIcon />
            </s.NavSearch>
          </Link>

          <s.NavHamberger onClick={onClickHamberger}>
            <Hamberger />
          </s.NavHamberger>
        </s.NavRightIcons>
      </s.NavContainer>
      <MenuList isOpen={isOpen} setIsOpen={setIsOpen} isLogin={isLogin} />
    </s.Wrapper>
  );
};

export default TobNavBar;
