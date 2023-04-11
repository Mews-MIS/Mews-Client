import AuthorIntro, { IAuthorProps } from "@components/AuthorIntro";
import BackBtn from "@components/BackBtn";
import React from "react";
import EditorAPI from "@api/EditorAPI";
import * as s from "./styles";

export const getServerSideProps = async () => {
  const editorList = await EditorAPI.getAllEditors();

  return {
    props: {
      editorList,
    },
  };
};

const AuthorIntroduce = (props: any) => {
  const { editorList } = props;
  return (
    <s.Wrapper>
      <BackBtn />
      <s.AuthorList>
        {editorList.map((data: IAuthorProps) => (
          // eslint-disable-next-line react/jsx-props-no-spreading
          <AuthorIntro key={data.id} {...data} />
        ))}
      </s.AuthorList>
    </s.Wrapper>
  );
};

export default AuthorIntroduce;
