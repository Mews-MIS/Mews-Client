import React, { useState } from 'react';
import * as s from "./styles";
import PreviousMonthBtn from "@public/button/PreviousMonthBtn.svg";
import NextMonthBtn from "@public/button/NextMonthBtn.svg";
import { useRecoilValue } from 'recoil';
import selectedDate from "src/states/selectedDate";
import { addMonths, format, subMonths } from 'date-fns';

const MoveMonth = () => {
  const [selectedRecoilValue, setSelectedRecoilValue] = useState(useRecoilValue(selectedDate));

  const onClickPreviousBtn = (e: React.MouseEvent<HTMLDivElement>) => {
    setSelectedRecoilValue(subMonths(selectedRecoilValue, 1));
  };

  const onClickNextBtn = (e: React.MouseEvent<HTMLDivElement>) => {
    setSelectedRecoilValue(addMonths(selectedRecoilValue, 1));
  };

  return (
    <s.Wrapper>
      <s.Container>

        <s.BtnWrapper onClick={onClickPreviousBtn}>
          <PreviousMonthBtn />
        </s.BtnWrapper>

        <s.CurrentMonthText>
          {`${format(selectedRecoilValue, 'yyyy')}년 ${format(selectedRecoilValue, 'M')}월`}
        </s.CurrentMonthText>

        <s.BtnWrapper onClick={onClickNextBtn}>
          <NextMonthBtn />
        </s.BtnWrapper>

      </s.Container>
    </s.Wrapper>
  )
};

export default MoveMonth;
