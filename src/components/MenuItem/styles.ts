import styled from "@emotion/styled";
import theme from "@styles/Theme";

export const Wrapper = styled.div`
  display: flex;
`;

export const MenuItem = styled.div`
  font-size: ${theme.FONT_SIZE.TITLE_SIZE};
  font-weight: ${theme.FONT_WEIGHT.BOLD};
  cursor: pointer;
  &:hover{
    color: ${theme.COLORS.BRIGHT_ORANGE};
    font-weight: bold;
  };
`;