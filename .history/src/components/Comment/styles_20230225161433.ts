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
  justify-content: center;
  display: flex;
  flex-direction: column;
  width: 56vw;
  min-width: 400px;
  max-width: 1200px;
`;

export const CommentContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const CommentForm = styled.form`
  align-items: center;
  display: flex;
`;
export const CommentInput = styled.input`
  width: 50vw;
  min-width: 300px;
  max-width: 1000px;
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
  width: 5vw;
  min-width: 50px;
  max-width: 100px;
  margin-left: 1vw;
  padding: 1px;
  display: flex;
  justify-content: center;
  font-weight: ${theme.FONT_WEIGHT.BOLD};
  font-size: ${theme.FONT_SIZE.SMALL_SIZE};
  border: none;
  background-color: ${theme.COLORS.CONTAINER_WHITE};
`;
export const CommentListContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
export const CommentListBox = styled.div`
  display: flex;
  flex-direction: column;
`;
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
`;
export const CommentName = styled.h2`
  margin-right: 2px;
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
