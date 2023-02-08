import axios from "axios";
import { selector } from "recoil";
import { selectedDateAtom } from "./selectedDate";

const calendarInfoDetailsSelector = selector({
  key: "calendarInfoDetailsSelector",
  get: async ({ get }) => {
    const selectedDate = get(selectedDateAtom);

    const res = await axios.get(
      `${process.env.SERVER_BASE_URL}/
        ${selectedDate.getFullYear()}_${selectedDate.getMonth()}_${selectedDate.getDate()}`
    );
    return res.data;
  },
});

export default calendarInfoDetailsSelector;
