import { useState } from "react";
import * as s from "./styles";
import LargeLogo from "@public/icon/LargeLogo.svg";
import BackBtn from "@components/BackBtn";

const MewsIntroduce = () => {
  return (
    <s.Wrapper>
      <s.Container>
        <LargeLogo />
        <s.BackBtnBox>
          <BackBtn />
        </s.BackBtnBox>
        <s.MewsAd>
          <p>40만 동국인의 뮤즈가 되는 그날까지 </p>
          <p>동국대학교 학술소모임 MEWS</p>
        </s.MewsAd>
      </s.Container>
    </s.Wrapper>
  );
};

export default MewsIntroduce;
