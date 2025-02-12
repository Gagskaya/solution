import file from "../../assets/icons/file.svg";
import arrowRight from "../../assets/icons/arrow-right.svg";

import "./SentResume.scss";

export const SentResume = () => {
  return (
    <div className="sent-resume">
      <img src={file} alt="файл" className="sent-resume__file" />
      <div className="sent-resume__info">
        <span>Отправленное резюме</span>
        <p>Автомаляр</p>
      </div>
      <img src={arrowRight} alt="" className="sent-resume__arrow" />
    </div>
  );
};
