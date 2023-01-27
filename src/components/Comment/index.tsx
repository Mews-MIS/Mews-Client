import React, { useState } from "react";
import CommentList from "@components/CommentList";
import * as s from "./styles";

function Comment(props: { commentArray: any }) {
  const [comment, setComment] = useState("");
  const onChange = (event) => setComment(event.target.value);
  const [commentArray, setCommentArray] = useState([]);
  const onSubmit = (event) => {
    event.preventDefault();
    if (comment === "") {
      return;
    }
    setCommentArray((commentValueList) => [comment, ...commentValueList]);
    setComment("");
  };

  return (
    <>
      <div onSubmit={onSubmit}>
        <form>
          <input type="text" placeholder="댓글달기..." value={comment} onChange={onChange} />
          <button>게시</button>
        </form>
      </div>
      <div>
        <ul>
          {commentArray &&
            commentArray.map((value, id) => (
              <li key={id}>
                <div>
                  <span>이름 받아야 할 공간</span>
                  {value}
                </div>
              </li>
            ))}
        </ul>
      </div>
    </>
  );
}

export default Comment;
