import HttpClient from "../services/HttpClient";

const ArticleAPI = {
  getArticle: async (id: number, session: any) => {
    const { accessToken } = session;
    try {
      const path = `article/${id}`;
      const response = await HttpClient.get(
        path,
        {},
        {
          Authorization: `Bearer ${accessToken}`,
        }
      );
      return response;
    } catch (e) {
      console.log(e);
      return null;
    }
  },

  getPageArticles: async (page: number, header: any) => {
    try {
      const path = "article/all";
      const response = await HttpClient.get(path, { page }, { header });
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

  getSubscribeArticles: async (session: any) => {
    try {
      const { id } = session;
      const accessToken = session?.accessToken;
      const path = `article/${id}/subscribe`;
      const response = await HttpClient.get(
        path,
        {},
        {
          Authorization: accessToken,
        }
      );

      return response;
    } catch (e) {
      // console.error(e);
      return null;
    }
  },

  postBookmark: async (articleId: number, session: any) => {
    try {
      const { userId } = session;
      const accessToken = session?.accessToken;
      const path = `article/${articleId}/user/${userId}/bookmark`;
      const response = await HttpClient.post(
        path,
        {},
        {
          Authorization: `Bearer ${accessToken}`,
        }
      );
      return response;
    } catch (e) {
      console.error(e);

      return null;
    }
  },

  postLike: async (articleId: number, session: any) => {
    try {
      const { userId } = session;
      const accessToken = session?.accessToken;
      const path = `article/${articleId}/user/${userId}/like`;
      const response = await HttpClient.post(
        path,
        {},
        {
          Authorization: `Bearer ${accessToken}`,
        }
      );
      console.log(response);

      return response;
    } catch (e) {
      console.error(e);

      return null;
    }
  },
};

export default ArticleAPI;
