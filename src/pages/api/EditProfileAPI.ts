import HttpClient from "src/services/HttpClient";

const EditProfileAPI = {
  getProfile: async (session: any) => {
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
  patchProfile: async (data: FormData, session: any) => {
    if (session === undefined) return null;
    try {
      const path = `mypage/profile/${session?.userId}`;
      const response: [] | undefined = await HttpClient.patch(path, data, {
        Authorization: `Bearer ${session?.accessToken}`,
        "Content-type": "multipart/form-data",
      });
      return response;
    } catch (e) {
      return null;
    }
  },
};

export default EditProfileAPI;
