import { IPropsDayItem } from '@components/CalendarLayout';
import theme from '@styles/Theme';
import React from 'react';
import * as s from "./styles";

const DayItem = ({month, day, isToday, categories}: IPropsDayItem) => {
  let hasCategoryDGUniv = categories.includes("동국대학교");
  let hasCategoryMIS = categories.includes("경영정보학과");
  let hasCategoryMews = categories.includes("Mews");
  let categoryBoolInfo = [];
  categoryBoolInfo.push(hasCategoryDGUniv, hasCategoryMIS, hasCategoryMews);
  console.log({categoryBoolInfo});
  return (
    <s.Wrapper>
      <s.Container>
        <s.DayText>{day}</s.DayText>
        <s.CategoryCircles>
          {
            categoryBoolInfo.map((category, index) => {
              if(category && index === 0) return <s.Circle color={theme.COLORS.WARNING_RED}/>
              if(category && index === 1) return <s.Circle color={theme.COLORS.HIGHLIGHT_ORANGE}/>
              if(category && index === 2) return <s.Circle color={theme.COLORS.BRIGHT_ORANGE}/>
            })
          }
        </s.CategoryCircles>
      </s.Container>
    </s.Wrapper>
  )
};

export default DayItem;