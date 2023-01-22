import "./index.css";

const PopupWithForm: React.FC<any> = ({ onClose, title, onSubmit }) => {
  return (
    <div className="popup__content">
      <button className="popup__close" type="button" onClick={onClose} />
      <div className="popup__form-content">
        <h2 className="popup__form-heading">{title}</h2>
        <form onSubmit={onSubmit} className="popup__form form" noValidate>
          <button className="popup__form-button" type="submit">
            Да
          </button>
        </form>
      </div>
    </div>
  );
};

export default PopupWithForm;
