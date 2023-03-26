import MyLikeAPI from "@pages/api/MyLikeAPI";
import MyProfileAPI from "@pages/api/MyProfileAPI";
import { useQueries } from "react-query";

const useMyProfile = (session: any) => {
  const res = useQueries([
    {
      queryKey: ["myprofile"], queryFn: async () => {
        const myprofile = MyProfileAPI.getProfiles(session);
        console.log({ myprofile });
        return myprofile;
      }
    },
    {
      queryKey: ["mylike"], queryFn: async () => {
        const mylike = MyLikeAPI.getLikes(session);
        console.log({mylike});
        return mylike;
      }
    }
  ]);
  console.log({res})
  return res;
};

export default useMyProfile;
