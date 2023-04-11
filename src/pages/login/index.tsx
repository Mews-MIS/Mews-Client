import React from "react";
import LargeLogo from "@public/icon/LargeLogo.svg";
import GLogo from "@public/icon/GLogo.svg";
import TopNavBar from "@components/TopNavBar";
import BottomNavBar from "@components/BottomNavbar";
import { signIn, signOut, useSession } from "next-auth/react";

import * as s from "./styles";

const NotLoginPage = () => {
  const { data: session } = useSession();

  const getSignIn = () => {
    signIn("google", { callbackUrl: "http://localhost:3000/" });
  };

  return (
    <s.Wrapper>
      <s.NotLoginContainer>
        <TopNavBar />
        <div>
          <LargeLogo />
        </div>

        <s.MewsIntro>지금 뮤즈에 가입하고</s.MewsIntro>
        <s.MewsAd>
          <p>40만 동국인의 뮤즈가 되는 그날까지 </p>
          <p>동국대학교 학술소모임 MEWS</p>
        </s.MewsAd>

        {!session && (
          <s.loginbtn onClick={() => getSignIn()}>
            {" "}
            <GLogo style={{ marginRight: "4%" }} />
            Sign in with Google
          </s.loginbtn>
        )}
        {session && (
          <div>
            <p>Signed in as {session.user!.email}</p>
            <s.loginbtn onClick={() => signOut()}>
              {" "}
              <GLogo style={{ marginRight: "4%" }} />
              Sign out
            </s.loginbtn>
          </div>
        )}

        {/* <LoginButton /> */}

        <BottomNavBar />
      </s.NotLoginContainer>
    </s.Wrapper>
  );
};

export default NotLoginPage;
