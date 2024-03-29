import HttpClient from "../services/HttpClient";

const SearchAPI = {
  getSearchResult: async ({ keyword }: { keyword: string }) => {
    try {
      const path = `search/${keyword}`;
      const response = await HttpClient.get(path);
      return response;
    } catch (e) {
      console.error(e);
      return null;
    }
  },

  getPopularResult: async () => {
    try {
      const path = `search/popular`;
      const response = await HttpClient.get(path);

      return response;
    } catch (e) {
      console.error(e);
      return null;
    }
  },
};

export default SearchAPI;
