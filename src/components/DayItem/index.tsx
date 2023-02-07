import { IPropsDayItem } from '@components/CalendarLayout';
import theme from '@styles/Theme';
import React from 'react';
import { useSetRecoilState } from 'recoil';
import selectedDate from 'src/states/selectedDate';
import * as s from "./styles";

const DayItem = ({year, month, day, isToday, isSelected, isCurrentMonth, categories}: IPropsDayItem) => {
  const hasCategoryDGUniv = categories.includes("동국대학교");
  const hasCategoryMIS = categories.includes("경영정보학과");
  const hasCategoryMews = categories.includes("Mews");

  let categoryBoolInfo = [];
  categoryBoolInfo.push(hasCategoryDGUniv, hasCategoryMIS, hasCategoryMews);

  const setSelectedDate = useSetRecoilState(selectedDate);

  const onClickDayItemHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    const newDate = new Date(`${e.currentTarget.value}`);
    setSelectedDate(newDate);
  };

  return (
    <s.Wrapper>
      <s.CircleContainer 
        value={`${year}-${month}-${day}`}
        color={isSelected ? theme.COLORS.WARNING_RED : 'transparent'}
        onClick={onClickDayItemHandler}
      >
        <s.DayText textColor={isCurrentMonth} backgroundColor={isToday}>{day}</s.DayText>

        <s.CategoryCircles>
          {
            categoryBoolInfo.map((category, index) => {
              if(category && index === 0) return <s.Circle color={theme.COLORS.WARNING_RED}/>
              if(category && index === 1) return <s.Circle color={theme.COLORS.HIGHLIGHT_ORANGE}/>
              if(category && index === 2) return <s.Circle color={theme.COLORS.BRIGHT_ORANGE}/>
              return;
            })
          }
        </s.CategoryCircles>
      </s.CircleContainer>
    </s.Wrapper>
  )
};

export default DayItem;