import HttpClient from "../services/HttpClient";

const EditorAPI = {
  getAllEditors: async () => {
    try {
      const path = `editor/getall`;
      const response = await HttpClient.get(path);
      return response;
    } catch (e) {
      console.error(e);
      return null;
    }
  },

  getEditorInfo: async (editorId: number, session: any) => {
    try {
      const { accessToken } = session;
      const path = `editor/getone/${editorId}`;
      const response = await HttpClient.get(
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

  getEditorDetailInfo: async (editorId: number, session: any) => {
    try {
      const { userId } = session;
      const { accessToken } = session;
      const path = `mypage/${userId}/editor/${editorId}`;

      const response = await HttpClient.get(
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

  postSubscribeEditor: async (editorId: number, session: any) => {
    try {
      const { userId } = session;
      const { accessToken } = session;
      const path = `mypage/${userId}/editor/${editorId}`;

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
};

export default EditorAPI;
