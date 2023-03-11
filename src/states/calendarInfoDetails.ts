import axios from "axios";
import { selector } from "recoil";
import { selectedDateAtom } from "./selectedDate";

const calendarInfoDetailsSelector = selector({
  key: "calendarInfoDetailsSelector",
  get: async ({ get }) => {
    const selectedDate = get(selectedDateAtom);
    const { data } = await axios.get(
      `${
        process.env.NEXT_PUBLIC_SERVER_BASE_URL
      }calendar/getday/${selectedDate.getFullYear()}-${`00${selectedDate.getMonth() + 1}`.slice(
        -2
      )}-${`00${selectedDate.getDate()}`.slice(-2)}`,
      {
        headers: {
          Authorization: process.env.NEXT_TMP_ACCESS_TOKEN,
        },
      }
    );
    return data;
  },
});

export default calendarInfoDetailsSelector;
