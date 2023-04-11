import { useSetRecoilState } from "recoil";
// import { userId } from "../store/atom";
import userIdAtom from "../store/atom";

const useUserIdState = () => {
  const setUserId = useSetRecoilState(userIdAtom);
  return setUserId;
};

export default useUserIdState;
