import React, { Suspense } from "react";
import MoveMonth from "@components/MoveMonth";
import CalendarLayout from "@components/CalendarLayout";
import PageTemplate from "@components/PageTemplate";
import ScheduleLayout from "@components/ScheduleLayout";
import * as s from "@styles/PageStyles/calender/styles";

const Calendar = () => {
  return (
    <PageTemplate>
      <Suspense fallback={<div>Loading....</div>}>
        <s.Wrapper>
          <s.TopContainer>
            <MoveMonth />
            <CalendarLayout />
          </s.TopContainer>
          <Suspense fallback={<div>Loading...</div>}>
            <ScheduleLayout />
          </Suspense>
        </s.Wrapper>
      </Suspense>
    </PageTemplate>
  );
};

export default Calendar;
