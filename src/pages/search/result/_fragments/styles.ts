import styled from "@emotion/styled";
import theme from "@styles/Theme";

export const EditorProfileWrapper = styled.div`
  width: 120px;
  height: 120px;
  text-align: center;

  font-size: ${theme.FONT_SIZE.SUB_TITLE_SIZE};
  font-weight: ${theme.FONT_WEIGHT.BOLD};
`;

export const EditorProfileImg = styled.img`
  height: 100px;
  width: 100px;

  margin-bottom: 10px;
`;
