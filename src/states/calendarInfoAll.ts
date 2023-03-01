import axios from "axios";
import { selector } from "recoil";

const calendarInfoAllSelector = selector({
  key: "calendarInfoAllSelector",
  get: async () => {
    const { data } = await axios.get(`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}calendar/getall`, {
      headers: {
        Authorization: process.env.NEXT_TMP_ACCESS_TOKEN,
      },
    });
    return data;
  },
});

export default calendarInfoAllSelector;
