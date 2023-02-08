import HttpClient from "../../services/HttpClient";

const ArticleAPI = {
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

  deleteArticle: async (articleId: number) => {
    try {
      const path = `article/delete`;
      const response = await HttpClient.delete(path, { articleId });
      return response.response;
    } catch (e) {
      console.log(e);
      return null;
    }
  },

  postArticle: async () => {
    try {
      const path = `article/post`;
      const response = await HttpClient.post(path);
      return response.response;
    } catch (e) {
      console.log(e);
      return null;
    }
  },
};

export default ArticleAPI;
