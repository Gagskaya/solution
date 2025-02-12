import { AppDispatch } from "..";
import { orderBy } from "lodash";

import { messagesApi } from "../../services/api/messages";
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
