import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Preloader from "../Preloader/Preloader";
import { useEffect, useState, Suspense } from "react";

import { moviesPath, savedMoviesBD } from "../../utils/moviesBD";
import moviesFilter from "../../utils/movies-filter";
import * as mainApi from '../../utils/MainApi';

function SavedMovies() {
  const [isShortMovie, setIsShortMovie] = useState(false);
  const [reqMovies, setReqMovies] = useState('');
  const [savedMovies, setSavedMovies] = useState([]);

  useEffect(() => {
    mainApi.getSavedMovies()
      .then((movies) => {
        if (movies) {
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

  const deleteMovieFormSavedMovies = (id) => {
    mainApi.deleteMovie(id)
      .then((movie) => {
        setSavedMovies((state) => state.filter((c) => c._id !== movie._id ? true : false));
      })
      .catch((err) => {
        console.log(`Ошибка: ${err.message}, не удалить карточуку`);
      })
  }

  const movies = moviesFilter(savedMovies, isShortMovie, ...reqMovies.split(/[\s,.-]+/))

  return (
    <section className="saved-movies">
      <SearchForm toggleShort={toggleShortMovie} handleReq={handleMoviesRequest} firstShort={false} />
      <Suspense fallback={<Preloader />}>
        <MoviesCardList movies={movies} savedMovies={[]} moviesPath={moviesPath} deleteMovieFormSavedMovies={deleteMovieFormSavedMovies} />
      </Suspense>
    </section>
  )
}

export default SavedMovies;
