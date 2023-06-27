import React from "react";

function InfoTooltip({name, onClose, isOpen, isSuccess}) {
    return (
        <div className={`popup ${isOpen ? `popup_type_${name}` : ''}`}>
            <div className="popup__container">
                <button
                    className="popup__close-icon"
                    onClick={onClose}
                    type="button"
                />
                <div
                    className={`popup__tooltip ${isSuccess
                        ? "popup__tooltip_type_success"
                        : "popup__tooltip_type_fail"
                    }`}
                />
                <h2
                    className="popup__message">
                    {isSuccess
                        ? "Вы успешно зарегистрировались!"
                        : "Что-то пошло не так! Попробуйте еще раз."}
                </h2>
            </div>
        </div>
    );
}

export default InfoTooltip;