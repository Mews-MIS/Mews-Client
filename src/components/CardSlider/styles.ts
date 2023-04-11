import styled from "@emotion/styled";

// eslint-disable-next-line import/prefer-default-export
export const Wrapper = styled.div`
  width: 100%;
  padding: 15px 0;
  display: flex;
  overflow-x: auto;
  overflow-y: hidden;

  flex-wrap: nowrap;
  -webkit-overflow-scrolling: touch;
  scroll-snap-type: x mandatory;
`;
