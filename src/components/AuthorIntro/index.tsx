import { NextPage } from "next";
import React from "react";
import * as s from "./styles";

export interface IAuthorProps {
  authorName: string;
  intro: string;
  imageURL: string;
}

const AuthorIntro: NextPage<IAuthorProps> = ({authorName, intro, imageURL}) => {

  return (
    <s.ProfileContainer>
      <s.ProfileBox>
        <s.ProfileImage>
          <s.Image src={imageURL} />
        </s.ProfileImage>
        <s.ProfileTextLabel>
          <s.ProfileAuthorName>{authorName}</s.ProfileAuthorName>
          <s.ProfileIntro>{intro}</s.ProfileIntro>
        </s.ProfileTextLabel>
      </s.ProfileBox>
    </s.ProfileContainer>
  );
}

export default AuthorIntro;
