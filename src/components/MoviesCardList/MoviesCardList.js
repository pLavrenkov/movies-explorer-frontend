import MovieCard from "../MoviesCard/MoviesCard";

import { useContext } from "react";
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import {useLocation} from 'react-router-dom';

function MoviesCardList({ movies, savedMovies, moviesPath, counter, user, deleteMovieFormSavedMovies }) {
  const currentUser = useContext(CurrentUserContext);
  const arrLength = !counter ? movies.length : counter;
  const location = useLocation();

  const findID = (id, arr) => {
    let card = arr.find(item => item.movieId === id);
    if (card) {
      return card._id;
    } else {
      return '';
    }
  };

  console.log(currentUser);
  return (
    <ul className="movies-card-list" >
      {(movies.length > 0) ?
        movies.slice(0, arrLength).map((item) => {
          return (<MovieCard
            key={item.movieId}
            card={item}
            duration={item.duration}
            image={(location.pathname === '/movies') ? moviesPath + item.image.url : item.image}
            nameRU={item.nameRU}
            country={item.country}
            director={item.director}
            year={item.year}
            description={item.description}
            trailerLink={item.trailerLink}
            thumbnail={(location.pathname === '/movies') ? moviesPath + item.image.formats.thumbnail.url : item.thumbnail}
            owner={currentUser.id}
            movieId={item.id}
            nameEN={item.nameEN}
            saved={savedMovies.some(movie => movie.movieId === item.id)}
            _id={(location.pathname === '/movies') ? findID(item.id, savedMovies) : item._id}
            deleteMovieFormSavedMovies={deleteMovieFormSavedMovies}
          />)
        }) :
        <p className="movies-card-list__nothing-found" >Ничего не найдено</p>
      }
    </ul>

  )
}

export default MoviesCardList;
