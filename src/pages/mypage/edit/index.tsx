import EditProfileImage from "@components/EditProfileImage";
import PageTemplate from "@components/PageTemplate";
import TobNavBar from "@components/TopNavBar";
import EditProfileAPI from "@pages/api/EditProfileAPI";
import React, { useEffect, useState } from "react";
import { IProfile } from "..";
import * as s from "./styles";

export interface IEditProfile {
  userName: string;
  userEmail: string;
  open: boolean;
  introduction: string;
  imgUrl?: string;
}

const EditMypage = () => {
  const [isFirstState, setIsFirstState] = useState(true); // 수정 사항 없다면 버튼 비활성화

  const [name, setName] = useState("박상준");
  const [introduce, setIntroduce] = useState("테스트 자기소개");
  const [isOpen, setIsOpen] = useState(false);
  const [imgURL, setImgURL] = useState("/");

  useEffect(() => {
    const profile: Promise<any> = EditProfileAPI.getProfile();
    profile.then((data: IProfile) => {
      setName(data.userName);
      setIntroduce(data.introduction);
      setImgURL(data.imgUrl);
    });
  }, []);

  const toggleHandler = () => {
    setIsOpen(!isOpen);
    setIsFirstState(false);
  };

  const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
    setIsFirstState(false);
  };

  const onChangeIntroduce = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setIntroduce(e.target.value);
    setIsFirstState(false);
  };

  const sendEditProfile = (e: React.MouseEvent<HTMLButtonElement>) => {
    EditProfileAPI.patchProfile({
      introduction: introduce,
      open: isOpen,
      userEmail: "testemail123123@gmail.com",
      userName: name,
    });
  };

  return (
    <PageTemplate>
      <s.Wrapper>
        <s.Container>
          <TobNavBar />
          <s.EditContainer>
            <s.EditImageContainer>
              <EditProfileImage />
            </s.EditImageContainer>

            <s.EditInfoContainer>
              <s.ToggleContainer>
                <s.ToggleText>정보 공개 여부</s.ToggleText>
                <s.ToggleBtn onClick={toggleHandler}>
                  <div className={`toggle-container ${isOpen ? "toggle--checked" : ""}`} />
                  <div className={`toggle-circle ${isOpen ? "toggle--checked" : ""}`} />
                </s.ToggleBtn>
              </s.ToggleContainer>

              <s.NicknameContainer>
                <s.Nickname>닉네임</s.Nickname>
                <s.NicknameInput onChange={onChangeName} value={name} />
              </s.NicknameContainer>

              <s.IntroduceContainer>
                <s.Introduce>자기 소개</s.Introduce>
                <s.IntroduceTextarea onChange={onChangeIntroduce} value={introduce} />
              </s.IntroduceContainer>
            </s.EditInfoContainer>

            <s.EditBtnContainer>
              <s.EditFinishBtn onClick={sendEditProfile} aria-checked={isFirstState}>
                편집 완료
              </s.EditFinishBtn>
            </s.EditBtnContainer>
          </s.EditContainer>
        </s.Container>
      </s.Wrapper>
    </PageTemplate>
  );
};

export default EditMypage;
