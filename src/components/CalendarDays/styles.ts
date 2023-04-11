import styled from "@emotion/styled";
import theme from "@styles/Theme";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

export const DayWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
`;

export const Day = styled.div`
  display: flex;
  justify-content: center;
  color: ${theme.COLORS.BLACK};
  font-size: 5.5rem;
  font-weight: ${theme.FONT_WEIGHT.BOLD};
`;
