import AuthorIntro, { IAuthorProps } from '@components/AuthorIntro';
import BackBtn from '@components/BackBtn';
import authors from '@pages/tmp/authors';
import React from 'react';
import * as s from "./styles";

const AuthorIntroduce = () => {
  return (
    <s.Wrapper>
      <BackBtn />
      <s.AuthorList>
        {
          authors.map((data: IAuthorProps, index: number) => <AuthorIntro key={index} {...data}/>)
        }
      </s.AuthorList>
    </s.Wrapper>
  )
};

export default AuthorIntroduce;
