import { RootState } from "../index";

export const selectMessages = ({ messagesReducer }: RootState) =>
  messagesReducer.messages;
