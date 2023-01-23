import styled from "@emotion/styled";
import theme from "@styles/Theme";

export const Wrapper = styled.div``;

export const TopContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 70px;
  background: ${theme.COLORS.CONTAINER_WHITE};
`;

export const SubscribeBtnContainer = styled.div``;

export const SubscribeBtn = styled.button`
  width: 85vw;
  display: flex;
  justify-content: center;

  color: ${theme.COLORS.CONTAINER_WHITE};
  background: ${theme.COLORS.BRIGHT_ORANGE};
  border-radius: 3em;
  border-color: transparent;
  cursor: pointer;
  &.active {
    background: ${theme.COLORS.LINE_GRAY};
  }
`;

export const BottomContainer = styled.div``;
