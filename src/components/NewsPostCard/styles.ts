import styled from "@emotion/styled";
import theme from "@styles/Theme";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  overflow: hidden;
  background-color: ${theme.COLORS.CONTAINER_WHITE};
  margin-bottom: 0;
  scroll-snap-align: center;
`;

export const ContentContainer = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 30px;
`;

export const ImageContainer = styled.div`
  display: flex;
  margin: 0 auto 15px auto; 
  height: 45vw;
  width: 100%;
  min-height: 200px;
  max-height: 400px;
  background-color: ${theme.COLORS.LINE_GRAY};
  border-radius: 20px;

  }
`;

export const NewsInfoSummary = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0 2vw;
`;

export const NewsTitleLabel = styled.p`
  display: flex;
  justify-content: flex-start;
  font-size: ${theme.FONT_SIZE.SUB_TITLE_SIZE};
  font-weight: ${theme.FONT_WEIGHT.BOLD};
  margin-bottom: 7%;
`;

export const NewsCategoryLabel = styled.p`
  display: flex;
  justify-content: flex-end;
  color: ${theme.COLORS.FONT_YELLOW};
  font-size: ${theme.FONT_SIZE.SMALL_SIZE};
  margin-bottom: 7%;
`;
