import HttpClient from "../services/HttpClient";

const EditorAPI = {
  getAllEditors: async () => {
    try {
      const path = `editor/getall`;
      const response = await HttpClient.get(path);
      return response;
    } catch (e) {
      console.log(e);
      return null;
    }
  },

  getEditorInfo: async (editorId: number) => {
    try {
      const path = `editor/getone/${editorId}`;
      const response = await HttpClient.get(path);
      return response;
    } catch (e) {
      console.log(e);
      return null;
    }
  },
};

export default EditorAPI;
