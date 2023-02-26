import { NextPage } from "next";
import React from "react";
import * as s from "./styles";
import Link from "next/link";

export interface IAuthorProps {
  id: number;
  name: string;
  imgUrl: string;
  introduce: string;
}

const AuthorIntro: NextPage<IAuthorProps> = ({ id, name, imgUrl, introduce }: IAuthorProps) => {
  return (
    <Link href={`/author/${id}`}>
      <s.ProfileContainer>
        <s.ProfileBox>
          <s.ProfileImage>
            <s.Image src={imgUrl} />
          </s.ProfileImage>
          <s.ProfileTextLabel>
            <s.ProfileAuthorName>{name}</s.ProfileAuthorName>
            <s.ProfileIntro>{introduce}</s.ProfileIntro>
          </s.ProfileTextLabel>
        </s.ProfileBox>
      </s.ProfileContainer>
    </Link>
  );
};

export default AuthorIntro;
