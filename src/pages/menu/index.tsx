import BackBtn from "@components/BackBtn";
import MenuItem from "@components/MenuItem";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import * as s from "./styles";

const Menu = () => {
  const [isLogin, setIsLogin] = useState(true);

  /* 로그인 상태 비동기 처리 예정 */
  useEffect(()=> {
    setIsLogin(true);
  }, []);

  return (
    <s.Wrapper>
      <BackBtn />

      <s.MenuWrapper>
        <s.MenuContainer>
          {isLogin ?
            <Link href={"/mypage"}>
              <MenuItem name="마이 페이지" />
            </Link>
             :
             <Link href={"/notlogin"}>
             <MenuItem name="로그인" />
           </Link>
          }

          <Link href={"/introduce/mews"}>
           <MenuItem name="뮤즈 소개" />
          </Link>

          <Link href={"/introduce/author"}>
           <MenuItem name="필진 소개" />
          </Link>
        </s.MenuContainer>
      </s.MenuWrapper>
    </s.Wrapper>
  );
};

export default Menu;
