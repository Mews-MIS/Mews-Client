import { useQuery } from "react-query";
import MyBookmarkAPI from "@pages/api/MyBookmarkAPI";

const useMyProfileBookmark = (session: any) => {
  const bookmarkRes = useQuery({
    queryKey: ["mybookmark"],
    queryFn: async () => {
      const mybookmark = MyBookmarkAPI.getBookmarks(session);
      return mybookmark;
    },
  });
  console.log({ bookmarkRes });
  return bookmarkRes;
};

export default useMyProfileBookmark;
