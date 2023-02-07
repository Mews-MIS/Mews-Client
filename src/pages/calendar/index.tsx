import React from "react";
import * as s from "./styles";
import MoveMonth from "@components/MoveMonth";
import CalendarLayout from "@components/CalendarLayout";
import PageTemplate from "@components/PageTemplate";
import ScheduleLayout from "@components/ScheduleLayout";

const Calendar = () => {

  return (
    <PageTemplate>
      <s.Wrapper>
        <s.TopContainer>
          <MoveMonth />
          <CalendarLayout />
        </s.TopContainer>
        <ScheduleLayout />
      </s.Wrapper>
    </PageTemplate>
  )
};

export default Calendar;