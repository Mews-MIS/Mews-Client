import styled from "@emotion/styled";
import theme from "@styles/Theme";

export const Wrapper = styled.div`
  margin-top: 50px;
  margin-left: 20px;
  margin-right: 20px;
  background-color: ${theme.COLORS.CONTAINER_WHITE};
`;

export const Text = styled.div`
  color: ${theme.COLORS.BLACK};
  font-size: ${theme.FONT_SIZE.TITLE_SIZE};
  font-weight: ${theme.FONT_WEIGHT.BOLD};
`;