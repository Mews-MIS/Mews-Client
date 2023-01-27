import styled from "@emotion/styled";
import theme from "@styles/Theme";

export const Wrapper = styled.div`
  border-radius: 10px 0 0 10px;
  /* border: 3px solid ${theme.COLORS.LINE_GRAY}; */
  background-color: ${theme.COLORS.BRIGHT_ORANGE};
  height: 100%;
  width: 30%;
  right: -30%;
  top: 0;
  position: fixed;
  transition: 0.5s ease;
  opacity: 85%;
  &.open {
    right: 0;
    transition: 0.5s ease;
  }
`;

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 40%;
`;

export const MenuText = styled.div`
  font-size: ${theme.FONT_SIZE.TITLE_SIZE};
  font-weight: ${theme.FONT_WEIGHT.BOLD};
  color: ${theme.COLORS.BLACK};
  margin-top: 10%;
`;