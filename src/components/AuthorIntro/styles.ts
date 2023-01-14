import styled from "@emotion/styled";
import theme from "@styles/Theme";

export const ProfileContainer = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${theme.COLORS.CONTAINER_WHITE};
`;
export const ProfileBox = styled.div`
  display: flex;
  width: 80%;
  justify-content: space-evenly;
  align-items: center;
`;
export const ProfileImage = styled.div`
  width: 80px;
  height: 80px;
  background-color: ${theme.COLORS.LINE_GRAY};
  border-radius: 50px;
`;
export const ProfileTextLabel = styled.div`
  display: flex;
  margin-left: 3%;
  height: 100%;
  flex-direction: column;
`;
export const ProfileAuthorName = styled.div`
  margin-bottom: 2%;
  font-weight: ${theme.FONT_WEIGHT.BOLD};
  font-size: ${theme.FONT_SIZE.SUB_TITLE_SIZE};
`;
export const ProfileIntro = styled.div`
  margin-top: 2%;
  font-weight: ${theme.FONT_WEIGHT.BOLD};
  font-size: ${theme.FONT_SIZE.SMALL_SIZE};
`;
