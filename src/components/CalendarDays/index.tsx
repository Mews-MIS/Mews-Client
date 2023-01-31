import React from 'react';
import * as s from "./styles";

const CalendarDays = () => {
  const days = ["일", "월", "화", "수", "목", "금", "토"];

  return (
    <s.Wrapper>
      <s.Container>
        <s.DayWrapper>  
          {days.map((data, index) => {
            return <s.Day key={index}>{data}</s.Day>
          })}
        </s.DayWrapper>
      </s.Container>
    </s.Wrapper>
  )
};

export default CalendarDays;
