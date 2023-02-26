import HttpClient from "../services/HttpClient";

const EditorAPI = {
  getEditors: async () => {
    try {
      const path = `editor/getall`;
      const response = await HttpClient.get(path);
      console.log(response);
      return response;
    } catch (e) {
      console.log(e);
      return null;
    }
  },
};

export default EditorAPI;
