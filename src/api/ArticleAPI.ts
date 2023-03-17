import HttpClient from "../services/HttpClient";

const ArticleAPI = {
  getArticle: async (id: number) => {
    try {
      const path = `article/${id}`;
      const response = await HttpClient.get(path);
      return response;
    } catch (e) {
      console.log(e);
      return null;
    }
  },

  getPageArticles: async ({ page }: { page: number }) => {
    try {
      const path = "article/all";
      const response = await HttpClient.get(path, { page: page });
      console.log(response);
      return response;
    } catch (e) {
      console.log(e);
      return null;
    }
  },

  getPopularArticles: async () => {
    try {
      const path = "article/top";
      const response = await HttpClient.get(path);

      return response;
    } catch (e) {
      console.log(e);
      return null;
    }
  },

  getEditorArticles: async (editorId: number) => {
    try {
      const path = `editor/getArticle/${editorId}`;
      const response = await HttpClient.get(path);

      return response;
    } catch (e) {
      console.log(e);
      return null;
    }
  },
};

export default ArticleAPI;
