import { useState } from "react";
import { useLocation } from "react-router-dom";

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
  nameEN,
  saved
}) {
  const location = useLocation();
  const [isSaved, setIsSaved] = useState(saved);

  const handleSaveCard = () => {
    !isSaved ? setIsSaved(true) : setIsSaved(false);
  }
  console.log(trailerLink);

  return (
    <li className="movie-card">
      <div className="movie-card__header">
        <p className="movie-card__title">{nameRU}</p>
        <span className="movie-card__duration">{duration} минут</span>
      </div>
      <a href={trailerLink} target="_blank" rel="noreferrer">
        <img src={image} alt={`Постер к фильму "${nameRU}"`} className="movie-class__image" />
      </a>
      {
        location.pathname === '/movies' ?
          (isSaved ?
            <button type="button" onClick={handleSaveCard} className="movie-card__button movie-card__button_type_saved">&#10003;</button> :
            <button type="button" onClick={handleSaveCard} className="movie-card__button">Сохранить</button>) :
          <button type="button" onClick={handleSaveCard} className="movie-card__button">&#10006;</button>
      }
    </li>
  )
}

export default MovieCard;
