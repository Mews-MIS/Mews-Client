import { NextPage } from "next";
import React from "react";
import Link from "next/link";
import * as s from "./styles";

export interface IAuthorProps {
  id: number;
  name: string;
  imgUrl: string;
  introduction: string;
}

const AuthorIntro: NextPage<IAuthorProps> = ({ id, name, imgUrl, introduction }: IAuthorProps) => {
  return (
    <Link href={`/author/${id}`}>
      <s.ProfileContainer>
        <s.ProfileBox>
          <s.ProfileImage>
            <s.Image src={imgUrl} />
          </s.ProfileImage>
          <s.ProfileTextLabel>
            <s.ProfileAuthorName>{name}</s.ProfileAuthorName>
            <s.ProfileIntro>{introduction}</s.ProfileIntro>
          </s.ProfileTextLabel>
        </s.ProfileBox>
      </s.ProfileContainer>
    </Link>
  );
};

export default AuthorIntro;
