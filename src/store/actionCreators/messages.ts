import { AppDispatch } from "..";
import { messagesApi } from "../../services/api/messages";

import { orderBy } from "lodash";

import { setMessages } from "../reducers/messages";

export const fetchMessages = () => async (dispatch: AppDispatch) => {
  try {
    const messages = await messagesApi.fetchMessages();
    const orderedByDateMessages = orderBy(messages, "date", "asc");

    dispatch(setMessages(orderedByDateMessages));
  } catch (e) {
    console.log(e);
  }
};
