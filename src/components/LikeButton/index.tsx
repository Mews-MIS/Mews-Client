import LikeBtn from "@public/button/LikeBtn.svg";
import { useState } from "react";
import { debounce } from "lodash";
import { IconContainer } from "@components/LikeButton/style";
import ArticleAPI from "@api/ArticleAPI";

interface LikeButtonProps {
  articleId: number;
  session: any;
  isActive: boolean;
}
const LikeButton = ({ articleId, session, isActive }: LikeButtonProps) => {
  const [firstValue, setFirstValue] = useState(isActive);
  const [active, setActive] = useState(isActive);

  const handleClick = async () => {
    const debouncedFunction = debounce(async () => {
      if (firstValue === active) {
        await ArticleAPI.postLike(articleId, session);
        setFirstValue(!active);
      }
    }, 1000);
    await setActive(!active);
    await debouncedFunction();
  };

  return (
    <IconContainer>
      <LikeBtn onClick={handleClick} />
    </IconContainer>
  );
};

export default LikeButton;
