import arrowLeft from "../../assets/icons/arrow-left.svg";
import avatar from "../../assets/icons/avatar.svg";
import dots from "../../assets/icons/dots.svg";
import close from "../../assets/icons/close.svg";

import "./Header.scss";

export const Header = () => {
  return (
    <header className="header">
      <img src={arrowLeft} alt="стрелка влево" className="header__arrow" />
      <div className="header__info">
        <img src={avatar} alt="аватар" />
        <div className="header__info-description">
          <h4>ООО “ОМЕГА”</h4>
          <span>Автомаляр, до 150 000 ₽ </span>
        </div>
      </div>
      <div className="header__controls">
        <img src={dots} alt="детали" className="header__controls-dots" />
        <img src={close} alt="закрыть" className="header__controls-close" />
      </div>
    </header>
  );
};
