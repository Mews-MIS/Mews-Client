import styled from "@emotion/styled";
import theme from "@styles/Theme";

export const Wrapper = styled.div`
  display: flex;
  width: 95%;
  height: 50px;

  align-items: center;
  border-bottom: 1px solid ${theme.COLORS.MAIN_ORANGE};

  margin: 0 auto 30px auto;
  padding: 0 1vw;

  svg {
    margin-right: 20px;
  }
`;

export const SearchInput = styled.input`
  width: 100%;
  height: 100%;

  border: none;
  background-color: transparent;

  :focus {
    outline: none;
  }
`;
