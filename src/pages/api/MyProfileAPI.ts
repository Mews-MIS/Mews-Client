import HttpClient from "src/services/HttpClient";

const MyProfileAPI = {
  getProfiles: async (session: any) => {
    try {
      const path = `mypage/profile/${session?.userId}`;
      const response: [] | undefined = await HttpClient.get(
        path,
        {},
        { Authorization: `Bearer ` + session?.accessToken }
      );
      console.log(response);
      return response;
    } catch (e) {
      console.log(e);
      return null;
    }
  },
};

export default MyProfileAPI;
