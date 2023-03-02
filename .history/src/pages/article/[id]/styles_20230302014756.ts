import styled from "@emotion/styled";
import theme from "@styles/Theme";

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${theme.COLORS.CONTAINER_WHITE};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 70px;
  padding-bottom: 70px;
`;

export const newsviewContainer = styled.section`
  background-color: ${theme.COLORS.CONTAINER_WHITE};
`;

export const newsTitleContainer = styled.section`
  display: flex;
`;

export const newsTitleBox = styled.div`
  display: flex;
  flex-direction: column;
`;
export const category = styled.div`
  color: #ffbd29;
  margin: 5px 0 5px 0;
  font-size: ${theme.FONT_SIZE.SMALL_SIZE};
`;
export const title = styled.p`
  font-size: ${theme.FONT_SIZE.TITLE_SIZE};
  font-weight: ${theme.FONT_WEIGHT.BOLD};
  white-space: pre-wrap;
`;
export const date = styled.div`
  margin: 5px 0 5px 0;
  color: #808080;
  font-size: ${theme.FONT_SIZE.SMALL_SIZE};
`;
export const newsImageContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 50%;
  max-height: 900px;
  max-width: 1200px;
  min-height: 300px;
  min-width: 400px;
  margin: 10px 0 10px 0;
  background-color: ${theme.COLORS.LINE_GRAY};
`;

export const contentBox = styled.section`
  display: flex;
  justify-content: center;
`;
export const content = styled.article`
  display: flex;
  width: 56vw;
  min-width: 400px;
  max-width: 1200px;
  padding: 0 10px 0 10px;
  font-size: ${theme.FONT_SIZE.MAIN_SIZE};
  font-weight: ${theme.FONT_WEIGHT.DEFAULT};
  line-height: 3vh;
`;
export const AuthorIntroContainer = styled.div`
  margin-top: 4%;
`;

export const BottomContainer = styled.div`
  display: flex;
  justify-content: center;
`;
export const BtnContainer = styled.div`
  padding: 10px 0 10px 0;
  border-top: 1px solid ${theme.COLORS.MAIN_ORANGE};
  display: flex;
  width: 90vw;
  justify-content: flex-end;
`;

export const LikeIconContainer = styled.div`
margin-right: 7px;
filter: ${theme.COLORS.FILTER_GRAY};
  &.active {
    filter: ${theme.COLORS.FILTER_RED};`;

export const BookmarkIconContainer = styled.div`
margin-right:7px;
filter: ${theme.COLORS.FILTER_GRAY};
  &.active {
    filter: ${theme.COLORS.FILTER_ORANGE};`;

export const LinkIconContainer = styled.div`
  filter: #737373;
`;

export const ArticleBottomContainer = styled.div`
  display: flex;

  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const ArticleBottomBox = styled.div`
  width: 56vw;
  min-width: 400px;
  max-width: 1200px;
`;
