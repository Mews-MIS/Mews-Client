import { useQuery } from "react-query";
import ArticleAPI from "@api/ArticleAPI";

const useArticleById = (id: number, dehydratedState?: any) => {
  const { data } = useQuery(
    ["article", id],
    async () => {
      const posts = await ArticleAPI.getArticle(id);
      return posts;
    },
    {
      initialData: dehydratedState?.queries?.[0].state?.data,
    }
  );

  return { data };
};

export default useArticleById;
