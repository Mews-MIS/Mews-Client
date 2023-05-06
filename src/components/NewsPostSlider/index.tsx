import React, { useState, useRef } from "react";
import * as s from "./styles";

const NewsPostSlider = ({ children }: { children: React.ReactNode }) => {
  const [dotActive, setDotActive] = useState(0);
  const targetPost = useRef<HTMLDivElement>(null);

  const onScroll = (e: React.FormEvent) => {
    const currentScrollPosition = e.currentTarget.scrollLeft;
    const scrollWidth = e.currentTarget.scrollWidth / React.Children.toArray(children).length;
    setDotActive(Math.round(currentScrollPosition / scrollWidth));
  };

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
        {React.Children.toArray(children).map((element: any, index: number) => (
          <s.Dot
            key={`dot${element.key}`}
            className={index === dotActive ? "active" : ""}
            onClick={() => onClickDot(index)}
          />
        ))}
      </s.DotsWrapper>
    </s.Wrapper>
  );
};

export default NewsPostSlider;
