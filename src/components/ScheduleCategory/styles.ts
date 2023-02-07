import styled from "@emotion/styled";
import theme from "@styles/Theme";

export const Wrapper = styled.div`
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  margin-top: 10px;
  margin-bottom: 10px;
  background-color: ${theme.COLORS.CONTAINER_WHITE};
`;

export const Title = styled.div`
  display: flex;
  margin-left: 20px;
  margin-top: 15px;
  margin-bottom: 10px;
  align-items: center;
`;

export const Circle = styled.div`
  display: flex;
  background-color: ${props => props.color};
  width: 13px;
  height: 13px;
  border-radius: 50px;
`;

export const TitleText = styled.div`
  font-size: ${theme.FONT_SIZE.TITLE_SIZE};
  font-weight: ${theme.FONT_WEIGHT.BOLD};
  margin-left: 10px;
`;

export const BtnWrapper = styled.div`
  display: flex;
  margin-left: 10px; 

  cursor: pointer;
`;

export const ItemWrapper = styled.div`

`;

export const ScheduleItems = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  transition: height 0.3s ease;
`;