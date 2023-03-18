import HttpClient from "../services/HttpClient";

const UserAPI = {
  googleLogin: async (body: any) => {
    try {
      const path = `auth/login`;
      const response = await HttpClient.post(path, body);
      console.log(response);
      return response;
    } catch (e) {
      console.log(e);
      return null;
    }
  },
};

export default UserAPI;
