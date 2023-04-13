import styled from "@emotion/styled";
import theme from "@styles/Theme";

export const Wrapper = styled.div`
  display: flex;
  background: ${theme.COLORS.CONTAINER_WHITE};
  width: 100vw;
  height: 100%;
  padding: 0 0 65px 10%;
`;

export const AuthorList = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  margin-top: 70px;
`;
