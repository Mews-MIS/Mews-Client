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
          <AuthorIntro key={data.id} {...data} />
        ))}
      </s.AuthorList>
    </s.Wrapper>
  );
};

export default AuthorIntroduce;
