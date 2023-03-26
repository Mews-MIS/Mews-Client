import LikeBtn from "@public/button/LikeBtn.svg";
import { useState } from "react";
import { debounce } from "lodash";
import { IconContainer } from "@components/LikeButton/style";

interface LikeButtonProps {
  articleId: number;
  session: any;
  isActive: boolean;
}
const LikeButton = ({ articleId, session, isActive }: LikeButtonProps) => {
  const firstValue = isActive;
  const [active, setActive] = useState(isActive);

  const handleClick = () => {
    setActive(!active);
    debounce(async () => {
      if (firstValue !== active && active) {
        // await ArticleAPI.postLike(articleId, session);
        console.log("likeSend");
      }
    }, 500);
  };

  return (
    <IconContainer>
      {/* eslint-disable-next-line react/button-has-type */}
      <button onClick={handleClick}>
        <LikeBtn />
      </button>
    </IconContainer>
  );
};

export default LikeButton;
