import MyLikeAPI from "@pages/api/MyLikeAPI";
import MyProfileAPI from "@pages/api/MyProfileAPI";
import { useQueries } from "react-query";

const useMyProfile = (session: any) => {
  const res = useQueries([
    {
      queryKey: ["myprofile"],
      queryFn: async () => {
        const myprofile = MyProfileAPI.getProfiles(session);
        return myprofile;
      },
    },
    {
      queryKey: ["mylike"],
      queryFn: async () => {
        const mylike = MyLikeAPI.getLikes(session);
        return mylike;
      },
    },
  ]);
  console.log({ res });
  return res;
};

export default useMyProfile;
