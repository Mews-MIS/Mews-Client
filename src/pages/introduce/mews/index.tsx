import { useState } from 'react';
import * as s from "./styles";
import LargeLogo from "@public/icon/LargeLogo.svg";
import BackBtn from '@components/BackBtn';

const MewsIntroduce = () => {
  const [introduce, setIntroduce] = useState("대충 기깔나는 텍스트 홍보문구");

  return (
    <s.Wrapper>
      <BackBtn />
      <s.Container>
        <LargeLogo />
        <s.Text>{introduce}</s.Text>
      </s.Container>
    </s.Wrapper>
  )
};

export default MewsIntroduce;
