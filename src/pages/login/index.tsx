import React from "react";
import LargeLogo from "@public/icon/LargeLogo.svg";
import TopNavBar from "@components/TopNavBar";
import BottomNavBar from "@components/BottomNavbar";
import { signIn, signOut, useSession } from "next-auth/react";

import GLogo from "@public/icon/GLogo.svg";
import * as s from "./styles";

const NotLoginPage = () => {
  const { data: session, status } = useSession();

  console.log(session);
  return (
    <s.Wrapper>
      <s.NotLoginContainer>
        <TopNavBar />
        <div>
          <LargeLogo />
        </div>

        <s.MewsIntro>지금 뮤즈에 가입하고</s.MewsIntro>
        <s.MewsAd>기깔나는 홍보문구 들어갈 자리</s.MewsAd>

        {/* <s.Button */}
        {/*  onClick={() => */}
        {/*    signIn("google", { */}
        {/*      callbackUrl: "http://localhost:3000/", */}
        {/*      redirect: false, */}
        {/*    }) */}
        {/*  } */}
        {/* > */}
        {/*  <GLogo style={{ marginRight: "4%" }} /> */}
        {/*  Sign in with Google */}
        {/* </s.Button> */}

        {/* eslint-disable-next-line react/button-has-type */}
        {!session && <button onClick={() => signIn("google")}>Sign in with Google</button>}
        {session && (
          <div>
            <p>Signed in as {session.user.email}</p>
            <button onClick={() => signOut()}>Sign out</button>
          </div>
        )}

        {/* <LoginButton /> */}

        <BottomNavBar />
      </s.NotLoginContainer>
    </s.Wrapper>
  );
};

export default NotLoginPage;
