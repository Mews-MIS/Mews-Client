import HttpClient from "../services/HttpClient";

const CurationAPI = {
  getCheckedCuration: async () => {
    try {
      const path = `curation/checked`;
      const response = await HttpClient.get(path);
      return response;
    } catch (e) {
      console.log(e);
      return null;
    }
  },

  getCurationInfo: async (id: number) => {
    try {
      const path = `curation/${id}`;
      const response = await HttpClient.get(path);
      return response;
    } catch (e) {
      console.log(e);
      return null;
    }
  },
};

export default CurationAPI;
