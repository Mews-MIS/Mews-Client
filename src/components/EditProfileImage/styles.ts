import styled from "@emotion/styled";
import theme from "@styles/Theme";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ImageBox = styled.div`
  width: 140px;
  height: 140px;
  border-radius: 70%;
  overflow: hidden;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const EditImageLabel = styled.label`
  font-size: ${theme.FONT_SIZE.SUB_TITLE_SIZE};
  color: ${theme.COLORS.CONFORM_BLUE};
  margin-top: 3%;
  cursor: pointer;
`;

export const EditImage = styled.input`
  display: none;
`;
