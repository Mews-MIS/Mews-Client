import { useQuery } from "react-query";
import { QueryKey } from "@constants/enums";
import ArticleAPI from "@api/ArticleAPI";

const useNewArticle = () => {
  const { data } = useQuery([QueryKey], () => ArticleAPI.getPageArticles({ page: 1 }));

  return { newArticleList: data };
};

export default useNewArticle;
