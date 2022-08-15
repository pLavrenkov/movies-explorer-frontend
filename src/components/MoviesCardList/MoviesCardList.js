import MovieCard from "../MoviesCard/MoviesCard";
import Preloader from "../Preloader/Preloader"
import { useContext } from "react";
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function MoviesCardList({ movies, savedMovies, moviesPath, counter, user }) {
  const currentUser = useContext(CurrentUserContext);
  const arrLength = !counter ? movies.length : counter;

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
    <ul className="movies-card-list" fallback={<Preloader />} >
      {(movies.length > 0) ?
        movies.slice(0, arrLength).map((item) => {
          return (<MovieCard
            key={item.movieId}
            duration={item.duration}
            image={moviesPath + item.image.url}
            nameRU={item.nameRU}
            country={item.country}
            director={item.director}
            year={item.year}
            description={item.description}
            trailerLink={item.trailerLink}
            thumbnail={moviesPath + item.image.formats.thumbnail.url}
            owner={currentUser.id}
            movieId={item.id}
            nameEN={item.nameEN}
            saved={savedMovies.some(movie => movie.movieId === item.id)}
            _id={findID(item.id, savedMovies)}
          />)
        }) :
        <p className="movies-card-list__nothing-found" >Ничего не найдено</p>
      }
    </ul>

  )
}

export default MoviesCardList;
