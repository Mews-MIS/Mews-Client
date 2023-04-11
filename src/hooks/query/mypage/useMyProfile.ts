import MyBookmarkAPI from "@pages/api/MyBookmarkAPI";
import MyProfileAPI from "@pages/api/MyProfileAPI";
import { useQueries } from "react-query";

const useMyProfile = (session: any) => {
  const res = useQueries([
    {
      queryKey: ["myprofile"],
      queryFn: async () => {
<<<<<<< HEAD
=======
        if (session === null || session === undefined) return null;
>>>>>>> b7e1d72f615ef00b00b2064c1a6200aaecdd3ff2
        const myprofile = MyProfileAPI.getProfiles(session);
        return myprofile;
      },
    },
    {
<<<<<<< HEAD
      queryKey: ["mylike"],
      queryFn: async () => {
        const mylike = MyLikeAPI.getLikes(session);
        return mylike;
      },
    },
  ]);
  console.log({ res });
=======
      queryKey: ["mybookmark"],
      queryFn: async () => {
        if (session === null || session === undefined) return null;
        const mybookmark = MyBookmarkAPI.getBookmarks(session);
        return mybookmark;
      },
    },
  ]);
>>>>>>> b7e1d72f615ef00b00b2064c1a6200aaecdd3ff2
  return res;
};

export default useMyProfile;
