import * as s from "./styles";
import LargeLogo from "@public/icon/LargeLogo.svg";
import BackBtn from "@components/BackBtn";

const MewsIntroduce = () => {
  return (
    <s.Wrapper>
      <s.Container>
        <LargeLogo />
        <s.BackBtnBox>
          <BackBtn />
        </s.BackBtnBox>
        <s.MewsAd>
          <p>동국대학교 학술 소모임 MEWS는</p>
          <p>40만 동국인의 뮤즈가 되기 위해</p>
          <p>학생들의 눈과 귀가 되어 드리고 있습니다</p>
        </s.MewsAd>
      </s.Container>
    </s.Wrapper>
  );
};

export default MewsIntroduce;
