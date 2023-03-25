import ScheduleItem from "@components/ScheduleItem";
import { IScheduleCategory } from "src/interfaces/ISchedules";
import theme from "@styles/Theme";
import React, { useCallback, useRef, useState } from "react";
import FoldBtn from "@public/button/FoldBtn.svg";
import CollapseBtn from "@public/button/CollapseBtn.svg";
import * as s from "./styles";

const ScheduleCategory = ({ category, titles }: IScheduleCategory) => {
  let Color: string = "";
  if (category === "동국대학교") {
    Color = theme.COLORS.WARNING_RED;
  }

  if (category === "경영정보학과") {
    Color = theme.COLORS.HIGHLIGHT_ORANGE;
  }

  if (category === "Mews") {
    Color = theme.COLORS.BRIGHT_ORANGE;
  }

  const parentRef = useRef<HTMLDivElement>(null);
  const childRef = useRef<HTMLDivElement>(null);

  const [isCollapse, setIsCollpase] = useState(false);
  const [childRefHeight, setChildRefHeight] = useState(0);

  const handleBtnClick = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      e.stopPropagation();
      if (parentRef.current === null && childRef.current === null) return;

      if (childRef.current!.clientHeight > 0) {
        setChildRefHeight(+childRef.current!.clientHeight);
        childRef.current!.style.height = "0";
      } else {
        childRef.current!.style.height = `${childRefHeight}px`;
      }
      setIsCollpase(!isCollapse);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [isCollapse]
  );

  return (
    <s.Wrapper>
      <s.Container ref={parentRef}>
        <s.Title>
          <s.Circle color={Color} />
          <s.TitleText>{category}</s.TitleText>
          <s.BtnWrapper onClick={handleBtnClick}>
            {isCollapse ? <CollapseBtn /> : <FoldBtn />}
          </s.BtnWrapper>
        </s.Title>

        <s.ScheduleItems ref={childRef}>
          {titles.map((title, idx) => (
            // eslint-disable-next-line react/no-array-index-key
            <s.ItemWrapper key={idx}>
              <ScheduleItem title={title} Color={Color} />
            </s.ItemWrapper>
          ))}
        </s.ScheduleItems>
      </s.Container>
    </s.Wrapper>
  );
};

export default ScheduleCategory;
