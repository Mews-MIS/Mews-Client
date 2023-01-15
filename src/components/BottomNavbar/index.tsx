import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import * as s from "./styles";
import MainIcon from "@public/icon/MainIcon.svg";
import NewsIcon from "@public/icon/NewsIcon.svg";
import CalendarIcon from "@public/icon/CalendarIcon.svg";
import MyPageIcon from "@public/icon/MyPageIcon.svg";

const BottomNavBar = () => {
  const router = useRouter();

  //각 페이지에 맞는 라우팅 연결 필요. 현재 상태는 아이콘 모두 active되어있는 상태
  return (
    <s.BtmNavContainer>
      <Link href="/">
        <s.BtmNavItem className={router.pathname === "/" ? "active" : ""}>
          <MainIcon />
        </s.BtmNavItem>
      </Link>
      <Link href="/">
        <s.BtmNavItem className={router.pathname === "/" ? "active" : ""}>
          <NewsIcon />
        </s.BtmNavItem>
      </Link>
      <Link href="/">
        <s.BtmNavItem className={router.pathname === "/" ? "active" : ""}>
          <CalendarIcon />
        </s.BtmNavItem>
      </Link>
      <Link href="/">
        <s.BtmNavItem className={router.pathname === "/" ? "active" : ""}>
          <MyPageIcon />
        </s.BtmNavItem>
      </Link>
    </s.BtmNavContainer>
  );
};

export default BottomNavBar;
