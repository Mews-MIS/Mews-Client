import styled from "@emotion/styled";
import theme from "@styles/Theme";

export const Wrapper = styled.div`
  flex: 0 0 auto;
  width: 200px;
  height: 300px;
  margin-left: 25px;

  border-radius: 20px;
  outline: ${theme.COLORS.LINE_GRAY} 1px solid;
  border-collapse: collapse;
  overflow: hidden;

  background-color: ${theme.COLORS.CONTAINER_WHITE};
`;

export const ImageContainer = styled.div`
  height: 60%;
  width: 100%;

  background-color: ${theme.COLORS.LINE_GRAY};
`;

export const ContentContainer = styled.div`
  height: 40%;
  width: 100%;

  padding: 5%;
  font-weight: ${theme.FONT_WEIGHT.BOLD};
`;

export const ContentTopArea = styled.div`
  display: flex;
`;

export const ContentInfoSummary = styled.div`
  width: 70%;
`;

export const CategoryLabel = styled.p`
  color: ${theme.COLORS.FONT_YELLOW};
  font-size: ${theme.FONT_SIZE.SMALL_SIZE};

  margin-bottom: 5%;
`;

export const ContentTitleLabel = styled.p`
  font-size: ${theme.FONT_SIZE.SUB_TITLE_SIZE};
`;

export const BookmarkButtonContainer = styled.div`
  width: 30%;
  text-align: right;
`;

export const BookmarkButton = styled.div`
  width: 100%;
  filter: ${theme.COLORS.FILTER_GRAY};
  &.active {
    filter: ${theme.COLORS.FILTER_ORANGE};
  }
`;

export const ContentBottomArea = styled.div`
  display: flex;
  height: 60%;
  align-items: end;
  font-size: ${theme.FONT_SIZE.SMALL_SIZE};
`;

export const AuthorContainer = styled.div`
  display: flex;
  width: 50%;
`;

export const InformationLabel = styled.p`
  font-weight: ${theme.FONT_WEIGHT.DEFAULT};
  color: ${theme.COLORS.BLACK};
  margin-left: 5%;
`;

export const LikeContainer = styled.div`
  display: flex;
  width: 50%;
  justify-content: right;
  align-items: center;
`;
export const LikeIconContainer = styled.div`
  filter: ${theme.COLORS.FILTER_GRAY};
  &.active {
    filter: ${theme.COLORS.FILTER_RED};
  }
`;
