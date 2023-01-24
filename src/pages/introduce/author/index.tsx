import AuthorIntro from '@components/AuthorIntro';
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
          authors.map((d, i) => <AuthorIntro key={i} {...d}/>)
        }
      </s.AuthorList>
    </s.Wrapper>
  )
};

export default AuthorIntroduce;
