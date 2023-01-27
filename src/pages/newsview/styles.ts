import styled from "@emotion/styled";
import theme from "@styles/Theme";

export const Wrapper = styled.div`
  width: 100vw;
  background-color: ${theme.COLORS.CONTAINER_WHITE};
  display: flex;
  flex-direction: column;
`;

export const newsviewContainer = styled.section`
  height: 100vh;
`;

export const newsContainer = styled.div`
  dispaly: flex;
  align-content: space-between;
  margin-bottom: 7px;
  border-bottom: 1px solid ${theme.COLORS.MAIN_ORANGE};
  jusstity-content: space-evenly;
`;

export const newsTitleBox = styled.section`
  margin-left: 4%;
`;
export const category = styled.div`
  color: #ffbd29;
  margin: 1.5% 0 1.5% 0;
  font-size: ${theme.FONT_SIZE.SMALL_SIZE};
`;
export const title = styled.div`
  font-size: ${theme.FONT_SIZE.TITLE_SIZE};
  font-weight: ${theme.FONT_WEIGHT.BOLD};
  white-space: pre-wrap;
`;
export const date = styled.div`
  margin: 1% 0 1% 0;
  color: #808080;
  font-size: ${theme.FONT_SIZE.SMALL_SIZE};
`;

export const newsImageBox = styled.div`
  height: 30vh;
  margin: 4% 0 4% 0;
  background-color: ${theme.COLORS.LINE_GRAY};
`;
export const contentBox = styled.section`
  display: flex;
  justify-content: center;
`;
export const content = styled.article`
  display: flex;
  width: 90vw;
  font-size: ${theme.FONT_SIZE.MAIN_SIZE};
  font-weight: ${theme.FONT_WEIGHT.DEFAULT};
`;

export const BtnContainer = styled.div`
  display: flex;
  flex-direction: end-start;
`;
export const LikeIconContainer = styled.div`
filter: ${theme.COLORS.FILTER_GRAY};
  &.active {
    filter: ${theme.COLORS.FILTER_RED};`;

export const BookmarkIconContainer = styled.div`
filter: ${theme.COLORS.FILTER_GRAY};
  &.active {
    filter: ${theme.COLORS.FILTER_ORANGE};`;

export const LinkIconContainer = styled.div``;
