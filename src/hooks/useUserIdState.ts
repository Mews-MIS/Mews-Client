import { useSetRecoilState } from "recoil";
import { userId } from "../store/atom";

const useUserIdState = () => {
  const setUserId = useSetRecoilState(userId);
  return setUserId;
};

export default useUserIdState;
