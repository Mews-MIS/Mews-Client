import styled from "@emotion/styled";
import { PageTemplate } from "@pages/search/styles";
import LargeLogo from "@public/icon/LargeLogo.svg";
import theme from "@styles/Theme";
import Link from "next/link";

const NotfoundPage = () => {
  return (
    <PageTemplate>
      {/* eslint-disable-next-line @typescript-eslint/no-use-before-define */}
      <Wrapper>
        <LargeLogo />
        <div className="textArea">잘못된 요청입니다</div>
        <Link className="mainLink" href="/">
          {" "}
          홈 바로가기
        </Link>
      </Wrapper>
    </PageTemplate>
  );
};

export default NotfoundPage;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;

  text-align: center;
  font-weight: bold;

  .textArea {
    margin: 100px 0;
    color: ${theme.COLORS.BLACK};
    font-size: ${theme.FONT_SIZE.TITLE_SIZE};
  }

  .mainLink {
    border-radius: 20px;
    padding: 15px 30px;
    background-color: ${theme.COLORS.MAIN_ORANGE};
    color: ${theme.COLORS.CONTAINER_WHITE};
    font-size: ${theme.FONT_SIZE.TITLE_SIZE};
  }
`;
