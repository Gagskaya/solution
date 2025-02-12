import { useState } from "react";
import { useAppDispatch } from "../../store";

import { addMessage } from "../../store/reducers/messages";

import sendForm from "../../assets/icons/send.svg";

import "./Form.scss";

export const Form = () => {
  const dispatch = useAppDispatch();
  const [messageText, setMessageText] = useState<string>("");

  const onSendMessage = async () => {
    setMessageText("");
    dispatch(
      addMessage({
        text: messageText,
        isCoverLetter: false,
        type: "outgoing",
        date: new Date(),
      })
    );
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
