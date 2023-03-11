import PageTemplate from "@components/PageTemplate";
import TobNavBar from "@components/TopNavBar";
import EditProfileAPI from "@pages/api/EditProfileAPI";
import React, { useEffect, useRef, useState } from "react";
import { tmpImageURL } from "@pages/tmp/tmpImageURL";
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

  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [imageURL, setImageURL] = useState<string | ArrayBuffer | undefined | null>(tmpImageURL);
  const [firstImgURL, setFirstImgURL] = useState("");
  const [isImgChanged, setIsImgChanged] = useState(false);

  let formData: FormData;

  useEffect(() => {
    formData = new FormData();
    const profile: Promise<any> = EditProfileAPI.getProfile();
    profile.then((data: IProfile) => {
      setName(data.userName);
      setIntroduce(data.introduction);
      setImageURL(data.imgUrl);
      setFirstImgURL(data.imgUrl);
    });
  }, []);

  useEffect(() => {
    if(imageURL === firstImgURL) setIsImgChanged(true);
    else setIsImgChanged(false);
  }, [imageURL])

  const handleChangedFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const reader = new FileReader();
    if(e.target.files){
      reader.readAsDataURL(e.target.files[0]);
      if(formData) formData.append("file", e.target.files[0]);
      else {
        formData = new FormData();
        formData.append("file", e.target.files[0]);
      }
    }
    reader.onloadend = () => {
      const resultImage = reader.result;
      setImageURL(resultImage);
    };
  };

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
    const value = [{
      introduction: introduce,
      open: isOpen,
      userName: name,
    }];

    const blob = new Blob([JSON.stringify(value)], {type: "application/json"});
    if(formData) formData.append("data", blob);
    else {
      formData = new FormData();
      formData.append("data", blob);
    }

    EditProfileAPI.patchProfile(formData);
  };

  return (
    <PageTemplate>
      <s.Wrapper>
        <s.Container>
          <TobNavBar />
          <s.EditContainer>
            <s.EditImageContainer>
              <s.EditWrapper>
                <s.EditingContainer>
                  <s.EditImageBox>
                    <s.EditImage src={imageURL?.toString()} />
                  </s.EditImageBox>
                  <s.EditImageLabel htmlFor="file">프로필 사진 편집</s.EditImageLabel>
                  <s.EditImageBtn type="file" id="file" accept="image/*" onChange={handleChangedFile} ref={fileInputRef} />
                </s.EditingContainer>
              </s.EditWrapper>
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
