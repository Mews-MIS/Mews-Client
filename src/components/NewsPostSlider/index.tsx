import React, { useState } from "react";
import * as s from "./styles";

const NewsPostSlider = ({ children }: { children: React.ReactNode }) => {
  const [dotActive, setDotActive] = useState(0);

  //스크롤 위치 받아와서 게시물에 따라 점 색 바꾸기
  const onScroll = (e: React.FormEvent) => {
    const currentScrollPosition = e.currentTarget.scrollLeft;
    const scrollWidth = e.currentTarget.scrollWidth / React.Children.toArray(children).length;
    setDotActive(Math.round(currentScrollPosition / scrollWidth));
  };

  return (
    <s.Wrapper>
      <s.ContentWrapper onScroll={(e) => onScroll(e)}>
        <s.CardWrapper>{children}</s.CardWrapper>
      </s.ContentWrapper>
      <s.DotsWrapper>
        {React.Children.toArray(children).map((value, index) => (
          <s.Dot className={index == dotActive ? "active" : ""} />
        ))}
      </s.DotsWrapper>
    </s.Wrapper>
  );
};

export default NewsPostSlider;
