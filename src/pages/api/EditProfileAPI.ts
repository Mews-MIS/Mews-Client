import HttpClient from "src/services/HttpClient";

const EditProfileAPI = {
  getProfile: async (session: any) => {
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
  patchProfile: async (data: {}, session: any) => {
    try {
      const path = `mypage/profile/${session?.userId}`;
      const response: [] | undefined = await HttpClient.patch(path, data, {
        Authorization: `Bearer ` + session?.accessToken,
      });
      console.log(response);
      return response;
    } catch (e) {
      console.log(e);
      return null;
    }
  },
};

export default EditProfileAPI;
