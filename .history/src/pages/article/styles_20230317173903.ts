import styled from "@emotion/styled";
import theme from "@styles/Theme";

export const Wrapper = styled.div`
  padding-top: 70px;
  padding-bottom: 60px;
  background-color: ${theme.COLORS.CONTAINER_WHITE};
`;

export const NewsTopContainer = styled.div`
  margin-bottom: 5%;
`;
export const NewsbottomContainer = styled.div`
  background-color: ${theme.COLORS.CONTAINER_WHITE};
`;
export const NewsListBox = styled.article``;

export const PaginationBox = styled.div`
  .pagination {
    display: flex;
    justify-content: center;
    margin-top: 15px;
    margin-bottom: 15px;
    font-weight: 600;
    background-color: "#FFFFFF";
  }
  ul {
    list-style: none;
    padding: 0;
  }
  ul.pagination li {
    display: inline-block;
    width: 30px;
    height: 30px;
    border: none;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: "3rem";
  }
  ul.pagination li:first-child {
    border-radius: 5px 0 0 5px;
  }
  ul.pagination li:last-child {
    border-radius: 0 5px 5px 0;
  }
  ul.pagination li a {
    text-decoration: none;
  }
  ul.pagination li.active a {
    color: white;
  }
  ul.pagination li.active {
    background-color: #ff9136;
  }
  ul.pagination li a:hover,
  ul.pagination li a.active {
    color: blue;
  }
`;
