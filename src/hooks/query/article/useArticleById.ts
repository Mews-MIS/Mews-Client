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
  session: boolean;
  dehydratedState?: any;
  editorInfoList?: IEditorInfo;
}

const useArticleById = ({ id, session, dehydratedState }: IUseArticleByIdParams) => {
  const { data } = useQuery(
    ["article", id, session],
    async () => {
      const posts = await ArticleAPI.getArticle(id, session);
      return posts;
    },
    {
      initialData: dehydratedState?.queries?.[0].state?.data,
    }
  );

  return { data };
};

export default useArticleById;
