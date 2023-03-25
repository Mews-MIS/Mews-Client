import styled from "@emotion/styled";
import theme from "@styles/Theme";

export const Wrapper = styled.div`
  background: ${theme.COLORS.CONTAINER_WHITE};
`;

export const TopContainer = styled.div`
  width: 85%
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  background: ${theme.COLORS.CONTAINER_WHITE};
`;

export const ProfileContainer = styled.div`
  display: flex;
  width: 80%;
`;

export const ImageBox = styled.div`
  margin-left: 10%;
  width: 80px;
  height: 80px%;
  border-radius: 50%;
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

export const AllPostContainer = styled.div`
  width: 85%;
  display: flex;
  flex-direction: row;
  margin: 0 auto;
  font-size: ${theme.FONT_SIZE.SUB_TITLE_SIZE};
  background: ${theme.COLORS.CONTAINER_WHITE};
  padding-top: 3%;
  padding-bottom: 3%;
  border-bottom: 1px solid ${theme.COLORS.BRIGHT_ORANGE};
`;
export const AllPost = styled.div`
  padding-right: 8px;
`;

export const CountPost = styled.div`
  color: ${theme.COLORS.BRIGHT_ORANGE};
`;

export const BottomContainer = styled.div`
  min-height: 90vh;
  @media (min-width: 860px) {
    width: 90%;
  }
  margin: 0 auto;
`;

export const Text = styled.div`
  margin-top: 10%;
  height: 200px;
  font-size: large;
  color: ${theme.COLORS.LINE_GRAY};
  text-align: center;
`;
