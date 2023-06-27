import {  useEffect, useRef } from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup({
  isOpen,
  onClose,
  onUpdateAvatar,
  onLoading
}) {

  const avatarRef = useRef();

  useEffect( ()=>{
    avatarRef.current.value = '';
  }, [isOpen]);

  function handleSubmit(e) {
    e.preventDefault();

    onUpdateAvatar({
      avatar: avatarRef.current.value,
    });
  };

  return (
    <PopupWithForm
      name={"avatarPopup"}
      title={"Обновить аватар"}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      buttonText={onLoading ? "Сохранение" : "Сохранить"}
    >
      <label className="popup__field">
        <input
          ref={avatarRef}
          type="url"
          className="popup__input"
          name="valueProfileAvatar"
          placeholder="Ссылка на аватар"
          title="Ссылка на аватар"
          required
        />
        <span className="popup__input-error profile-avatar-field-error"></span>
      </label>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
