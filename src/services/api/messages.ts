import axios from "axios";

import { API_URL } from "../../constants";

export const messagesApi = {
  async fetchMessages() {
    const { data } = await axios.get(`${API_URL}/messages`);

    return data;
  },
};
