import { atom, selector } from "recoil";

export const selectedDateAtom = atom({
  key: "selectedDate",
  default: new Date()
});

const selectedDateSelector = selector({
  key: "selectedDateState",
  get: ({get}) => {
    return get(selectedDateAtom);
  },
  set: ({set}, newSelectedMonth) => {
    set(selectedDateAtom, newSelectedMonth);
  },
});

export default selectedDateSelector;