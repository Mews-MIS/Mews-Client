import ScheduleCategory from '@components/ScheduleCategory';
import React from 'react';
import * as s from "./styles";

export interface IScheduleCategory {
  category: string,
  titles: string[]
}

const ScheduleLayout = () => {
  const tmpTitles = ["첫 번째 일정", "두 번째 일정", "세 번째 일정"];
  return (
    <s.Wrapper>
      <s.Text>Schedule</s.Text>
      <ScheduleCategory category={"동국대학교"} titles={tmpTitles} />
      <ScheduleCategory category={"경영정보학과"} titles={tmpTitles} />
      <ScheduleCategory category={"Mews"} titles={tmpTitles} />
    </s.Wrapper>
  )
};

export default ScheduleLayout;