import ScheduleCategory from "@components/ScheduleCategory";
import React, { useEffect } from "react";
import { useRecoilValueLoadable } from "recoil";
import { IScheduleItemProps } from "src/interfaces/ISchedules";
import calendarInfoDetailsSelector from "src/states/calendarInfoDetails";
import * as s from "./styles";

const ScheduleLayout = () => {
  const selectedDateLoadable = useRecoilValueLoadable(calendarInfoDetailsSelector);
  const titleDGUniv: string[] = [];
  const titleMIS: string[] = [];
  const titleMews: string[] = [];

  /* React Hydration 문제 해결 - 렌더링 된 요소 <-> 가상 돔 요소 동기화 */
  useEffect(() => {
    switch (selectedDateLoadable.state) {
      case "hasValue":
        selectedDateLoadable.contents.map((item: IScheduleItemProps) => {
          if (item.category === "동국대학교") titleDGUniv.push(item.title);
          if (item.category === "경영정보학과") titleMIS.push(item.title);
          if (item.category === "Mews") titleMews.push(item.title);
          return null;
        });
        break;
      default:
        break;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedDateLoadable]);

  switch (selectedDateLoadable.state) {
    case "hasValue":
      selectedDateLoadable.contents.map((item: IScheduleItemProps) => {
        if (item.category === "동국대학교") titleDGUniv.push(item.title);
        if (item.category === "경영정보학과") titleMIS.push(item.title);
        if (item.category === "Mews") titleMews.push(item.title);
        return null;
      });

      return (
        <s.Wrapper>
          <ScheduleCategory category="동국대학교" titles={titleDGUniv} />
          <ScheduleCategory category="경영정보학과" titles={titleMIS} />
          <ScheduleCategory category="Mews" titles={titleMews} />
        </s.Wrapper>
      );

    case "loading":
      return <div>Loading..</div>;
    case "hasError":
      throw selectedDateLoadable.contents;
    default:
      break;
  }

  return <div />;
};

export default ScheduleLayout;
