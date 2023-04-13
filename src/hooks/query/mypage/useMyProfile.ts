import MyBookmarkAPI from "@api/MyBookmarkAPI";
import MyProfileAPI from "@api/MyProfileAPI";
import { useQueries } from "react-query";

const useMyProfile = (session: any) => {
  const res = useQueries([
    {
      queryKey: ["myprofile"],
      queryFn: async () => {
        if (session === null || session === undefined) return null;
        const myprofile = MyProfileAPI.getProfiles(session);
        return myprofile;
      },
    },
    {
      queryKey: ["mybookmark"],
      queryFn: async () => {
        if (session === null || session === undefined) return null;
        const mybookmark = MyBookmarkAPI.getBookmarks(session);
        return mybookmark;
      },
    },
  ]);
  return res;
};

export default useMyProfile;
