import axios from "axios";
import { selector } from "recoil";
import { selectedDateAtom } from "./selectedDate";

const calendarInfoMonthYearSelector = selector({
  key: "calendarInfoMonthYearSelector",
  get: async ({get}) => {
    const selectedDate = get(selectedDateAtom);
    const dateInfo = {
      year: selectedDate.getFullYear(),
      month: selectedDate.getMonth(),
      day: selectedDate.getDate()
    };

    const res = await axios.get(`http://13.209.163.188:8080/${dateInfo.year}_${dateInfo.month}`);
    return res.data;
  }
});

export default calendarInfoMonthYearSelector;