import styled from "@emotion/styled";
import theme from "@styles/Theme";

export const BtmNavContainer = styled.div`
  width: 100%;
  height: 61px;
  display: flex;
  box-sizing: border-box;
  align-items: center;
  justify-content: space-around;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  background: #ffffff;
  border: 1px solid #c0c0c0;
  border-radius: 20px 20px 0px 0px;
`;

export const BtmNavItem = styled.div`
  display: flex;
  align-items: center;
  width: 45px;
  height: 45px;
  cursor: pointer;
  filter: ${theme.COLORS.FILTER_GRAY};
  &.active {
    filter: ${theme.COLORS.FILTER_ORANGE};
  }
`;
