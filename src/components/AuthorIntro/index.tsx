import React from "react";
import * as s from "./styles";

function AuthorIntro() {
  //더미 데이터
  const authorName = "이정우";
  const intro = "꿈은 없고, 계속 놀고만 싶습니다.";

  return (
    <s.ProfileContainer>
      <s.ProfileBox>
        <s.ProfileImage />
        {/** 해당 부분 프로필 이미지 **/}
        <s.ProfileTextLabel>
          <s.ProfileAuthorName>{authorName}</s.ProfileAuthorName>
          <s.ProfileIntro>{intro}</s.ProfileIntro>
        </s.ProfileTextLabel>
      </s.ProfileBox>
    </s.ProfileContainer>
  );
}

export default AuthorIntro;
