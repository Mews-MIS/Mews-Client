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
  set: ({set}, newSelectedDate) => {
    set(selectedDateAtom, newSelectedDate);
  },
});

export default selectedDateSelector;