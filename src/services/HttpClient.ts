import axios from "axios";
// import { useSession } from "next-auth/react";
// const { data: session } = useSession();

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_SERVER_BASE_URL,
  withCredentials: true,
  // headers: {
  //   Authorization: session?.accessToken,
  // },
});

// axiosInstance.interceptors.request.use(async (config: any) => {
//   const session = await getSession();
//   if (session) {
//     config.headers.Authorization = `${session.accessToken}`;
//   }
//
//
//   return config;
// });

const HttpClient = {
  get: async (path: string, params = {}, headers = {}) => {
    const response = await axiosInstance.get(path, { params, headers });
    return response.data;
  },

  post: async (path: string, body: unknown, headers = {}) => {
    const response = await axiosInstance.post(path, body, { headers });
    return response.data;
  },

  put: async (path: string, body: unknown, headers = {}) => {
    const response = await axiosInstance.put(path, body, { headers });
    return response.data;
  },

  patch: async (path: string, body: unknown, headers = {}) => {
    const response = await axiosInstance.patch(path, body, { headers });
    return response.data;
  },

  delete: async (path: string, headers = {}) => {
    const response = await axiosInstance.delete(path, { headers });
    return response.data;
  },
};

export default HttpClient;
