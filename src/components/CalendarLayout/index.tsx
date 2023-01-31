import CalendarDays from '@components/CalendarDays';
import DayItem from '@components/DayItem';
import { addDays, endOfMonth, endOfWeek, format, startOfDay, startOfMonth, startOfWeek } from 'date-fns';
import React, { useState } from 'react';
import { useRecoilValue } from 'recoil';
import selectedDate from 'src/states/selectedDate';
import * as s from "./styles";

export interface IPropsDayItem {
  month: number,
  day: number,
  isToday: boolean,
  categories: string[]
}

const CalendarLayout = () => {
  const [selectedRecoilValue, setSelectedRecoilValue] = useState(useRecoilValue(selectedDate));
  const monthStart = startOfMonth(selectedRecoilValue);
  const monthEnd = endOfMonth(selectedRecoilValue);
  const weekStart = startOfWeek(selectedRecoilValue);
  const weekEnd = endOfWeek(selectedRecoilValue);

  const getWeek = (selectedRecoilValue: Date) => {
    let date = startOfWeek(startOfDay(selectedRecoilValue));

    const takeWeek = () => {
      const week = [...Array(7)].map((_, index) => addDays(date, index));
      date = addDays(week[6], 1);
      return week;
    }

    return takeWeek;
  }

  const getMonth = (selectedRecoilValue: Date) => {
    let month: Date[][] = [];
    let date = selectedRecoilValue;

    const lastDayOfRange = (range: Date[][]) => {
      return range[range.length-1][6];
    };

    const takeMonth = () => {
      const weekGenerator = getWeek(startOfMonth(date));
      const endDate = startOfDay(endOfMonth(date));
      month.push(weekGenerator());

      while(lastDayOfRange(month) < endDate){
        month.push(weekGenerator());
      }

      const range = month;
      month = [];
      date = addDays(lastDayOfRange(range), 1);

      return range;
    };

    return takeMonth;
  };

  const data = getMonth(selectedRecoilValue)();
  
  /* 날짜 클릭 시, DayItem에 props로 전달 - 예시 : {월: 12, 일: 28, isToday: false} */
  return (
    <s.Wrapper>
      <s.Container>
        <CalendarDays />
        <s.LayoutWrapper>
          <s.MonthWrapper>
            {
              data.map((week, index) => 
                <s.WeekWrapper>
                  {
                    week.map((day) => 
                      <s.DayWrapper onClick={() => setSelectedRecoilValue(day)}>
                        <DayItem month={+format(day, 'm')} day={+format(day, 'dd')} isToday={false} categories={["동국대학교", "Mews"]} />
                      </s.DayWrapper>
                    )
                  }
                </s.WeekWrapper>
              )
            }
          </s.MonthWrapper>
        </s.LayoutWrapper>
        
      </s.Container>
    </s.Wrapper>
  )
};

export default CalendarLayout;
