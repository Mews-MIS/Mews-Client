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

  getArticleList: async () => {
    try {
      const path = "article/all";
      const response = await HttpClient.get(path);
      return response.response;
    } catch (e) {
      console.log(e);
      return null;
    }
  },
};

export default ArticleAPI;
