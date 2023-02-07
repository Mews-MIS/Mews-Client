import axios from "axios";
import { selector } from "recoil";
import { selectedDateAtom } from "./selectedDate";

const calendarInfoDetailsSelector = selector({
  key: "calendarInfoDetailsSelector",
  get: async ({get}) => {
    const selectedDate = get(selectedDateAtom);

    const res = await axios.get(
      `http://13.209.163.188:8080/
        ${selectedDate.getFullYear()}_${selectedDate.getMonth()}_${selectedDate.getDate()}`
    );
    return res.data;
  }
});

export default calendarInfoDetailsSelector;