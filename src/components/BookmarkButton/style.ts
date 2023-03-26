import styled from "@emotion/styled";
import theme from "@styles/Theme";

export const IconContainer = styled.div`
  filter: ${theme.COLORS.FILTER_GRAY};

  &.active {
    filter: ${theme.COLORS.FILTER_RED};
  }
`;
