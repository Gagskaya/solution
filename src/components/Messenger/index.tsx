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
    </div>
  );
};
