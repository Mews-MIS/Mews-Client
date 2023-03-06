import { useQuery } from "react-query";
import ArticleAPI from "@api/ArticleAPI";

const usePostByPageNumber = (pageNumber: number) => {
  const { data } = useQuery(["posts", pageNumber], async () => {
    const posts = await ArticleAPI.getPageArticles({ page: pageNumber });
    return posts;
  });

  return { data };
};

export default usePostByPageNumber;
