import axios from "axios";
import { selector } from "recoil";
import HttpClient from "src/services/HttpClient";
import { selectedDateAtom } from "./selectedDate";

const calendarInfoDetailsSelector = selector({
  key: "calendarInfoDetailsSelector",
  get: async ({ get }) => {
    const selectedDate = get(selectedDateAtom);
    console.log(("00"+(selectedDate.getMonth()+1)).slice(-2));
    console.log(("00"+selectedDate.getDate()).slice(-2));
    const {data} = await axios.get(
      `${process.env.SERVER_BASE_URL}calendar/getday/${selectedDate.getFullYear()}-${("00"+(selectedDate.getMonth()+1)).slice(-2)}-${("00"+selectedDate.getDate()).slice(-2)}`, 
      {headers: {
        Authorization: process.env.ACCESS_TOKEN
      }}
    );
    console.log(data);
    return data;
  },
});

export default calendarInfoDetailsSelector;
