import HttpClient from "../services/HttpClient";

const MyPageAPI = {
  getEditorArticle: async (userId: number, editorId: number) => {
    try {
      const path = `/mypage/${userId}/editor/${editorId}`;
      const response = await HttpClient.get(path);
      return response;
    } catch (e) {
      console.error(e);
      return null;
    }
  },
};

export default MyPageAPI;
