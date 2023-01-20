import styled from "@emotion/styled";
import theme from "@styles/Theme";

export const Wrapper = styled.div`
`;

export const TopContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 15%;
    background: ${theme.COLORS.CONTAINER_WHITE};
`;

export const EditProfileBtn = styled.button`
    width: 85vw;
    display: flex;
    justify-content: center;
    
    color: ${theme.COLORS.CONTAINER_WHITE};
    background: ${theme.COLORS.BRIGHT_ORANGE};
    border-radius: 3em;
    border-color: transparent;
    cursor: pointer;
`;

export const ArticleNumberContainer = styled.div`
    width: 60vw;
    display: flex;
    justify-content: space-between;
`;

export const ArticleNumberItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    margin-top: 8%;
    cursor: pointer;
`;

export const Num = styled.div`
    color: ${theme.COLORS.BRIGHT_ORANGE};
    font-size: ${theme.FONT_SIZE.TITLE_SIZE};
    font-weight: ${theme.FONT_WEIGHT.BOLD};
`;

export const Type = styled.div`
    margin-top: 60%;
    font-weight: ${theme.FONT_WEIGHT.BOLD};
    margin-bottom: 60%;
`;

export const BottomContainer = styled.div`
    margin-top: 7%;
`;