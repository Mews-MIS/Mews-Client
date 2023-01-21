import styled from "@emotion/styled";
import theme from "@styles/Theme";

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
`;

export const NavContainer = styled.div`

  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${theme.COLORS.CONTAINER_WHITE};

`;

export const NavLeftIcon = styled.div`
  cursor: pointer;
  display: flex;
  margin-left: 5%;

`;

export const NavRightIcons = styled.div`
  padding-right: 2%;
  display: flex;
  margin-right: 5%;

`;

export const NavSearch = styled.div`
  cursor: pointer;
  padding-right: 5%;
`;

export const NavHamberger = styled.div`
  cursor: pointer;
`;
