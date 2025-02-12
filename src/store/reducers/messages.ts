import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Message } from "../../components/types/messages";

interface messagesState {
  messages: Message[];
}

const initialState: messagesState = {
  messages: [],
};

export const messagesSlice = createSlice({
  name: "messages",
  initialState,
  reducers: {
    setMessages(state, action: PayloadAction<Message[]>) {
      state.messages = action.payload;
    },
    addMessage(state, action: PayloadAction<Message>) {
      const newMessages: any = [...state.messages, action.payload];
      state.messages = newMessages;
    },
  },
});

export const { setMessages, addMessage } = messagesSlice.actions;
export const messagesReducer = messagesSlice.reducer;
