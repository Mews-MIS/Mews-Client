import ScheduleItem from '@components/ScheduleItem';
import { IScheduleCategory } from '@components/ScheduleLayout';
import theme from '@styles/Theme';
import React, { useCallback, useRef, useState } from 'react';
import FoldBtn from '@public/button/FoldBtn.svg';
import CollapseBtn from '@public/button/CollapseBtn.svg';
import * as s from "./styles";

export interface IScheduleItem {
  title: string,
  Color: string
}

const ScheduleCategory = ({category, titles}: IScheduleCategory) => {
  const Color = 
    category === "동국대학교" 
      ? `${theme.COLORS.WARNING_RED}` 
      : category === "경영정보학과"
      ? `${theme.COLORS.HIGHLIGHT_ORANGE}`
      : `${theme.COLORS.BRIGHT_ORANGE}`;
  
  const parentRef = useRef<HTMLDivElement>(null);
  const childRef = useRef<HTMLDivElement>(null);

  const [isCollapse, setIsCollpase] = useState(false);
  const [childRefHeight, setChildRefHeight] = useState(0);

  const handleBtnClick = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      e.stopPropagation();
      if(parentRef.current === null && childRef.current === null) return;

      if(childRef.current!.clientHeight > 0) {
        console.log(+childRef.current!.clientHeight);
        setChildRefHeight(+childRef.current!.clientHeight);
        childRef.current!.style.height = "0";
      }
      else {
        console.log(childRefHeight);
        childRef.current!.style.height = `${childRefHeight}px`;
      }
      setIsCollpase(!isCollapse);
    }, [isCollapse]
  );
  
  return (
    <s.Wrapper>
      <s.Container ref={parentRef}>
        <s.Title >
          <s.Circle color={Color} />
          <s.TitleText>{category}</s.TitleText>
          <s.BtnWrapper onClick={handleBtnClick}>
            {
              isCollapse ? <CollapseBtn /> : <FoldBtn/>
            }
          </s.BtnWrapper>
        </s.Title>
        
        <s.ScheduleItems ref={childRef}>
          {
            titles.map((title, idx) => 
              <s.ItemWrapper >
                <ScheduleItem key={idx} title={title} Color={Color}/>
              </s.ItemWrapper>
            )
          }
        </s.ScheduleItems>
      </s.Container>
    </s.Wrapper>
  )
};

export default ScheduleCategory;