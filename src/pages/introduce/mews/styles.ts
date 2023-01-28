import styled from "@emotion/styled";
import theme from "@styles/Theme";

export const Wrapper = styled.div`
  display: flex;
  height: 65vh;
`;

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

export const Text = styled.div`
  color: ${theme.COLORS.LINE_GRAY};
  font-size: ${theme.FONT_SIZE.SUB_TITLE_SIZE};
  max-width: 170px;
  text-align: center;
`;