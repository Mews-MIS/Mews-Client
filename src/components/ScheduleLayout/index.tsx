import ScheduleCategory from '@components/ScheduleCategory';
import React, { useEffect } from 'react';
import { useRecoilValue, useRecoilValueLoadable } from 'recoil';
import calendarInfoDetailsSelector from 'src/states/calendarInfoDetails';
import * as s from "./styles";

export interface IScheduleCategory {
  category: string,
  titles: string[]
};

interface IScheduleItem {
  category: string,
  title: string,
  startDate: number[],
  endDate: number[]
}

const ScheduleLayout = () => {
  const selectedDateLoadable = useRecoilValueLoadable(calendarInfoDetailsSelector);
  let titleDGUniv: string[] = [];
  let titleMIS: string[] = [];
  let titleMews: string[] = [];

  /* React Hydration 문제 해결 - 렌더링 된 요소 <-> 가상 돔 요소 동기화 */
  useEffect(() => {
    switch(selectedDateLoadable.state){
      case 'hasValue':
        selectedDateLoadable.contents.map((item: IScheduleItem) => {
          if(item.category === "동국대학교") titleDGUniv.push(item.title);
          if(item.category === "경영정보학과") titleMIS.push(item.title);
          if(item.category === "Mews") titleMews.push(item.title);
        });
    }
  }, [selectedDateLoadable]);

  switch(selectedDateLoadable.state){
    case 'hasValue':
      selectedDateLoadable.contents.map((item: any) => {
        if(item.category === "동국대학교") titleDGUniv.push(item.title);
        if(item.category === "경영정보학과") titleMIS.push(item.title);
        if(item.category === "Mews") titleMews.push(item.title);
      });

      return(
        <s.Wrapper>
        <ScheduleCategory category={"동국대학교"} titles={titleDGUniv} />
        <ScheduleCategory category={"경영정보학과"} titles={titleMIS} />
        <ScheduleCategory category={"Mews"} titles={titleMews} />
      </s.Wrapper>
      );
    
    case 'loading':
      return <div>Loading...</div>;
    case 'hasError':
      throw selectedDateLoadable.contents;
  };
};

export default ScheduleLayout; 