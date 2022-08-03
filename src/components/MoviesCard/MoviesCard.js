import { useState } from "react";

function MovieCard({
  duration,
  image,
  nameRU,
  country,
  director,
  year,
  description,
  trailerLink,
  thumbnail,
  owner,
  movieId,
  nameEN
}) {
  const [isSaved, setIsSaved] = useState(false);

  const handleSaveCard = () => {
    !isSaved ? setIsSaved(true) : setIsSaved(false);
  }

  return (
    <li className="movie-card">
      <div className="movie-card__header">
        <p className="movie-card__title">{nameRU}</p>
        <span className="movie-card__duration">{duration} минут</span>
      </div>
      <img src={image} alt={`Постер к фильму "${nameRU}"`} className="movie-class__image" />
      {isSaved ?
        <button type="button" onClick={handleSaveCard} className="movie-card__button movie-card__button_type_saved">&#10003;</button> :
        <button type="button" onClick={handleSaveCard} className="movie-card__button">Сохранить</button>
      }
    </li>
  )
}

export default MovieCard;
