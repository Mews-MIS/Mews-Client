import styled from "@emotion/styled";
import theme from "@styles/Theme";

// eslint-disable-next-line import/prefer-default-export
export const Wrapper = styled.div`
  display: flex;
  width: 100%;

  align-items: center;

  color: ${theme.COLORS.BLACK};
  font-size: ${theme.FONT_SIZE.MAIN_SIZE};

  svg {
    margin-top: auto;
    margin-bottom: auto;
    margin-right: 10px;
    filter: ${theme.COLORS.FILTER_GRAY};
  }
`;
