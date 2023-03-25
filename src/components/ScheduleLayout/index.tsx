import ScheduleCategory from "@components/ScheduleCategory";
import { isWithinInterval } from "date-fns";
import React, { useEffect, useState } from "react";
import { useRecoilValue, useRecoilValueLoadable } from "recoil";
import { IScheduleItemProps } from "src/interfaces/ISchedules";
import calendarInfoAllSelector from "src/states/calendarInfoAll";
import calendarInfoDetailsSelector from "src/states/calendarInfoDetails";
import { selectedDateSelector } from "src/states/selectedDate";
import * as s from "./styles";

const ScheduleLayout = () => {
  const selectedDateLoadable = useRecoilValueLoadable(calendarInfoDetailsSelector);
  const [titleDGUniv, setTitleDGUniv] = useState<string[]>([]);
  const [titleMIS, setTitleMIS] = useState<string[]>([]);
  const [titleMews, setTitleMews] = useState<string[]>([]);

  const allCalendarDateLoadable = useRecoilValueLoadable(calendarInfoAllSelector);
  const eachCategories: IScheduleItemProps[] = [];

  const selectedDate = useRecoilValue(selectedDateSelector);

  useEffect(() => {
    setTitleDGUniv([]);
    setTitleMIS([]);
    setTitleMews([]);
    if (eachCategories) {
      eachCategories.map((d) => {
        if (
          isWithinInterval(selectedDate, {
            start: new Date(d.startDate[0], d.startDate[1] - 1, d.startDate[2]),
            end: new Date(d.endDate[0], d.endDate[1] - 1, d.endDate[2]),
          })
        ) {
          if (d.category === "동국대학교") {
            setTitleDGUniv([d.title]);
          }
          if (d.category === "경영정보학과") {
            setTitleMIS([d.title]);
          }
          if (d.category === "Mews") {
            setTitleMews([d.title]);
          }
        }
        return null;
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedDate]);

  if (eachCategories) {
    eachCategories.map((d) => {
      if (
        isWithinInterval(selectedDate, {
          start: new Date(d.startDate[0], d.startDate[1] - 1, d.startDate[2]),
          end: new Date(d.endDate[0], d.endDate[1] - 1, d.endDate[2]),
        })
      ) {
        if (d.category === "동국대학교") {
          if (titleDGUniv) setTitleDGUniv([...titleDGUniv, d.title]);
          else setTitleDGUniv([d.title]);
        }
        if (d.category === "경영정보학과") {
          if (titleMIS) setTitleDGUniv([...titleMIS, d.title]);
          else setTitleMIS([d.title]);
        }
        if (d.category === "Mews") {
          if (titleMews) setTitleDGUniv([...titleMews, d.title]);
          else setTitleMews([d.title]);
        }
      }
      return null;
    });
  }

  /* 모든 정보 받아 옴 */
  useEffect(() => {
    switch (allCalendarDateLoadable.state) {
      case "hasValue":
        if (eachCategories) eachCategories.length = 0;
        allCalendarDateLoadable.contents.map((item: IScheduleItemProps) => {
          eachCategories.push({
            category: item.category,
            startDate: item.startDate,
            endDate: item.endDate,
            title: item.title,
          });
          return null;
        });
        break;
      default:
        break;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [allCalendarDateLoadable]);

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

  switch (allCalendarDateLoadable.state) {
    case "hasValue":
      if (eachCategories) eachCategories.length = 0;
      allCalendarDateLoadable.contents.map((item: IScheduleItemProps) => {
        eachCategories.push({
          category: item.category,
          startDate: item.startDate,
          endDate: item.endDate,
          title: item.title,
        });
        return null;
      });
      break;
    case "hasError":
      throw allCalendarDateLoadable.contents;
    default:
      break;
  }

  switch (selectedDateLoadable.state) {
    case "hasValue":
      selectedDateLoadable.contents.map((item: IScheduleItemProps) => {
        eachCategories.map((d) => {
          if (
            isWithinInterval(selectedDate, {
              start: new Date(d.startDate[0], d.startDate[1] - 1, d.startDate[2]),
              end: new Date(d.endDate[0], d.endDate[1] - 1, d.endDate[2]),
            })
          ) {
            if (titleDGUniv.length === 0 && item.category === "동국대학교") {
              titleDGUniv.push(item.title);
            }
            if (titleMIS.length === 0 && item.category === "경영정보학과") {
              titleMIS.push(item.title);
            }
            if (titleMews.length === 0 && item.category === "Mews") {
              titleMews.push(item.title);
            }
          }
          return null;
        });
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

  return null;
};

export default ScheduleLayout;
