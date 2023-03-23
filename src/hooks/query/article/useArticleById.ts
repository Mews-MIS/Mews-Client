import { useQuery } from "react-query";
import ArticleAPI from "@api/ArticleAPI";

export interface IEditorInfo {
  id: number;
  imgUrl: "string";
  introduction: "string";
  name: "string";
}

export interface IUseArticleByIdParams {
  id: number;
  dehydratedState?: any;
  editorInfoList?: IEditorInfo;
}

const useArticleById = ({ id, dehydratedState }: IUseArticleByIdParams) => {
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
