import PreviousMonthBtn from "@public/button/PreviousMonthBtn.svg";
import NextMonthBtn from "@public/button/NextMonthBtn.svg";
import { useRecoilValue, useSetRecoilState } from "recoil";
import selectedDate from "src/states/selectedDate";
import { addMonths, format, subMonths } from "date-fns";
import * as s from "./styles";

const MoveMonth = () => {
  const selectedDateState = useRecoilValue(selectedDate);
  const setSelectedDate = useSetRecoilState(selectedDate);

  const onClickPreviousBtn = () => {
    setSelectedDate(subMonths(selectedDateState, 1));
  };

  const onClickNextBtn = () => {
    setSelectedDate(addMonths(selectedDateState, 1));
  };

  return (
    <s.Wrapper>
      <s.Container>
        <s.BtnWrapper onClick={onClickPreviousBtn}>
          <PreviousMonthBtn />
        </s.BtnWrapper>

        <s.CurrentMonthText>
          {`${format(selectedDateState, "yyyy")}년 ${format(selectedDateState, "M")}월`}
        </s.CurrentMonthText>

        <s.BtnWrapper onClick={onClickNextBtn}>
          <NextMonthBtn />
        </s.BtnWrapper>
      </s.Container>
    </s.Wrapper>
  );
};

export default MoveMonth;
