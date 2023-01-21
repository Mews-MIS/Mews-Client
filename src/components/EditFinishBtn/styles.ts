import styled from "@emotion/styled";
import theme from "@styles/Theme";
import { EditFinishBtnProps } from "./index";

export const Wrapper = styled.div``;

export const EditFinishBtn = styled.button`
  width: 60vw;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${theme.COLORS.CONTAINER_WHITE};
  background: ${(props: EditFinishBtnProps) =>
    props.isFirstState ? theme.COLORS.FILTER_GRAY : theme.COLORS.MAIN_ORANGE};
  border-radius: 3em;
  border-color: transparent;
  cursor: ${(props: EditFinishBtnProps) => (props.isFirstState ? `not-allowed` : `pointer`)};
`;
