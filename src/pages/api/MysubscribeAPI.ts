import HttpClient from "src/services/HttpClient";

const MysubscribeEditor = {
  getMySubEditor: async (session: any) => {
    try {
      const path = `mypage/${session.userId}/mysubeditor`;
      const response: [] | undefined = await HttpClient.get(
        path,
        {},
        { Authorization: `Bearer ${session?.accessToken}` }
      );
      return response;
    } catch (e) {
      console.error(e);
      return null;
    }
  },
};
export default MysubscribeEditor;
