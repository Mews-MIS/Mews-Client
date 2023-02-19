import axios from "axios";
import { selector } from "recoil";
import HttpClient from "src/services/HttpClient";

const calendarInfoAllSelector = selector({
  key: "calendarInfoAllSelector",
  get: async ({ get }) => {
    const {data} = await axios.get(
      `${process.env.SERVER_BASE_URL}calendar/getall`, 
      {headers: {
        Authorization: process.env.ACCESS_TOKEN
      }}
    );
    return data;
  },
});

export default calendarInfoAllSelector;
