import styled from "@emotion/styled";
import theme from "@styles/Theme";

export const Wrapper = styled.div`
  width: 100%;
  height: 70px;

  display: flex;
  padding: 25px;

  color: ${theme.COLORS.FONT_YELLOW};
  background-color: ${theme.COLORS.CONTAINER_WHITE};
  font-size: ${theme.FONT_SIZE.TITLE_SIZE};
  font-weight: ${theme.FONT_WEIGHT.BOLD};

  align-items: center;
`;

export const ImageContainer = styled.div`
  width: 70px;
  height: 50px;

  margin: 20px;
`;

export const ContentNameLabel = styled.p`
  color: ${theme.COLORS.BLACK};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  font-size: ${theme.FONT_SIZE.SUB_TITLE_SIZE};
`;

export const DefaultImage = styled.div`
  width: 70px;
  height: 50px;

  background-color: ${theme.COLORS.LINE_GRAY};
`;
