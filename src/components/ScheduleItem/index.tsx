import { IScheduleItem } from '@components/ScheduleCategory';
import React from 'react';
import * as s from "./styles";

const ScheduleItem = ({title, Color}: IScheduleItem) => {

  return (
    <s.Wrapper>
      <s.Container>
        <s.Label color={Color}/>
        <s.Title>{title}</s.Title>
      </s.Container>
    </s.Wrapper>
  )
};

export default ScheduleItem;