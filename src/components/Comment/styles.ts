import styled from "@emotion/styled";
import theme from "@styles/Theme";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
`;
export const CommentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 90vw;
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
  width: 70vw;
  padding: 5%;
  border-radius: 100px;
  border: 1px solid ${theme.COLORS.BRIGHT_ORANGE};
  background-color: ${theme.COLORS.CONTAINER_WHITE};
  font-size: ${theme.FONT_SIZE.MAIN_SIZE};
`;
export const CommentBtn = styled.button`
  width: 20vw;
  padding: 5%;
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
  margin-right: 2vw;
  font-size: h2;
  font-weight: ${theme.FONT_WEIGHT.BOLD};
  font-size: ${theme.FONT_SIZE.SMALL_SIZE};
`;
export const ul = styled.ul`
  margin: 1px;
`;
export const li = styled.li``;
