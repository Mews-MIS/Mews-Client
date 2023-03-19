import { useQuery } from "react-query";
import ArticleAPI from "@api/ArticleAPI";

export interface IEditorInfo {
  id: number;
  imgUrl: "string";
  name: "string";
}

export interface IUseArticleByIdParams {
  id: number;
  dehydratedState?: any;
  editorInfo?: IEditorInfo;
}

const useArticleById = ({ id, dehydratedState, editorInfo }: IUseArticleByIdParams) => {
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
