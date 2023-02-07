import CalendarDays from '@components/CalendarDays';
import DayItem from '@components/DayItem';
import { addDays, endOfMonth, format, startOfDay, startOfMonth, startOfWeek } from 'date-fns';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import selectedDate from 'src/states/selectedDate';
import * as s from "./styles";

export interface IPropsDayItem {
  year: number,
  month: number,
  day: number,
  isToday: boolean,
  isSelected: boolean,
  categories: string[]
}

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
  
  return (
    <s.Wrapper>
      <s.Container>
        <s.LayoutWrapper>
        <CalendarDays />
          <s.MonthWrapper>
            {
              data.map((week, _) => 
                <s.WeekWrapper>
                  {
                    week.map((day, _) => 
                      <s.DayWrapper onClick={() => setSelectedDate(day)}>
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
                          categories={["동국대학교", "Mews"]} 
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
