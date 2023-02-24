import styled from "@emotion/styled";
import theme from "@styles/Theme";

export const Wrapper = styled.div`
  background: ${theme.COLORS.CONTAINER_WHITE};
  border-radius: 20px;
  padding: 1px;
  margin: 2vh 0;
`;

export const ResultContainer = styled.div`
  padding: 3vh 2vw;

  h1 {
    font-size: ${theme.FONT_SIZE.TITLE_SIZE};
    font-weight: ${theme.FONT_WEIGHT.BOLD};
    margin-bottom: 20px;
  }
`;

export const ResultHeader = styled.div`
  font-size: ${theme.FONT_SIZE.TITLE_SIZE};
  font-weight: ${theme.FONT_WEIGHT.BOLD};

  height: 40px;

  border-bottom: 1px solid ${theme.COLORS};
  margin-bottom: 30px;

  span {
    color: ${theme.COLORS.FONT_YELLOW};
  }
`;
export const EditorResultContainer = styled.div`
  margin-bottom: 20px;
`;

export const EditorProfileContainer = styled.div`
  display: flex;
`;

export const ArticleResultContainer = styled.div``;

export const ArticleInfoContainer = styled.div``;

export const ArticleInfo = styled.div`
  display: flex;
  height: 70px;
  align-items: center;
  margin-bottom: 15px;

  font-size: ${theme.FONT_SIZE.MAIN_SIZE};

  img {
    width: 70px;
    height: 100%;
  }
`;

export const ArticleTitle = styled.div`
  width: 80%;
  font-weight: ${theme.FONT_WEIGHT.BOLD};

  margin-left: 15px;
`;
