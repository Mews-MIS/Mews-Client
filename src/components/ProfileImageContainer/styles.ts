import styled from "@emotion/styled";
import theme from "@styles/Theme";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  
  position: relative;
  overflow: hidden;
  
  border: 1px solid ${theme.COLORS.LINE_GRAY};

  Image {
    object-fit: contain !important;
    height: auto; !important;
  }
`;

export const defaultImage = styled.div`
  width: 100%;
  height: 100%;

  background-color: ${theme.COLORS.LINE_GRAY};
`;
