import HttpClient from "src/services/HttpClient";

const MyLikeAPI = {
  getLikes: async (session: any) => {
    try {
      const path = `mypage/${session?.userId}/myLikeArticle`;
      const response: [] | undefined = await HttpClient.get(
        path,
        {},
        { Authorization: `Bearer ${session?.accessToken}` }
      );
      return response;
    } catch (e) {
      console.log(e);
      return null;
    }
  },
};

export default MyLikeAPI;
