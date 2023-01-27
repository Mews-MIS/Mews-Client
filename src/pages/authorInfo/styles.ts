import styled from "@emotion/styled";
import theme from "@styles/Theme";

const defaultVal = {
  defaultPadding: "0 5vw",
};

export const Wrapper = styled.div`
  background-color: ${theme.COLORS.CONTAINER_WHITE};
  padding: ${defaultVal.defaultPadding};
`;

export const TopContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${theme.COLORS.CONTAINER_WHITE};
`;

export const SubscribeBtnContainer = styled.div`
  color: ${theme.COLORS.FONT_YELLOW};
  font-size: ${theme.FONT_SIZE.SMALL_SIZE};

  margin-bottom: 5%;
`;

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
export const AllPostContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: left;
  font-size: ${theme.FONT_SIZE.SUB_TITLE_SIZE};
  background: ${theme.COLORS.CONTAINER_WHITE};
  padding-bottom: 15px;
  border-bottom: 1px solid ${theme.COLORS.BRIGHT_ORANGE};
`;
export const AllPost = styled.div`
  padding-right: 8px;
`;
export const CountPost = styled.div`
  color: ${theme.COLORS.BRIGHT_ORANGE};
`;
export const BottomContainer = styled.div``;
