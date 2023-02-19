import CalendarDays from '@components/CalendarDays';
import DayItem from '@components/DayItem';
import { addDays, endOfMonth, format, startOfDay, startOfMonth, startOfWeek } from 'date-fns';
import { useEffect } from 'react';
import { useRecoilValue, useRecoilValueLoadable, useSetRecoilState } from 'recoil';
import calendarInfoAllSelector from 'src/states/calendarInfoAll';
import selectedDate from 'src/states/selectedDate';
import * as s from "./styles";

export interface IPropsDayItem {
  year: number,
  month: number,
  day: number,
  isToday: boolean,
  isSelected: boolean,
  isCurrentMonth: boolean,
  categories: string[]
};

export interface IDayItem {
  title?: string,
  startDate: number[],
  endDate?: number[],
  category: string
};

const CalendarLayout = () => {
  let selectedDateState = useRecoilValue(selectedDate);
  const setSelectedDate = useSetRecoilState(selectedDate);

  const getWeek = (selectedRecoilValue: Date) => {
    let date = startOfWeek(startOfDay(selectedRecoilValue));

    const takeWeek = () => {
      const week = [...Array(7)].map((_, index) => addDays(date, index));
      date = addDays(week[6], 1);
      return week;
    }

    return takeWeek;
  }

  const getMonth = (selectedRecoilValue: Date) => {
    let month: Date[][] = [];
    let date = selectedRecoilValue;

    const lastDayOfRange = (range: Date[][]) => {
      return range[range.length-1][6];
    };

    const takeMonth = () => {
      const weekGenerator = getWeek(startOfMonth(date));
      const endDate = startOfDay(endOfMonth(date));
      month.push(weekGenerator());

      while(lastDayOfRange(month) < endDate){
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
  let categories: IDayItem[] = [];
  let dayList: Map<string, string[]> = new Map<string, string[]>();

  useEffect(() => {
    switch(allCalendarDateLoadable.state){
      case 'hasValue':
        allCalendarDateLoadable.contents.map((item: IDayItem) => 
          categories.push({category: item.category, startDate: item.startDate})
        );
        categories.map((item) => {
          if(!dayList.get(`${item.startDate[0]}_${item.startDate[1]}_${item.startDate[2]}`)) {
            dayList.set(`${item.startDate[0]}_${item.startDate[1]}_${item.startDate[2]}`, [item.category]);
          }
          else dayList.set(`${item.startDate[0]}_${item.startDate[1]}_${item.startDate[2]}`, [...dayList.get(`${item.startDate[0]}_${item.startDate[1]}_${item.startDate[2]}`)!, item.category]);
        })
        console.log(dayList);
        console.log({categories});
    }
  }, [allCalendarDateLoadable, dayList]);

  switch(allCalendarDateLoadable.state){
    case 'hasValue':
      allCalendarDateLoadable.contents.map((item: IDayItem) => 
          categories.push({category: item.category, startDate: item.startDate})
        );
        categories.map((item) => {
          if(!dayList.get(`${item.startDate[0]}_${item.startDate[1]}_${item.startDate[2]}`)) {
            dayList.set(`${item.startDate[0]}_${item.startDate[1]}_${item.startDate[2]}`, [item.category]);
          }
          else dayList.set(`${item.startDate[0]}_${item.startDate[1]}_${item.startDate[2]}`, [...dayList.get(`${item.startDate[0]}_${item.startDate[1]}_${item.startDate[2]}`)!, item.category]);
        })
        break;
    case 'hasError':
      throw allCalendarDateLoadable.contents;
  }

  return (
    <s.Wrapper>
      <s.Container>
        <s.LayoutWrapper>
        <CalendarDays />
          <s.MonthWrapper>
            {
              data.map((week, _) => 
                <s.WeekWrapper key={_}>
                  {
                    week.map((day, __) => 
                      <s.DayWrapper onClick={() => setSelectedDate(day)} key={__}>
                        <DayItem 
                          year={+format(day, 'yyyy')}
                          month={+format(day, 'M')} 
                          day={+format(day, 'dd')} 
                          isToday={
                            (day.getDate() === (new Date()).getDate() &&
                            day.getMonth() === (new Date()).getMonth() &&
                            day.getFullYear() === (new Date()).getFullYear()) 
                            ?  true : false
                          }
                          isSelected={
                            (day.getDate() === selectedDateState.getDate() &&
                            day.getMonth() === selectedDateState.getMonth() &&
                            day.getFullYear() === selectedDateState.getFullYear()) 
                            ?  true : false
                          }
                          isCurrentMonth={
                            day.getMonth() === selectedDateState.getMonth()
                            ? true : false
                          }
                          categories={
                            dayList.has(`${+format(day, 'yyyy')}_${+format(day, 'M')}_${+format(day, 'dd')}`) ? 
                            dayList.get(`${+format(day, 'yyyy')}_${+format(day, 'M')}_${+format(day, 'dd')}`)! : [""]
                          } 
                        />
                      </s.DayWrapper>
                    )
                  }
                </s.WeekWrapper>
              )
            }
          </s.MonthWrapper>
        </s.LayoutWrapper>
        
      </s.Container>
    </s.Wrapper>
  )
};

export default CalendarLayout;
