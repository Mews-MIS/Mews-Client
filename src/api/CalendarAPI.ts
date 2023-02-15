import HttpClient from "../services/HttpClient";

const CalendarAPI = {
  getArticle: async () => {
    try {
      const path = `calendar/getall`;
      const response = await HttpClient.get(path);
      return response.response;
    } catch (e) {
      console.log(e);
      return null;
    }
  },
};

export default CalendarAPI;
