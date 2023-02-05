import styled from "@emotion/styled";
import theme from "@styles/Theme";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const CircleContainer = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10%;
  border-color: ${props => props.color};
  background-color: transparent;
  appearance: none;
  cursor: pointer;
`;

export const DayText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 37px;
  height: 37px;
  border-radius: 50%;
  margin-top: 10%;
  background-color: ${props => props.color};
  font-size: ${theme.FONT_SIZE.TITLE_SIZE};
  font-weight: ${theme.FONT_WEIGHT.BOLD};
  color: ${theme.COLORS.CONTAINER_WHITE};
`;

export const CategoryCircles = styled.div`
  display: flex;
  margin-top: 10px;
  margin-bottom: 5px;
`;

export const Circle = styled.div`
  background-color: ${props => props.color};
  width: 13px;
  height: 13px;
  border-radius: 50px;
`;
