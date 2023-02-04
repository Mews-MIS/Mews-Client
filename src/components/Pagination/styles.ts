import styled from "@emotion/styled";
import theme from "@styles/Theme";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  background-color: ${theme.COLORS.CONTAINER_WHITE};
  width: 100vw;
`;
export const PaginationContainer = styled.div`
  width: 90vw;
  justify-content: space-evenly;
  align-items: center;
  display: flex;
  margin-top: 1vh;
  margin-bottom: 1vh;
`;
export const moveToFirstPage = styled.button`
  border: none;
  border-radius: 50%;
  padding: 2%;
  cursor: pointer;
  background-color: ${theme.COLORS.CONTAINER_WHITE};
  &:hover {
    background-color: #e8e8e8;
  }
  font-weight: ${theme.FONT_WEIGHT.BOLD};
  font-size: ${theme.FONT_SIZE.SMALL_SIZE};
`;
export const moveToPreviousPage = styled.button`
  border: none;
  border-radius: 50%;
  padding: 2%;
  cursor: pointer;
  background-color: ${theme.COLORS.CONTAINER_WHITE};
  &:hover {
    background-color: #e8e8e8;
  }
  font-weight: ${theme.FONT_WEIGHT.BOLD};
  font-size: ${theme.FONT_SIZE.SMALL_SIZE};
`;
export const pageBtnWrapper = styled.div``;
export const pageBtn = styled.button`
  border: none;
  border-radius: 50%;
  padding: 2%;
  cursor: pointer;
  background-color: ${theme.COLORS.CONTAINER_WHITE};
  &:hover {
    background-color: #e8e8e8;
  }
  font-weight: ${theme.FONT_WEIGHT.BOLD};
  font-size: ${theme.FONT_SIZE.SMALL_SIZE};
`;
export const moveToNextPage = styled.button`
  border: none;
  border-radius: 50%;
  padding: 2%;
  cursor: pointer;
  background-color: ${theme.COLORS.CONTAINER_WHITE};
  &:hover {
    background-color: #e8e8e8;
  }
  font-weight: ${theme.FONT_WEIGHT.BOLD};
  font-size: ${theme.FONT_SIZE.SMALL_SIZE};
`;
export const moveToLastPage = styled.button`
  border: none;
  border-radius: 50%;
  padding: 2%;
  cursor: pointer;
  background-color: ${theme.COLORS.CONTAINER_WHITE};
  &:hover {
    background-color: #e8e8e8;
  }
  font-weight: ${theme.FONT_WEIGHT.BOLD};
  font-size: ${theme.FONT_SIZE.SMALL_SIZE};
`;
