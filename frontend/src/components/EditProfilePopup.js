import { useState, useContext, useEffect } from "react";
import CurrentUserContext from "./../context/CurrentUserContext";
import PopupWithForm from './PopupWithForm';

function EditProfilePopup({
  closeAllPopups,
  isEditProfilePopupOpen,
  onUpdateUser,
  onLoading
}) {
  const currentUser = useContext(CurrentUserContext);

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser, isEditProfilePopupOpen]);

  function handleSubmit(e) {
    e.preventDefault();

    onUpdateUser({
      name,
      about: description,
    });
  }

  return (
    <PopupWithForm
      name={"profilePopup"}
      title={"Редактировать профиль"}
      isOpen={isEditProfilePopupOpen}
      onClose={closeAllPopups}
      onSubmit={handleSubmit}
      buttonText={onLoading ? "Сохранение" : "Сохранить"}
    >
        <label>
          <input
            className="popup__input"
            id="name-input"
            name="name"
            type="text"
            placeholder="Имя"
            minLength="2"
            maxLength="40"
            value={name || ""}
            required
            onChange={(e) => setName(e.target.value)}
          />
          <span className="popup__input-error name-input-error"> </span>
        </label>
        <label className="popup__field">
          <input
            className="popup__input"
            id="aboutMe-input"
            name="aboutMe"
            type="text"
            placeholder="О себе"
            minLength="2"
            maxLength="200"
            value={description || ""}
            required
            onChange={(e) => setDescription(e.target.value)}
          />
          <span className="popup__input-error aboutMe-input-error"> </span>
        </label>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
