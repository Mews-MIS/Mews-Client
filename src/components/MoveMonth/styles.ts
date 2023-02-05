import styled from "@emotion/styled";
import theme from "@styles/Theme";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const BtnWrapper = styled.div`
  cursor: pointer;
`;

export const CurrentMonthText = styled.div`
  font-size: 6rem;
  font-weight: ${theme.FONT_WEIGHT.BOLD};
`;