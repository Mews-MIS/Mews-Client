import styled from "@emotion/styled";
import theme from "@styles/Theme";

const defaultVal = {
  defaultPadding: "0 5vw",
};

export const Wrapper = styled.div`
  height: 100vh;
  background-color: ${theme.COLORS.CONTAINER_WHITE};
  padding: ${defaultVal.defaultPadding};
`;

export const TopContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${theme.COLORS.CONTAINER_WHITE};
`;

export const SubscribeBtnContainer = styled.div`
  color: ${theme.COLORS.FONT_YELLOW};
  font-size: ${theme.FONT_SIZE.SMALL_SIZE};

  margin-bottom: 5%;
`;

export const SubscribeBtn = styled.button`
  width: 100%;
  height: 4vh;
  display: flex;
  justify-content: center;
  align-items: center;
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
  padding-bottom: 2vh;
  border-bottom: 1px solid ${theme.COLORS.BRIGHT_ORANGE};
`;
export const AllPost = styled.div`
  padding-right: 8px;
`;
export const CountPost = styled.div`
  color: ${theme.COLORS.BRIGHT_ORANGE};
`;

export const Text = styled.div`
  margin-top: 10%;
  height: 200px;
  font-size: large;
  color: ${theme.COLORS.LINE_GRAY};
  text-align: center;
`;

export const BottomContainer = styled.div``;
