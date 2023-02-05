import React from "react";
import * as s from "./styles";
import MoveMonth from "@components/MoveMonth";
import CalendarLayout from "@components/CalendarLayout";
import PageTemplate from "@components/PageTemplate";

const Calendar = () => {

  return (
    <PageTemplate>
      <s.Wrapper>
        <MoveMonth />
        <CalendarLayout />
      </s.Wrapper>
    </PageTemplate>
  )
};

export default Calendar;