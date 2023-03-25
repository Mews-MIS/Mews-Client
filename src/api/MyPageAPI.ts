import HttpClient from "../services/HttpClient";

const MyPageAPI = {
  getEditorArticle: async (userId: number, editorId: number) => {
    try {
      const path = `/mypage/${userId}/editor/${editorId}`;
      const response = await HttpClient.get(path);
      return response;
    } catch (e) {
      console.log(e);
    }
  },

  getMyBookmark: async (userId: number) => {
    try {
      const path = `/mypage/${userId}/myBookmark`;
      const response = await HttpClient.get(path);
      return response;
    } catch (e) {
      console.log(e);
    }
  },
  getMyLikeArticle: async (userId: number) => {
    try {
      const path = `/mypage/${userId}/myBookmark`;
      const response = await HttpClient.get(path);
      return response;
    } catch (e) {
      console.log(e);
    }
  },
};

export default MyPageAPI;
