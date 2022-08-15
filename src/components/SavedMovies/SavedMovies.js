import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import { useEffect, useState } from "react";

import { moviesPath, savedMoviesBD } from "../../utils/moviesBD";
import moviesFilter from "../../utils/movies-filter";
import * as mainApi from '../../utils/MainApi';

function SavedMovies() {
  const [isShortMovie, setIsShortMovie] = useState(false);
  const [reqMovies, setReqMovies] = useState('');
  const [savedMovies, setSavedMovies] = useState([]);

  useEffect(() => {
    console.log(savedMovies);
    mainApi.getSavedMovies()
      .then((movies) => {
        if (movies) {
          console.log(movies);
          setSavedMovies(movies.sort(function (a, b) {
            if (a.createdAt > b.createdAt) {
              return -1;
            } else if (a.createdAt < b.createdAt) {
              return 1;
            } else {
              return 0;
            }
          }))
        } else {
          setSavedMovies([]);
        }
      })
      .catch((err) => {
        console.log(`Ошибка: ${err.message}, не удалось загрузить карточки`);
      })
  }, [])

  const toggleShortMovie = () => {
    setIsShortMovie(!isShortMovie);
  }

  const handleMoviesRequest = (req) => {
    setReqMovies(req);
  }

  const movies = moviesFilter(savedMovies, isShortMovie, ...reqMovies.split(/[\s,.-]+/))

  return (
    <section className="saved-movies">
      <SearchForm toggleShort={toggleShortMovie} handleReq={handleMoviesRequest} firstShort={false} />
      <MoviesCardList movies={movies} savedMovies={[]} moviesPath={moviesPath} />
    </section>
  )
}

export default SavedMovies;
