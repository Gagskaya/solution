import avatar from "../../assets/avatar.svg";

import "./Messenger.scss";

export const Messenger = () => {
  return (
    <div className="messenger">
      <div className="messenger__date">
        <span>18 июля</span>
      </div>
      <div className="messenger__cover-letter">
        <h5>Сопроводительное письмо</h5>
        <p>Меня зовут Сергей и я автомаляр с 4-летним опытом.</p>
      </div>
      <div className="messenger__date">
        <span>20 июля</span>
      </div>
      <div className="messenger__message">
        <div className="messenger__message-avatar">
          <img src={avatar} alt="аватарка" />
        </div>
        <div className="messenger__message-main">
          <span className="messenger__message-main-name">Ирина Корчагина</span>
          <h4 className="messenger__message-main-type">Приглашение</h4>
          <p className="messenger__message-main-text">
            Добрый день, Сергей! Нас заинтересовал Ваш отклик. Свяжитесь с нами
            по номеру +7 (999) 999-99-99 или оставьте свой номер и мы Вам
            перезвоним.
          </p>
          <p className="messenger__message-main-ps">
            С уважением, Ирина, специалист по привлечению персонала
          </p>
        </div>
      </div>
      <div className="messenger__answer">
        <p>Работодатель пригласил вас на собеседование. </p>
      </div>
    </div>
  );
};
