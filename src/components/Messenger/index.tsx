import avatar from "../../assets/icons/avatar.svg";
import axios from "axios";

import "./Messenger.scss";
import { useEffect, useState } from "react";
import { Message } from "../types/messages";

export const Messenger = () => {
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    (async function () {
      const { data } = await axios.get("http://localhost:3000/messages");

      setMessages(data);
    })();
  }, [setMessages]);

  return (
    <div className="messenger">
      {messages.map((item) =>
        item.type === "incoming" ? (
          <div className="messenger__message_incoming">
            <div className="messenger__message-date">
              <span>18 июля</span>
            </div>
            <div className="messenger__message_incoming-wrap">
              <div className="messenger__message_incoming-avatar">
                <img src={avatar} alt="аватарка" />
              </div>
              <div className="messenger__message_incoming-main">
                <span className="messenger__message_incoming-main-name">
                  {item.author}
                </span>
                <h4 className="messenger__message_incoming-main-type">
                  {item.status === "invite" ? "Приглашение" : "Отказ"}
                </h4>
                <p className="messenger__message_incoming-main-text">
                  {item.text}
                </p>
                <p className="messenger__message_incoming-main-ps">{item.ps}</p>
              </div>
            </div>
          </div>
        ) : (
          <div className="messenger__message_outgoing">
            <div className="messenger__message-date">
              <span>18 июля</span>
            </div>
            <div className="messenger__message_outgoing-main">
              {item.isCoverLetter ? <h5>Сопроводительное письмо</h5> : null}
              <p>{item.text}.</p>
            </div>
          </div>
        )
      )}
      <div className="messenger__answer">
        <p>Работодатель пригласил вас на собеседование. </p>
      </div>
    </div>
  );
};
