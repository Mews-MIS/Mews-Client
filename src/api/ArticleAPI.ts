import HttpClient from "../services/HttpClient";

const ArticleAPI = {
  getArticle: async (id: number) => {
    try {
      const path = `article/${id}`;
      const response = await HttpClient.get(path, { id });
      return response.response;
    } catch (e) {
      console.log(e);
      return null;
    }
  },

  getArticleContent: async (articleId: number) => {
    try {
      const path = `article`;
      const response = await HttpClient.get(path, { articleId });
      return response.response;
    } catch (e) {
      console.log(e);
      return null;
    }
  },

  getPageArticles: async ({ page }: { page: number }) => {
    try {
      const path = "article/all";
      const response = await HttpClient.get(path, { page });

      return response;
    } catch (e) {
      console.log(e);
      return null;
    }
  },
};

export default ArticleAPI;
