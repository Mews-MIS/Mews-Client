import HttpClient from "../services/HttpClient";

const UserAPI = {
  googleLogin: async () => {
    try {
      const path = `auth/google`;
      const response = await HttpClient.get(path);
      console.log(response);
      return response;
    } catch (e) {
      console.log(e);
      return null;
    }
  },
};

export default UserAPI;
