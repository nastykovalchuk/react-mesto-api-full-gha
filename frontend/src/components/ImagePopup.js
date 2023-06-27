import React from "react";

function ImagePopup(props) {
  return (
    <div
      className={`popup popup_darker ${
        props.card.link ? `popup_type_image` : ""
      }`}
    >
      <div className="image">
        <button
          className="popup__close-icon"
          type="button"
          aria-label="Закрыть"
          onClick={() => props.onClose()}
        ></button>
        <figure className="image__figure">
          <img
            className="image__img"
            src={props.card.link}
            alt={props.card.name}
          />
          <figcaption className="image__figcaption">
            {props.card.name}
          </figcaption>
        </figure>
      </div>
    </div>
  );
}

export default ImagePopup;
