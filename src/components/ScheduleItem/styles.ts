import styled from "@emotion/styled";
import theme from "@styles/Theme";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const Container = styled.div`
  display: flex;
  width: 95%;
  height: 50px;
  align-items: center;
  border-radius: 10px;
  background-color: ${theme.COLORS.BACKGROUND_WHITE};
  margin-top: 10px;
  margin-bottom: 10px;

`;

export const Label = styled.div`
  background-color: ${props => props.color};
  width: 3px;
  height: 17px;
  border-radius: 50px;
  margin-left: 10px;
`;

export const Title = styled.div`
  font-size: ${theme.FONT_SIZE.TITLE_SIZE};
  font-weight: ${theme.FONT_WEIGHT.BOLD};
  margin-left: 20px;
`;