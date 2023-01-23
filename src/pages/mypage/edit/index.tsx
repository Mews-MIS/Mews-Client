import EditFinishBtn from "@components/EditFinishBtn";
import EditProfileImage from "@components/EditProfileImage";
import TobNavBar from "@components/TopNavBar";
import React, { useState } from "react";
import * as s from "./styles";

const EditMypage = () => {
  const [isFirstState, setIsFirstState] = useState(true); // 수정 사항 없다면 버튼 비활성화
  const [isOn, setIsOn] = useState(false);
  const [nickname, setNickname] = useState("테스트 닉네임");
  const [introduce, setIntroduce] = useState("테스트 자기소개 아아아아");

  const toggleHandler = () => {
    setIsOn(!isOn);
    setIsFirstState(false);
  };

  const onChangeNickname = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNickname(e.target.value);
    setIsFirstState(false);
  };

  const onChangeIntroduce = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setIntroduce(e.target.value);
    setIsFirstState(false);
  };

  return (
    <s.Wrapper>
      <TobNavBar />
      <s.Container>
        <s.EditImageContainer>
          <EditProfileImage />
        </s.EditImageContainer>

        <s.EditInfoContainer>
          <s.ToggleContainer>
            <s.ToggleText>정보 공개 여부</s.ToggleText>
            <s.ToggleBtn onClick={toggleHandler}>
              <div className={`toggle-container ${isOn ? "toggle--checked" : ""}`} />
              <div className={`toggle-circle ${isOn ? "toggle--checked" : ""}`} />
            </s.ToggleBtn>
          </s.ToggleContainer>

          <s.NicknameContainer>
            <s.Nickname>닉네임</s.Nickname>
            <s.NicknameInput onChange={onChangeNickname} value={nickname} />
          </s.NicknameContainer>

          <s.IntroduceContainer>
            <s.Introduce>자기 소개</s.Introduce>
            <s.IntroduceTextarea onChange={onChangeIntroduce} value={introduce} />
          </s.IntroduceContainer>
        </s.EditInfoContainer>

        <s.EditBtnContainer>
          <EditFinishBtn isFirstState={isFirstState} />
        </s.EditBtnContainer>
      </s.Container>
    </s.Wrapper>
  );
};

export default EditMypage;
