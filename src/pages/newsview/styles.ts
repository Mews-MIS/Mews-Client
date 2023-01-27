import styled from "@emotion/styled";
import theme from "@styles/Theme";

export const Wrapper = styled.div`
  width: 100vw;
  background-color: ${theme.COLORS.CONTAINER_WHITE};
  display: flex;
  flex-direction: column;
`;

export const newsviewContainer = styled.div`
  height: 100vh;
`;

export const newsContainer = styled.div`
  dispaly: flex;
  align-content: space-between;
  margin-bottom: 7px;
  border-bottom: 1px solid ${theme.COLORS.MAIN_ORANGE};
  jusstity-content: space-evenly;
`;

export const newsImageBox = styled.div`
  height: 30vh;
  margin: 4% 0 4% 0;
  background-color: ${theme.COLORS.LINE_GRAY};
`;
export const detail = styled.div`
  margin-left: 4%;
`;
export const category = styled.div`
  color: #ffbd29;
  margin: 1.5% 0 1.5% 0;
  font-size: ${theme.FONT_SIZE.SMALL_SIZE};
`;
export const date = styled.div`
  margin: 1% 0 1% 0;
  color: #808080;
  font-size: ${theme.FONT_SIZE.SMALL_SIZE};
`;

export const title = styled.div`
  font-size: ${theme.FONT_SIZE.TITLE_SIZE};
  font-weight: ${theme.FONT_WEIGHT.BOLD};
  white-space: pre-wrap;
`;
export const contentBox = styled.div`
  display: flex;
  justify-content: center;
`;
export const content = styled.div`
  display: flex;
  width: 90vw;
  font-size: ${theme.FONT_SIZE.MAIN_SIZE};
  font-weight: ${theme.FONT_WEIGHT.DEFAULT};
`;
