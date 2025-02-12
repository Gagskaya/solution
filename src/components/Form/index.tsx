import { useState } from "react";
import axios from "axios";

import sendForm from "../../assets/icons/send.svg";

import "./Form.scss";

export const Form = () => {
  const [messageText, setMessageText] = useState<string>("");

  const onSendMessage = () => {
    axios.post("http://localhost:3000/messages", {
      text: messageText,
      isCoverLetter: false,
      type: "outgoing",
    });
  };

  return (
    <div className="form">
      <input
        type="text"
        className="form__input"
        placeholder="Сообщение"
        value={messageText}
        onChange={(e) => setMessageText(e.target.value)}
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
