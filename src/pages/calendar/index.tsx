import React from "react";
import * as s from "./styles";
import {useRecoilValue} from "recoil";
import selectedDate from "src/states/selectedDate";

const Calendar = () => {
  const currentDate = useRecoilValue(selectedDate);

  return (
    <s.Wrapper>
      {currentDate.year + " "}
      {currentDate.month+1 + " "}
      {currentDate.day}
    </s.Wrapper>
  )
};

export default Calendar;