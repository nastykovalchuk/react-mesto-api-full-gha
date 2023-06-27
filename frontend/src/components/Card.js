import { useContext } from "react";
import CurrentUserContext from "./../context/CurrentUserContext";

function Card(props) {
  const currentUser = useContext(CurrentUserContext);
  const isOwn = props.card.owner._id === currentUser._id;
  const isLiked = props.card.likes.some((i) => i._id === currentUser._id);

  const cardLikeButtonClassName = `elements__like ${
    isLiked && "elements__like_active"
  }`;

  function handleClick() {
    props.onCardClick(props.card);
  }
  function handleLikeClick() {
    props.onCardLike(props.card);
  }
  function handleDeleteClick() {
    props.onCardDelite(props.card);
  }
  return (
    <li className="elements__item">
      {isOwn && (
        <button className="elements__delete" onClick={handleDeleteClick} />
      )}
      <img
        className="elements__photo"
        src={props.card.link}
        alt={props.card.name}
        onClick={() => handleClick()}
      />

      <div className="elements__caption">
        <h2 className="elements__title">{props.card.name}</h2>
        <div className="elements__like-cover">
          <button className={cardLikeButtonClassName} onClick={() => handleLikeClick()} type="button"></button>
          <span className="elements__like-counter">
            {props.card.likes.length}
          </span>
        </div>
      </div>
    </li>
  );
}

export default Card;
