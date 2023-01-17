import styled from "@emotion/styled";
import theme from "@styles/Theme";

export const Wrapper = styled.div`
  width: 100%;
  padding: 20px 0;
  margin-bottom: 23px;

  background-color: ${theme.COLORS.CONTAINER_WHITE};
`;

export const WrapperName = styled.p`
  width: 80%;
  text-align: left;

  font-size: ${theme.FONT_SIZE.TITLE_SIZE};
  font-weight: ${theme.FONT_WEIGHT.BOLD};
`;

export const TopArea = styled.div`
  display: flex;
  align-items: center;

  margin-bottom: 20px;

  font-size: ${theme.FONT_SIZE.SMALL_SIZE};

  div {
    width: 50%;
    text-align: right;
    color: ${theme.COLORS.FONT_YELLOW};
  }
`;
