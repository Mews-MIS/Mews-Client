import { tmpImageURL } from "@pages/tmp/tmpImageURL";
import React, { useRef, useState } from "react";
import * as s from "./styles";

const EditProfileImage = () => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [imageURL, setImageURL] = useState<string | ArrayBuffer | undefined | null>(tmpImageURL);

  const handleChangedFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const reader = new FileReader();
    if(e.target.files){
      reader.readAsDataURL(e.target.files[0]);
    }
    reader.onloadend = () => {
      const resultImage = reader.result;
      setImageURL(resultImage);
    }
  }

  return (
    <s.Wrapper>
      <s.Container>
        <s.ImageBox>
          <s.Image src={imageURL?.toString()} />
        </s.ImageBox>
        <s.EditImageLabel 
          htmlFor="file"
          >프로필 사진 편집</s.EditImageLabel>
        <s.EditImage type="file" id="file" accept="image/*" onChange={handleChangedFile} ref={fileInputRef}/>
      </s.Container>
    </s.Wrapper>
  );
};

export default EditProfileImage;
