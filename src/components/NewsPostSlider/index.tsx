import React, { useState, useRef } from "react";
import * as s from "./styles";

const NewsPostSlider = ({ children }: { children: React.ReactNode }) => {
  const [dotActive, setDotActive] = useState(0);
  const targetPost = useRef<HTMLDivElement>(null);

  //스크롤 위치 받아와서 게시물에 따라 점 색 바꾸기
  const onScroll = (e: React.FormEvent) => {
    const currentScrollPosition = e.currentTarget.scrollLeft;
    const scrollWidth = e.currentTarget.scrollWidth / React.Children.toArray(children).length;
    setDotActive(Math.round(currentScrollPosition / scrollWidth));
  };

  //점 누르면 그 위치에 따른 게시글로 스크롤 이동하기
  const onClickDot = (index: number) => {
    const postCount = React.Children.toArray(children).length;
    targetPost.current?.scrollTo({
      left: (index * targetPost.current.scrollWidth) / postCount,
      behavior: "smooth",
    });
  };

  return (
    <s.Wrapper>
      <s.ContentWrapper ref={targetPost} onScroll={(e) => onScroll(e)}>
        <s.CardWrapper>{children}</s.CardWrapper>
      </s.ContentWrapper>
      <s.DotsWrapper>
        {React.Children.toArray(children).map((value, index) => (
          <s.Dot className={index === dotActive ? "active" : ""} onClick={() => onClickDot(index)} />
        ))}
      </s.DotsWrapper>
    </s.Wrapper>
  );
};

export default NewsPostSlider;
