import React from "react";

function PopupWithForm(props) {


  return (
    <div className={`popup ${props.isOpen ? `popup_type_${props.name}` : '' }`}  >
      <div className="popup__container">
        <button
          type="button"
          className="popup__close-icon"
          title="Закрыть"
          aria-label="Закрыть"
          onClick={ ()=> props.onClose() }
        ></button>
        <h3 className="popup__title">{props.title}</h3>
        <form action="#" name={props.name} className="popup__form" onSubmit={(e) => {props.onSubmit(e)}}>
            {props.children}
          <button
            type="submit"
            className="popup__btn"
            title="Сохранить аватар"
            aria-label="Сохранить аватар" 
          >
            {props.buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
