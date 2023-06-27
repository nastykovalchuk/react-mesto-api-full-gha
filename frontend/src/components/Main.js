import React, { useContext } from "react";
import Card from "./Card";
import CurrentUserContext from "../context/CurrentUserContext";

function Main(props) {
  const currentUser = useContext(CurrentUserContext);

  return (
    <main className="page__main">
      <section className="profile">
        <div className="profile__avatar">
          <button
            type="button"
            className="profile__avatar-edit-button"
            title="Редактировать профиль"
            aria-label="Редактировать профиль"
            onClick={() => {
              props.onEditAvatar();
            }}
          >
            <img
              className="profile__image"
              src={currentUser.avatar}
              alt="Фото профиля"
            />
          </button>
        </div>

        <div className="profile__info">
          <h1 className="profile__name">{currentUser.name}</h1>
          <button
            type="button"
            className="profile__edit-button"
            onClick={() => {
              props.onEditProfile();
            }}
          ></button>
          <p className="profile__about">{currentUser.about}</p>
        </div>

        <button
          type="button"
          className="profile__add-button"
          onClick={() => {
            props.onAddPlace();
          }}
        ></button>
      </section>

      <section className="elements">
        <ul className="elements__card">
          {props.cards.map((card) => {
            return (
              <Card
                key={card._id}
                card={card}
                onCardClick={props.onCardClick}
                onCardLike={props.onCardLike}
                onCardDelite={props.onCardDelite}
              />
            );
          })}
        </ul>
      </section>
    </main>
  );
}

export default Main;
