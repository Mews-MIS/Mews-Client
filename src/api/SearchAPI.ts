import HttpClient from "../services/HttpClient";

const SearchAPI = {
  getSearchResult: async ({ keyword }: { keyword: string }) => {
    try {
      const path = `search/`;
      const response = await HttpClient.get(path, { keyword });
      return response.response;
    } catch (e) {
      console.log(e);
      return null;
    }
  },

  getPopularResult: async () => {
    try {
      const path = `search/popular`;
      const response = await HttpClient.get(path);

      return response;
    } catch (e) {
      console.log(e);
      return null;
    }
  },
};

export default SearchAPI;
