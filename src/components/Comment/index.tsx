// import React, { useState } from "react";
// import * as s from "./styles";
//
// // 현재 댓글 받아오는것만 구현되어 있음 추후에 이름 & 사진 받아오는 것도 추가해야함
//
// function Comment(props: { commentArray: any }) {
//   const [comment, setComment] = useState("");
//   const onChange = (event) => setComment(event.target.value);
//   const [commentArray, setCommentArray] = useState([]);
//   const onSubmit = (event) => {
//     event.preventDefault();
//     if (comment === "") {
//       return;
//     }
//     setCommentArray((commentValueList) => [comment, ...commentValueList]);
//     setComment("");
//   };
//
//   return (
//     <s.Wrapper>
//       <s.CommentWrapper>
//         <s.CommentContainer onSubmit={onSubmit}>
//           <s.CommentForm>
//             <s.CommentInput
//               type="text"
//               placeholder="댓글달기..."
//               value={comment}
//               onChange={onChange}
//             />
//             <s.CommentBtn>게시</s.CommentBtn>
//           </s.CommentForm>
//         </s.CommentContainer>
//
//         <s.CommentListContainer>
//           <s.CommentListBox>
//             <s.CommentLabel>댓글</s.CommentLabel>
//             <s.ul>
//               {commentArray &&
//                 commentArray.map((value, index) => (
//                   <s.li key={index}>
//                     <s.CommentBox>
//                       <s.span>
//                         <s.CommentName>이정우</s.CommentName>
//                         <s.Commentcontent>{value}</s.Commentcontent>
//                       </s.span>
//                     </s.CommentBox>
//                   </s.li>
//                 ))}
//             </s.ul>
//           </s.CommentListBox>
//         </s.CommentListContainer>
//       </s.CommentWrapper>
//     </s.Wrapper>
//   );
// }
//
// export default Comment;
