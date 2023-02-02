import styled from "@emotion/styled";
import theme from "@styles/Theme";

export const Wrapper = styled.div`
  width: 100vw;
  height: 15vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${theme.COLORS.CONTAINER_WHITE};
`;
export const NewsItemContainer = styled.div`
  padding: 2vh 0 2vh 0;
  width: 95vw;
  height: 15vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const LeftItems = styled.div`
  display: flex;
  width: 60vw;
  margin-right: 2vw;
  flex-direction: column;
`;
export const NewsTitle = styled.div`
  font-weight: ${theme.FONT_WEIGHT.BOLD};
  font-size: ${theme.FONT_SIZE.SUB_TITLE_SIZE};
  margin-bottom: 2vh;
`;
export const AuthorContainer = styled.div`
  display: flex;
`;

export const Author = styled.div`
  color: ${theme.COLORS.LINE_GRAY};
  font-size: ${theme.FONT_SIZE.EXTRA_SMALL_SIZE};
  margin-bottom: 1vh;
  margin-right: 0.5vw;
`;
export const CountItems = styled.div`
  color: ${theme.COLORS.LINE_GRAY};
  font-size: ${theme.FONT_SIZE.EXTRA_SMALL_SIZE};
  display: flex;
  align-items: center;
`;
export const Views = styled.div`
  margin-right: 1vw;
`;
export const LikeNum = styled.div`
  margin-right: 1vw;
`;
export const BookmarkNum = styled.div``;
export const RightItems = styled.div`
  width: 30vw;
  display: flex;
`;
export const Thumbnail = styled.img`
  border-radius: 10px;
  width: 65px;
  height: 60px;
`;
export const CommentNumBox = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-left: 1vw;
  border-radius: 10px;
  justify-content: center;
  width: 35px;
  height: 60px;
  color: ${theme.COLORS.CONTAINER_WHITE};
  background-color: #ffbd29;
`;
export const CommentNum = styled.div`
  font-weight: ${theme.FONT_WEIGHT.BOLD};
  margin-bottom: 1vh;
`;
export const CommentCountLabel = styled.div`
  font-size: ${theme.FONT_SIZE.EXTRA_SMALL_SIZE};
  margin-top: 1vh;
`;
