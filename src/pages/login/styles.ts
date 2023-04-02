import styled from "@emotion/styled";
import theme from "@styles/Theme";

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  background-color: ${theme.COLORS.CONTAINER_WHITE};
`;

export const NotLoginContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
  width: 80%;
  height: 50%;
`;

export const MewsIntro = styled.div`
  font-size: ${theme.FONT_SIZE.TITLE_SIZE};
  font-weight: ${theme.FONT_WEIGHT.BOLD};
  color: ${theme.COLORS.BRIGHT_ORANGE};
`;

export const MewsAd = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 1.5;
  align-items: center;
  justify-content: center;
  font-size: ${theme.FONT_SIZE.MAIN_SIZE};
  color: ${theme.COLORS.LINE_GRAY};
  font-weight: ${theme.FONT_WEIGHT.DEFAULT};
`;

export const loginbtn = styled.button`
  width: 100%;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  font-size: ${theme.FONT_SIZE.MAIN_SIZE};
  background-color: ${theme.COLORS.CONTAINER_WHITE};
  color: ${theme.COLORS.LINE_GRAY};
  cursor: pointer;
  padding: 10px;
  -webkit-box-shadow: 1px 4px 3px 0px rgba(193, 193, 193, 1);
  -moz-box-shadow: 1px 4px 3px 0px rgba(193, 193, 193, 1);
  box-shadow: 1px 4px 3px 0px rgba(193, 193, 193, 1);

  &:hover {
    background-color: #edeaea;
  }
`;
