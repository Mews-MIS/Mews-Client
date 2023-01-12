import styled from "@emotion/styled";
import theme from "@styles/Theme";

export const Wrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
`;

export const NavContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 3%;

    background-color: ${theme.COLORS.BACKGROUND_WHITE}
`;

export const NavLeftIcon = styled.div`
    cursor: pointer;
    display: flex;
`;

export const NavRightIcons = styled.div`
    padding-right: 2%;
    display: flex;
`;

export const NavSearch = styled.div`
    cursor: pointer;
    padding-right: 5%;
`;

export const NavHamberger = styled.div`
    cursor: pointer;

`;