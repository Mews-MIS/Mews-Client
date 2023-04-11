import { atom } from "recoil";

// const localStorageEffect =
//   (key: string): AtomEffect<any> =>
//   ({ setSelf, onSet }) => {
//     const savedValue = localStorage.getItem(key);
//     if (savedValue != null) {
//       setSelf(JSON.parse(savedValue));
//     }
//
//     onSet((newValue, _, isReset) => {
//       isReset ? localStorage.removeItem(key) : localStorage.setItem(key, JSON.stringify(newValue));
//     });
//   };

const userIdAtom = atom({
  key: "userId",
  default: null,
  // effects: [localStorageEffect("userId")],
});

export default userIdAtom;
