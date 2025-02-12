import sendForm from "../../assets/send.svg";

import "./Form.scss";

export const Form = () => {
  return (
    <div className="form">
      <input type="text" className="form__input" placeholder="Сообщение" />
      <img src={sendForm} alt="отправить сообщение" className="form__send" />
    </div>
  );
};
