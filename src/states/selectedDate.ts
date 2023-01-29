import { atom, selector } from "recoil";

const selectedDateAtom = atom<Date>({
  key: "selectedDate",
  default: new Date()
});

const selectedDateSelector = selector({
  key: "selectedDateState",
  get: ({get}) => {
    const selectedDate = get(selectedDateAtom);
    const dateInfo = {
      year: selectedDate.getFullYear(),
      month: selectedDate.getMonth(),
      day: selectedDate.getDate()
    };

    return dateInfo;
  },
});

export default selectedDateSelector;