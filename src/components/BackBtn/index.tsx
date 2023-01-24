import React from 'react';
import * as s from "./styles";
import CloseMenu from "@public/icon/CloseMenu.svg";
import { useRouter } from 'next/router';

const BackBtn = () => {
  const router = useRouter();

  return (
    <s.Wrapper>
      <s.CloseIcon onClick={() => router.back()}>
        <CloseMenu />
      </s.CloseIcon>
    </s.Wrapper>
  )
};

export default BackBtn;