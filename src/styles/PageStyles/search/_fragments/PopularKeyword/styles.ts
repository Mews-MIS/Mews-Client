import styled from "@emotion/styled";
import theme from "@styles/Theme";

// eslint-disable-next-line import/prefer-default-export
export const Wrapper = styled.div`
  display: flex;
  text-align: left;
  align-items: center;
  color: ${theme.COLORS.BLACK};
  font-size: ${theme.FONT_SIZE.MAIN_SIZE};

  width: 100%;
  height: 30px;

  .Rank {
    color: ${theme.COLORS.MAIN_ORANGE};
    font-weight: ${theme.FONT_WEIGHT.BOLD};
    text-align: center;
    margin-right: 10px;
    width: 20px;
  }
`;
