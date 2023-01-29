import styled from "@emotion/styled";
import theme from "@styles/Theme";

export const Wrapper = styled.div`
  margin: auto;
  background-color: ${theme.COLORS.CONTAINER_WHITE};

  &:last-child {
    margin-bottom: 0;
  }
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

  margin: 0 25px;

  font-size: ${theme.FONT_SIZE.SMALL_SIZE};

  div {
    width: 50%;
    text-align: right;
    color: ${theme.COLORS.FONT_YELLOW};
  }
`;
