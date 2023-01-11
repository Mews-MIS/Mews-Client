import styled from "@emotion/styled";
import theme from "@styles/Theme";

export const Wrapper = styled.div`
    height: 100vh;
    overflow: hidden;
`;

export const CloseIcon = styled.div`
    display: flex;
    position: fixed;
    margin-top: 3%;
    margin-left: 3%;
    cursor: pointer;
`;

export const MenuContainer = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;


export const Mypage = styled.div`
    margin: 7%;
    font-size: ${theme.FONT_SIZE.TITLE_SIZE};
    cursor: pointer;
    &:hover{
        color: ${theme.COLORS.BRIGHT_ORANGE};
        font-weight: bold;
    }
`;

export const Login = styled.div`
    margin: 7%;
    font-size: ${theme.FONT_SIZE.TITLE_SIZE};
    cursor: pointer;
    &:hover{
        color: ${theme.COLORS.BRIGHT_ORANGE};
        font-weight: bold;
    }
`;

export const MewsIntro = styled.div`
    margin: 7%;
    font-size: ${theme.FONT_SIZE.TITLE_SIZE};
    cursor: pointer;
    &:hover{
        color: ${theme.COLORS.BRIGHT_ORANGE};
        font-weight: bold;
    }
`;

export const AuthorIntro = styled.div`
    margin: 7%;
    font-size: ${theme.FONT_SIZE.TITLE_SIZE};
    cursor: pointer;
    &:hover{
        color: ${theme.COLORS.BRIGHT_ORANGE};
        font-weight: bold;
    }
`;