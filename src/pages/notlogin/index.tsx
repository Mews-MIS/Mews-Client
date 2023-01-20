import * as s from "./styles";
import React from "react";
import LargeLogo from "@public/icon/LargeLogo.svg";
import TopNavBar from "@components/TopNavBar";
import BottomNavBar from "@components/BottomNavbar";
import { signIn } from "next-auth/react";
import GoogleLogo from "@public/icon/GoogleLogo.svg";

const NotLoginPage = () => {
  return (
    <s.Wrapper>
      <s.NotLoginContainer>
        <TopNavBar />
        <div>
          <LargeLogo />
        </div>

        <s.MewsIntro>동국대학교 경영정보학과 대표 소모임</s.MewsIntro>
        <s.MewsAd>기깔느는 홍보 문구 가나다라마바사아차카</s.MewsAd>

        <s.GoogleBtn>
          <button type="button" onClick={() => signIn("google")}>
            <GoogleLogo />
            Sign in with Google
          </button>
        </s.GoogleBtn>

        <BottomNavBar />
      </s.NotLoginContainer>
    </s.Wrapper>
  );
};

export default NotLoginPage;
