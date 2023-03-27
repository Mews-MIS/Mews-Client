import styled from "@emotion/styled";
import theme from "@styles/Theme";

export const IconContainer = styled.div`
  width: 35px;
  height: 35px;
  filter: ${theme.COLORS.FILTER_GRAY};
  &.active {
    filter: ${theme.COLORS.FILTER_RED};
  }
`;
