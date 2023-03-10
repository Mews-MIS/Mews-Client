import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import MainIcon from "@public/icon/MainIcon.svg";
import NewsIcon from "@public/icon/NewsIcon.svg";
import CalendarIcon from "@public/icon/CalendarIcon.svg";
import MyPageIcon from "@public/icon/MyPageIcon.svg";
import * as s from "./styles";

const BottomNavBar = () => {
  const router = useRouter();

  return (
    <s.BtmNavContainer>
      <Link href="/">
        <s.BtmNavItem className={router.pathname === "/" ? "active" : ""}>
          <MainIcon />
        </s.BtmNavItem>
      </Link>
      <Link href="/article">
        <s.BtmNavItem className={router.pathname === "/article" ? "active" : ""}>
          <NewsIcon />
        </s.BtmNavItem>
      </Link>
      <Link href="/calendar">
        <s.BtmNavItem className={router.pathname === "/calendar" ? "active" : ""}>
          <CalendarIcon />
        </s.BtmNavItem>
      </Link>
      <Link href="/mypage">
        <s.BtmNavItem className={router.pathname === "/mypage" ? "active" : ""}>
          <MyPageIcon />
        </s.BtmNavItem>
      </Link>
    </s.BtmNavContainer>
  );
};

export default BottomNavBar;
