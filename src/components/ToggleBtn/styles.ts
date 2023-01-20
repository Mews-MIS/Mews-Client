import styled from "@emotion/styled";
import theme from "@styles/Theme";

export const Wrapper = styled.div``;

export const ToggleContainer = styled.div`
  position: relative;
  cursor: pointer;

  > .toggle-container {
    width: 75px;
    height: 30px;
    border-radius: 40px;
    background-color: ${theme.COLORS.LINE_GRAY};
    transition: all 0.2s ease;
  }

  > .toggle--checked {
    background-color: ${theme.COLORS.BRIGHT_ORANGE};
  }

  > .toggle-circle {
    position: absolute;
    top: 2px;
    left: 5px;
    width: 25px;
    height: 25px;
    border-radius: 70%;
    background-color: ${theme.COLORS.BACKGROUND_WHITE};
    transition: all 0.25s ease;
  }

  > .toggle--checked {
    left: 45px;
  }
`;

export const ToggleText = styled.div`
  text-align: center;
`;
