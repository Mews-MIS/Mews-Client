import { useQuery } from "react-query";
import MyBookmarkAPI from "@api/MyBookmarkAPI";

const useMyProfileBookmark = (session: any) => {
  const bookmarkRes = useQuery({
    queryKey: ["mybookmark"],
    queryFn: async () => {
      const mybookmark = MyBookmarkAPI.getBookmarks(session);
      return mybookmark;
    },
  });
  return bookmarkRes;
};

export default useMyProfileBookmark;
