import HttpClient from "src/services/HttpClient";

const EditProfileAPI = {
  getProfile: async () => {
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
  patchProfile: async (profileFormData: any) => {
    try {
      /* User ID 는 전역 process.env에서 관리 */
      const path = `mypage/profile/${process.env.NEXT_PUBLIC_USERID}`;
      const response: [] | undefined = await HttpClient.patch(path, profileFormData, {
        Authorization: process.env.NEXT_PUBLIC_TMP_ACCESS_TOKEN,
        "content-type": "multipart/form-data",
      });
      console.log(response);
      return response;
    } catch (e) {
      console.log(e);
      return null;
    }
  },
  patchImage: async (uploadImage: any) => {
    try {
      const path = `mypage/profile/${process.env.NEXT_PUBLIC_USERID}`;
      const response = await HttpClient.patch(path, uploadImage, {
        "content-type": "multipart/form-data",
      });
      const { fileUrl } = response.data;

      return fileUrl;
    } catch (e) {
      console.log(e);
    }
  }
};

export default EditProfileAPI;
