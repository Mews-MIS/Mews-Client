import styled from "@emotion/styled";
import theme from "@styles/Theme";

const Wrapper = styled.div`
  display: flex;
  text-align: left;
  align-items: center;
  color: ${theme.COLORS.BLACK};
  font-size: ${theme.FONT_SIZE.MAIN_SIZE};

  width: 100%;
  height: 30px;

  svg {
    margin-top: auto;
    margin-bottom: auto;
    margin-right: 10px;
    filter: ${theme.COLORS.FILTER_GRAY};
  }
`;

export default Wrapper;
