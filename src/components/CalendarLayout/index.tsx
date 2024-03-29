/* eslint-disable react/no-array-index-key */
import DayItem from "@components/DayItem";
import CalendarDays from "@components/CalendarDays";
import {
  addDays,
  endOfMonth,
  format,
  isWithinInterval,
  startOfDay,
  startOfMonth,
  startOfWeek,
} from "date-fns";
import { useEffect } from "react";
import { useRecoilValue, useRecoilValueLoadable, useSetRecoilState } from "recoil";
import { IDayItem } from "src/interfaces/ICalendar";
import calendarInfoAllSelector from "src/states/calendarInfoAll";
import selectedDate from "src/states/selectedDate";
import * as s from "./styles";

const CalendarLayout = () => {
  const selectedDateState = useRecoilValue(selectedDate);
  const setSelectedDate = useSetRecoilState(selectedDate);

  const getWeek = (selectedRecoilValue: Date) => {
    let date = startOfWeek(startOfDay(selectedRecoilValue));

    const takeWeek = () => {
      const week = [...Array(7)].map((_, index) => addDays(date, index));
      date = addDays(week[6], 1);
      return week;
    };

    return takeWeek;
  };

  const getMonth = (selectedRecoilValue: Date) => {
    let month: Date[][] = [];
    let date = selectedRecoilValue;

    const lastDayOfRange = (range: Date[][]) => {
      return range[range.length - 1][6];
    };

    const takeMonth = () => {
      const weekGenerator = getWeek(startOfMonth(date));
      const endDate = startOfDay(endOfMonth(date));
      month.push(weekGenerator());

      while (lastDayOfRange(month) < endDate) {
        month.push(weekGenerator());
      }

      const range = month;
      month = [];
      date = addDays(lastDayOfRange(range), 1);

      return range;
    };

    return takeMonth;
  };

  const data = getMonth(selectedDateState)();

  const allCalendarDateLoadable = useRecoilValueLoadable(calendarInfoAllSelector);
  const eachCategories: IDayItem[] = [];

  useEffect(() => {
    switch (allCalendarDateLoadable.state) {
      case "hasValue":
        allCalendarDateLoadable.contents.map((item: IDayItem) =>
          eachCategories.push({
            category: item.category,
            startDate: item.startDate,
            endDate: item.endDate,
          })
        );
        break;
      default:
        break;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [allCalendarDateLoadable]);

  switch (allCalendarDateLoadable.state) {
    case "hasValue":
      allCalendarDateLoadable.contents.map((item: IDayItem) =>
        eachCategories.push({
          category: item.category,
          startDate: item.startDate,
          endDate: item.endDate,
        })
      );
      break;
    case "hasError":
      throw allCalendarDateLoadable.contents;
    default:
      break;
  }

  return (
    <s.Wrapper>
      <s.Container>
        <s.LayoutWrapper>
          <CalendarDays />
          <s.MonthWrapper>
            {data.map((week, _) => (
              <s.WeekWrapper key={_}>
                {week.map((day, __) => (
                  <s.DayWrapper onClick={() => setSelectedDate(day)} key={__}>
                    <DayItem
                      year={+format(day, "yyyy")}
                      month={+format(day, "M")}
                      day={+format(day, "dd")}
                      isToday={
                        !!(
                          day.getDate() === new Date().getDate() &&
                          day.getMonth() === new Date().getMonth() &&
                          day.getFullYear() === new Date().getFullYear()
                        )
                      }
                      isSelected={
                        !!(
                          day.getDate() === selectedDateState.getDate() &&
                          day.getMonth() === selectedDateState.getMonth() &&
                          day.getFullYear() === selectedDateState.getFullYear()
                        )
                      }
                      isCurrentMonth={day.getMonth() === selectedDateState.getMonth()}
                      categories={
                        eachCategories &&
                        eachCategories.map((d) => {
                          if (
                            isWithinInterval(day, {
                              start: new Date(d.startDate[0], d.startDate[1] - 1, d.startDate[2]),
                              end: new Date(d.endDate[0], d.endDate[1] - 1, d.endDate[2]),
                            })
                          ) {
                            return d.category;
                          }
                          return "";
                        })
                      }
                    />
                  </s.DayWrapper>
                ))}
              </s.WeekWrapper>
            ))}
          </s.MonthWrapper>
        </s.LayoutWrapper>
      </s.Container>
    </s.Wrapper>
  );
};

export default CalendarLayout;
