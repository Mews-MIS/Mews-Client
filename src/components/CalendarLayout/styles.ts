import styled from "@emotion/styled";
import theme from "@styles/Theme";

export const Wrapper = styled.div`
  padding: 0 5vw;
`;

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const LayoutWrapper = styled.div`
  width: 95%;
  background-color: ${theme.COLORS.CONTAINER_WHITE};
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
