import styled from "@emotion/styled";
import theme from "@styles/Theme";

export const Wrapper = styled.div`
  width: 100vw;
  background-color: ${theme.COLORS.CONTAINER_WHITE};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 70px;
  padding-bottom: 70px;
`;

export const newsviewContainer = styled.section`
  width: 100vmin;
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
export const newsImageContainer = styled.img`
  width: 100vmin;
  height: 100vmin;
  display: flex;
  margin: 10px 0 10px 0;
  background-color: ${theme.COLORS.LINE_GRAY};
`;

export const contentBox = styled.section`
  display: flex;
  justify-content: center;
`;
export const content = styled.article`
  display: flex;
  font-size: ${theme.FONT_SIZE.MAIN_SIZE};
  font-weight: ${theme.FONT_WEIGHT.DEFAULT};
  line-height: 3vh;
`;
export const AuthorIntroContainer = styled.div`
  margin-top: 10px;
`;

export const BottomContainer = styled.div`
  display: flex;
`;
export const BtnContainer = styled.div`
  padding: 10px 0 10px 5px;
  border-top: 1px solid ${theme.COLORS.MAIN_ORANGE};
  width: 100vmin;
  display: flex;
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
  flex-direction: column;
`;

export const ArticleBottomBox = styled.div``;
