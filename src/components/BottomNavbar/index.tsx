import React from "react";
import * as s from "./styles";
import MainIcon from "@public/icon/MainIcon.svg";
import NewsIcon from "@public/icon/NewsIcon.svg";
import CalendarIcon from "@public/icon/CalendarIcon.svg";
import MyPageIcon from "@public/icon/MyPageIcon.svg";

const BottomNavbar = () => {
  return (
    <s.BtmNavContainer>
      <s.BtmNavItem>
        <MainIcon />
      </s.BtmNavItem>
      <s.BtmNavItem>
        <NewsIcon />
      </s.BtmNavItem>
      <s.BtmNavItem>
        <CalendarIcon />
      </s.BtmNavItem>
      <s.BtmNavItem>
        <MyPageIcon />
      </s.BtmNavItem>
    </s.BtmNavContainer>
  );
};

export default BottomNavbar;
