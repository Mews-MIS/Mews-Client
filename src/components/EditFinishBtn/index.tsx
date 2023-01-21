import React from "react";
import * as s from "./styles";

export interface EditFinishBtnProps {
  isFirstState: boolean;
}

const EditFinishBtn = ({ isFirstState }: EditFinishBtnProps) => {
  return (
    <s.Wrapper>
      <s.EditFinishBtn isFirstState={isFirstState}>편집 완료</s.EditFinishBtn>
    </s.Wrapper>
  );
};

export default EditFinishBtn;
