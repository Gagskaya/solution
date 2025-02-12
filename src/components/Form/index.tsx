import { useState } from "react";
import axios from "axios";

import sendForm from "../../assets/icons/send.svg";

import "./Form.scss";
import { useAppDispatch } from "../../store";
import { fetchMessages } from "../../store/actionCreators/messages";

export const Form = () => {
  const dispatch = useAppDispatch();
  const [messageText, setMessageText] = useState<string>("");

  const onSendMessage = async () => {
    await axios.post("http://localhost:3000/messages", {
      text: messageText,
      isCoverLetter: false,
      type: "outgoing",
      date: new Date(),
    });

    setMessageText("");
    dispatch(fetchMessages());
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onSendMessage();
    }
  };

  return (
    <div className="form">
      <input
        type="text"
        className="form__input"
        placeholder="Сообщение"
        value={messageText}
        onChange={(e) => setMessageText(e.target.value)}
        onKeyDown={(e) => onKeyDown(e)}
      />
      <img
        src={sendForm}
        alt="отправить сообщение"
        className="form__send"
        onClick={onSendMessage}
      />
    </div>
  );
};
