import BookmarkBtn from "@public/button/BookmarkBtn.svg";
import { useState } from "react";
import { debounce } from "lodash";
import ArticleAPI from "@api/ArticleAPI";
import { IconContainer } from "@components/BookmarkButton/style";

interface BookmarkButtonProps {
  articleId: number;
  session: any;
  isActive: boolean;
}
const BookmarkButton = ({ articleId, session, isActive }: BookmarkButtonProps) => {
  const firstValue = isActive;
  const [active, setActive] = useState(isActive);

  const handleClick = () => {
    setActive(!active);

    const debouncedFunction = debounce(async () => {
      console.log(active);
      if (firstValue !== active) {
        console.log("send");
        const response = await ArticleAPI.postBookmark(articleId, session);
        console.log("response", response);
      }
    }, 500);

    debouncedFunction();
  };

  return (
    <IconContainer className={active ? "active" : "inactive"}>
      <BookmarkBtn onClick={handleClick} />
    </IconContainer>
  );
};

export default BookmarkButton;
