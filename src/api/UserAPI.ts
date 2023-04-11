import HttpClient from "../services/HttpClient";

const UserAPI = {
  googleLogin: async (body: any) => {
    try {
      const path = `auth/login`;
      const response = await HttpClient.post(path, body);
      return response;
    } catch (e) {
      console.error(e);
      return null;
    }
  },
};

export default UserAPI;
