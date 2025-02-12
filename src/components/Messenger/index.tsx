import avatar from "../../assets/icons/avatar.svg";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { fetchMessages } from "../../store/actionCreators/messages";
import { useAppDispatch } from "../../store";
import { selectMessages } from "../../store/selectors/messages";
import "./Messenger.scss";
import { format } from "date-fns";

export const Messenger = () => {
  const dispatch = useAppDispatch();
  const messages = useSelector(selectMessages);

  useEffect(() => {
    (async function () {
      dispatch(fetchMessages());
    })();
  }, [dispatch, fetchMessages]);

  return (
    <div className="messenger">
      {messages.map((item) =>
        item.type === "incoming" ? (
          <div className="messenger__message_incoming" key={item.id}>
            <div className="messenger__message-date">
              <span>{format(item.date, "dd MMMM")}</span>
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
              <span>{format(item.date, "dd MMMM")}</span>
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
