import React from "react";
import Comment from "@components/Comment";

function CommentList(props: { commentArray: any }) {
  let commentArray = props.commentArray;
  return (
    <div>
      <ul>
        {commentArray &&
          commentArray.map((value, id) => (
            <li key={id}>
              <div>
                <span>94_yongyong_lee</span>
                {value}
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default CommentList;
