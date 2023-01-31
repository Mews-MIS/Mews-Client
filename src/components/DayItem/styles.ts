import styled from "@emotion/styled";
import theme from "@styles/Theme";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const DayText = styled.div`
  font-size: ${theme.FONT_SIZE.TITLE_SIZE};
`;

export const CategoryCircles = styled.div`
  display: flex;
  margin-top: 10px;
`;

export const Circle = styled.div`
  background-color: ${props => props.color || "gray"};
  width: 13px;
  height: 13px;
  border-radius: 50px;
`;
