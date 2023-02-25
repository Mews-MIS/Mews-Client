import styled from "@emotion/styled";
import theme from "@styles/Theme";

export const Wrapper = styled.div`
  display: flex;
  background-color: ${theme.COLORS.CONTAINER_WHITE};
  justify-content: center;
  align-items: center;
  width: 100vw;
`;
export const CommentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 56vw;
  min-width: 400px;
  max-width: 1200px;
`;

export const CommentContainer = styled.div`
  display: flex;
  align-items: center;
`;
export const CommentForm = styled.form`
  align-items: center;
  display: flex;
`;
export const CommentInput = styled.input`
  width: 50vw;
  min-width: 300px;
  max-width: 1100px;
  padding: 15px;
  border-radius: 100px;
  border: 1px solid ${theme.COLORS.BRIGHT_ORANGE};
  background-color: ${theme.COLORS.CONTAINER_WHITE};
  font-size: ${theme.FONT_SIZE.MAIN_SIZE};
  :focus {
    outline: none;
  }
`;
export const CommentBtn = styled.button`
  width: 6vw;
  min-width: 300px;
  max-width: 1100px;
  margin: 0 7px 0 7px;
  padding: 5px;
  display: flex;
  justify-content: center;
  font-weight: ${theme.FONT_WEIGHT.BOLD};
  font-size: ${theme.FONT_SIZE.SMALL_SIZE};
  border: none;
  background-color: ${theme.COLORS.CONTAINER_WHITE};
`;
export const CommentList = styled.div``;
export const CommentLabel = styled.div`
  margin-top: 2vh;
  margin-bottom: 2vh;
  font-size: ${theme.FONT_SIZE.SUB_TITLE_SIZE};
  font-weight: ${theme.FONT_WEIGHT.BOLD};
`;
export const CommentBox = styled.div`
  margin: 1vh 0 1vh 0;
`;
export const span = styled.span`
  display: flex;
  margin: 10px 0 10px 0;
`;
export const CommentName = styled.h2`
  margin-right: 2vw;
  font-weight: ${theme.FONT_WEIGHT.BOLD};
  font-size: ${theme.FONT_SIZE.MAIN_SIZE};
`;
export const Commentcontent = styled.div`
  font-size: ${theme.FONT_SIZE.MAIN_SIZE};
`;
export const ul = styled.ul`
  margin: 1px;
`;
export const li = styled.li``;
