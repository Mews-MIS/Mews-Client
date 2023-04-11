import styled from "@emotion/styled";
import theme from "@styles/Theme";

// eslint-disable-next-line import/prefer-default-export
export const IconContainer = styled.div`
  filter: ${theme.COLORS.FILTER_GRAY};

  &.active {
    filter: ${theme.COLORS.FILTER_ORANGE};
  }
`;
