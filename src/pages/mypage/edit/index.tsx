import PageTemplate from "@components/PageTemplate";
import TobNavBar from "@components/TopNavBar";
import EditProfileAPI from "@api/EditProfileAPI";
import { useSession } from "next-auth/react";
import React, { useEffect, useRef, useState } from "react";
import * as s from "@styles/PageStyles/mypage/edit/styles";
import { IProfile } from "..";

export interface IEditProfile {
  userName: string;
  userEmail: string;
  open: boolean;
  introduction: string;
  imgUrl?: string;
}

const EditMypage = () => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const [isFirstState, setIsFirstState] = useState(true); // 수정 사항 없다면 버튼 비활성화

  const [name, setName] = useState("");
  const [introduce, setIntroduce] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [imgURL, setImgURL] = useState<string | ArrayBuffer | undefined | null>("");
  const [uploadFile, setUploadFile] = useState<File | null | undefined>();
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <div> loading... </div>;
  }

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    const profile: Promise<any> = EditProfileAPI.getProfile(session);
    profile
      .then((data: IProfile) => {
        setName(data.userName);
        setIntroduce(data.introduction);
        setImgURL(data.imgUrl);
        setIsOpen(data.open);
      })
      .catch((e) => {
        console.error(e);
      });
  }, [session]);

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

  const handleChangedFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const reader = new FileReader();
    if (e.target.files) {
      reader.readAsDataURL(e.target.files[0]);
    }
    reader.onloadend = () => {
      setUploadFile(e.target.files![0]);
      const resultImage = reader.result;
      setImgURL(resultImage);
      setIsFirstState(false);
    };
  };

  const sendEditProfile = () => {
    const formData = new FormData();
    formData.append("file", uploadFile!);

    const data = {
      introduction: introduce,
      open: isOpen,
      userName: name,
    };
    formData.append("data", new Blob([JSON.stringify(data)], { type: "application/json" }));
    EditProfileAPI.patchProfile(formData, session);
    // eslint-disable-next-line no-alert
    alert("프로필이 편집되었습니다.");
    window.location.href = "/mypage";
  };

  return (
    <PageTemplate>
      <s.Wrapper>
        <s.Container>
          <TobNavBar />
          <s.EditContainer>
            <s.EditImageContainer>
              <s.CircleImageWrapper>
                <s.CircleContainer>
                  <s.CircleImageBox>
                    <s.CircleImage src={imgURL?.toString()} />
                  </s.CircleImageBox>
                  <s.CircleEditImageLabel htmlFor="file">프로필 사진 편집</s.CircleEditImageLabel>
                  <s.CircleEditImage
                    type="file"
                    id="file"
                    accept="image/*"
                    onChange={handleChangedFile}
                    ref={fileInputRef}
                  />
                </s.CircleContainer>
              </s.CircleImageWrapper>
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
