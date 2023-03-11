import CalendarDays from "@components/CalendarDays";
// eslint-disable-next-line import/no-cycle
import DayItem from "@components/DayItem";
import { addDays, endOfMonth, format, startOfDay, startOfMonth, startOfWeek, isWithinInterval } from "date-fns";
import { useEffect, useMemo } from "react";
import { useRecoilValue, useRecoilValueLoadable, useSetRecoilState } from "recoil";
import calendarInfoAllSelector from "src/states/calendarInfoAll";
import selectedDate from "src/states/selectedDate";
import * as s from "./styles";

export interface IPropsDayItem {
  year: number;
  month: number;
  day: number;
  isToday: boolean;
  isSelected: boolean;
  isCurrentMonth: boolean;
  categories: string[];
}

export interface IDayItem {
  title?: string;
  startDate: number[];
  endDate: number[];
  category: string;
}

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
  const categories: IDayItem[] = [];
  const dayList: Map<string, string[]> = new Map<string, string[]>();

  useEffect(() => {
    switch (allCalendarDateLoadable.state) {
      case "hasValue":
        allCalendarDateLoadable.contents.map((item: IDayItem) =>
          categories.push({ category: item.category, startDate: item.startDate, endDate: item.endDate })
        );
        // eslint-disable-next-line array-callback-return
        categories.map((item) => {
          if (!dayList.get(`${item.startDate[0]}_${item.startDate[1]}_${item.startDate[2]}`)) {
            dayList.set(`${item.startDate[0]}_${item.startDate[1]}_${item.startDate[2]}`, [
              item.category,
            ]);
          } else
            dayList.set(`${item.startDate[0]}_${item.startDate[1]}_${item.startDate[2]}`, [
              ...dayList.get(`${item.startDate[0]}_${item.startDate[1]}_${item.startDate[2]}`)!,
              item.category,
            ]);
        });
        console.log({dayList});
        console.log({ categories });
        break;

      default:
        console.log(allCalendarDateLoadable.state);
    }
  }, [allCalendarDateLoadable, categories, dayList]);

  switch (allCalendarDateLoadable.state) {
    case "hasValue":
      allCalendarDateLoadable.contents.map((item: IDayItem) =>
        categories.push({ category: item.category, startDate: item.startDate, endDate: item.endDate })
      );
      // eslint-disable-next-line array-callback-return
      categories.map((item) => {
        if (!dayList.get(`${item.startDate[0]}_${item.startDate[1]}_${item.startDate[2]}`)) {
          dayList.set(`${item.startDate[0]}_${item.startDate[1]}_${item.startDate[2]}`, [
            item.category,
          ]);
        } else
          dayList.set(`${item.startDate[0]}_${item.startDate[1]}_${item.startDate[2]}`, [
            ...dayList.get(`${item.startDate[0]}_${item.startDate[1]}_${item.startDate[2]}`)!,
            item.category,
          ]);
      });
      break;

    case "hasError":
      throw allCalendarDateLoadable.contents;
      
    default:
      console.log(allCalendarDateLoadable.state);
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
                        dayList.has(
                          `${+format(day, "yyyy")}_${+format(day, "M")}_${+format(day, "dd")}`
                        ) && isWithinInterval(day, {start: new Date(day.getFullYear(), day.getMonth(),day.getDate()-10), end: new Date(day.getFullYear(), day.getMonth(),day.getDate()+10)})
                          ? dayList.get(
                              `${+format(day, "yyyy")}_${+format(day, "M")}_${+format(day, "dd")}`
                            )!
                          : [""]
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
