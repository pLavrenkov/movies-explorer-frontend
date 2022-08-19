import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import * as mainApi from '../../utils/MainApi';

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
  saved,
  _id,
  card,
  deleteMovieFormSavedMovies
}) {
  const location = useLocation();
  const [isSaved, setIsSaved] = useState(saved || false);
  const [movId, setMovId] = useState(_id || '');

  useEffect(() => {
    setIsSaved(saved);
  }, [saved])

  const saveMovie = () => {
    mainApi.saveMovie(
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
    )
      .then((movie) => {
        setMovId(movie._id);
        setIsSaved(true);
      })
      .catch((err) => {
        console.log(`Произошла ошибка: ${err.message}`);
      })
  }

  const deleteFromMovies = () => {
    mainApi.deleteMovie(_id)
      .then((movie) => {
        setIsSaved(false);
      })
      .catch((err) => {
        console.log(`Произошла ошибка: ${err.message}`);
      })
  }

  const handleDeleteSavedMovie = () => {
    deleteMovieFormSavedMovies(_id);
  }

  return (
    <li className="movie-card">
      <div className="movie-card__header">
        <p className="movie-card__title">{nameRU}</p>
        <span className="movie-card__duration">{duration}</span>
      </div>
      <a href={trailerLink} target="_blank" rel="noreferrer">
        <img src={image} alt={`Постер к фильму "${nameRU}"`} className="movie-class__image" />
      </a>
      {
        location.pathname === '/movies' ?
          (isSaved ?
            <button type="button" onClick={deleteFromMovies} className="movie-card__button movie-card__button_type_saved">&#10003;</button> :
            <button type="button" onClick={saveMovie} className="movie-card__button">Сохранить</button>) :
          <button type="button" onClick={handleDeleteSavedMovie} className="movie-card__button">&#10006;</button>
      }
    </li>
  )
}

export default MovieCard;
