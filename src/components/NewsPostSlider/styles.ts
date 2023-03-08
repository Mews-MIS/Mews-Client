import styled from "@emotion/styled";
import theme from "@styles/Theme";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${theme.COLORS.CONTAINER_WHITE};
`;
export const ContentWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow-x: auto;
  overflow-y: hidden;
  flex-wrap: nowrap;
  margin: 0;
  -webkit-overflow-scrolling: touch;
  scroll-snap-type: x mandatory;
  scrollbar-width: none;
  -ms-overflow-style: none;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const CardWrapper = styled.div`
  display: flex;
  width: fit-content;
  flex-direction: row;
`;

export const DotsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const Dot = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50px;
  margin: 0 1% 3%;
  cursor: pointer;
  background-color: ${theme.COLORS.LINE_GRAY};
  &.active {
    background-color: ${theme.COLORS.BRIGHT_ORANGE};
  }
`;
