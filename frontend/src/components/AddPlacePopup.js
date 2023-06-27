import { useEffect, useState } from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup({ isOpen, onClose, onAddPlace, onLoading }) {
  const [name, setName] = useState("");
  const [link, setLink] = useState("");

  useEffect(() => {
    setName("");
    setLink("");
  }, [isOpen]);

  function handleSubmit(e) {
    e.preventDefault();

    onAddPlace({
      name,
      link,
    });
  }

  return (
    <PopupWithForm
      name="placePopup"
      title="Новое место"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      buttonText={onLoading ? `Сохранение` : `Создать`}
    >
        <label>
          <input
            className="popup__input"
            id="placeName-input"
            name="name"
            type="text"
            placeholder="Название"
            onChange={(e)=> setName(e.target.value)}
            value={name}
            required
          />
          <span className="popup__input-error placeName-input-error"></span>
        </label>
        <label className="popup__field">
          <input
            className="popup__input"
            id="link-input"
            name="name"
            type="url"
            placeholder="Ссылка на картинку"
            onChange={(e)=> setLink(e.target.value)}
            value={link}
            required
          />
          <span className="popup__input-error link-input-error"></span>
        </label>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
