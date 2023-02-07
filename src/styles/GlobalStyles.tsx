import { css, Global } from "@emotion/react";
import emotionReset from "emotion-reset";
import theme from "@styles/Theme";

const style = css`
  ${emotionReset}

  html {
    font-size: 4px;
  }
  body {
    padding: 0;
    margin: 0;
    font-family: "Noto Sans KR", sans-serif;
    color: ${theme.COLORS.BLACK};
    background-color: ${theme.COLORS.BACKGROUND_WHITE};
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }
`;

const GlobalStyles = () => {
  return <Global styles={style} />;
};

export default GlobalStyles;
