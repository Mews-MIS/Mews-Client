import { useQuery } from "react-query";
import ArticleAPI from "@api/ArticleAPI";

const usePostByPageNumber = (pageNumber: number) => {
  const { data, isLoading } = useQuery(["posts", pageNumber], async () => {
    const posts = await ArticleAPI.getPageArticles(pageNumber, {});
    return posts;
  });

  return { data, isLoading };
};

export default usePostByPageNumber;
