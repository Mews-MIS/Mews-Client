import HttpClient from "src/services/HttpClient";

const MyProfileAPI = {
  getProfiles: async () => {
    try {
      /* User ID 는 전역 process.env에서 관리 */
      const path = `mypage/profile/${process.env.NEXT_PUBLIC_USERID}`;
      const response: [] | undefined = await HttpClient.get(
        path,
        {},
        { Authorization: process.env.NEXT_PUBLIC_TMP_ACCESS_TOKEN }
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
