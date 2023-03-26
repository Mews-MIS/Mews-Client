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
  const [firstValue, setFirstValue] = useState(isActive);
  const [active, setActive] = useState(isActive);
  const handleClick = async () => {
    const debouncedFunction = debounce(async () => {
      if (firstValue === active) {
        const response = await ArticleAPI.postBookmark(articleId, session);
        setFirstValue(!active);
        await console.log("response", response);
      }
    }, 1000);
    await setActive(!active);
    console.log(active);
    await debouncedFunction();
  };

  return (
    <IconContainer className={active ? "active" : "inactive"}>
      <BookmarkBtn onClick={handleClick} />
    </IconContainer>
  );
};

export default BookmarkButton;
