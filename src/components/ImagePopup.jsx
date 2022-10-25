import './Popup/index.css';

function ImagePopup({ dress, onClose, }) {
  return (
      <div className="popup__content">
        <button className="popup__close" type="button" onClick={onClose} />
        <figure className="popup__image-container">
          <img
            className="popup__image"
            src={ !dress.activeType ? dress.imageUrl : dress.imageUrl2}
            alt={`${dress.title}.`}
          />
          <figcaption className="popup__image-title">{dress.title}</figcaption>
        </figure>
        <div className="popup__image-title">{dress.size} р-р, {dress.type}</div>
        <div className="popup__image-title">Цена: {dress.price} руб.</div>
      </div>
    
  );
}

export default ImagePopup;
