import styled from "@emotion/styled";
import theme from "@styles/Theme";

export const Wrapper = styled.div``;

export const TopContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${theme.COLORS.CONTAINER_WHITE};
`;

export const ProfileContainer = styled.div`
  display: flex;
  width: 80%;
  flex-direction: row;
  margin: 2%;
`;

export const ImageBox = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 70%;
  overflow: hidden;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin-left: 3%;
  justify-content: center;
`;

export const Name = styled.div`
  display: flex;
  font-size: ${theme.FONT_SIZE.SUB_TITLE_SIZE};
  font-weight: ${theme.FONT_WEIGHT.BOLD};
  margin-bottom: 1%;
`;

export const Introduce = styled.div`
  display: flex;
  font-size: ${theme.FONT_SIZE.SMALL_SIZE};
  margin-top: 1%;
`;

export const EditProfileBtn = styled.button`
  width: 85%;
  height: 40px;
  margin-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${theme.COLORS.CONTAINER_WHITE};
  background: ${theme.COLORS.BRIGHT_ORANGE};
  border-radius: 10px;
  border-color: transparent;
  cursor: pointer;
`;

export const ArticleNumberContainer = styled.div`
  width: 60%;
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
`;

export const ArticleNumberItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
`;

export const Num = styled.div`
  color: ${theme.COLORS.BRIGHT_ORANGE};
  font-size: ${theme.FONT_SIZE.TITLE_SIZE};
  font-weight: ${theme.FONT_WEIGHT.BOLD};
`;

export const Type = styled.div`
  margin-top: 60%;
  font-weight: ${theme.FONT_WEIGHT.BOLD};
  margin-bottom: 60%;
`;

export const BottomContainer = styled.div`
  margin-top: 25px;
  height: 55%;
  background: ${theme.COLORS.CONTAINER_WHITE};
`;
