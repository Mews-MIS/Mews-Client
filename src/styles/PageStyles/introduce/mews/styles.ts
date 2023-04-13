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

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
  width: 80%;
  height: 30%;
`;
export const BackBtnBox = styled.div`
  display: flex;
  width: 122%;
`;

export const MewsAd = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 1.7;
  align-items: center;
  justify-content: center;
  font-size: ${theme.FONT_SIZE.MAIN_SIZE};
  color: ${theme.COLORS.LINE_GRAY};
  font-weight: ${theme.FONT_WEIGHT.DEFAULT};
`;
