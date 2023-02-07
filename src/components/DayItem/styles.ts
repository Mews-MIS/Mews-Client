import styled from "@emotion/styled";
import theme from "@styles/Theme";

type ColorDisplay = {
  textColor: boolean,
  backgroundColor: boolean
};

export const Wrapper = styled.div`
  width: 100%;
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
  margin: auto;
`;

export const DayText = styled.div<ColorDisplay>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  margin-top: 10%;
  background-color: ${(props) => props.backgroundColor ? `rgb(255, 194, 102)` : undefined};
  font-size: ${theme.FONT_SIZE.TITLE_SIZE};
  font-weight: ${theme.FONT_WEIGHT.BOLD};
  color: ${props => !props.textColor ? theme.COLORS.LINE_GRAY : undefined};
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
