import HttpClient from "src/services/HttpClient";

const MyProfileAPI = {
  getProfiles: async (session: any) => {
    if (session === undefined) return null;
    try {
      const path = `mypage/profile/${session?.userId}`;
      const response: [] | undefined = await HttpClient.get(
        path,
        {},
        { Authorization: `Bearer ${session?.accessToken}` }
      );
      return response;
    } catch (e) {
      return null;
    }
  },
};

export default MyProfileAPI;
