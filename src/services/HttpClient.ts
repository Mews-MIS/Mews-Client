import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://13.209.163.188:8080/",
  withCredentials: true,
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJzdHJpbmd0ZXN0QGdtYWlsLmNvbSIsImF1dGgiOiJST0xFX1VTRVIiLCJpYXQiOjE2NzY5MTIyMDYsImV4cCI6MTY3NjkxNTgwNn0.-2eehBKVdPNo1UuZYV0s40pMKwfwJowlVAjo91CuYa0IGm1vacWuUm8vf_HrezNyubl25j497VG2epxS12RRhQ",
  },
});

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

  delete: async (path: string, headers = {}) => {
    const response = await axiosInstance.delete(path, { headers });
    return response.data;
  },
};

export default HttpClient;
