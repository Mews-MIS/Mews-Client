import styled from "@emotion/styled";
import theme from "@styles/Theme";

export const Wrapper = styled.div``;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const LayoutWrapper = styled.div`
  width: 95%;
  background-color: rgba(255, 194, 102, 0.4);
  border-radius: 5%;
  margin-top: 20px;
`;

export const MonthWrapper = styled.div``;

export const WeekWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  margin-top: 20px;
  margin-bottom: 30px;
`;

export const DayWrapper = styled.div``;