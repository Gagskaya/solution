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
  },
});

export const { setMessages } = messagesSlice.actions;
export const messagesReducer = messagesSlice.reducer;
