import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";

import { moviesPath } from "../../utils/moviesBD";
import { Suspense, useEffect, useState } from "react";

import moviesFilter from "../../utils/movies-filter";
import { moviesApi } from '../../utils/MoviesApi';
import * as mainApi from '../../utils/MainApi';
import Preloader from "../Preloader/Preloader";

function Movies() {
  const firstStep = (width) => {
    if (width <= 767) {
      return 5;
    } else if (width > 767 && width <= 1150) {
      return 8;
    } else {
      return 12;
    }
  }

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [counter, setCounter] = useState(firstStep(window.innerWidth));
  const [step, setStep] = useState(counter);
  const [isShortMovie, setIsShortMovie] = useState(JSON.parse(localStorage.getItem('short-movies')) || false);
  const [reqMovies, setReqMovies] = useState(localStorage.getItem('moviesReq') || '');
  const [moviesFromBD, setMoviesFromBD] = useState(JSON.parse(localStorage.getItem('moviesBDInStorage')) || []);
  const [movies, setMovies] = useState([]);
  const [foundMovies, setFoundMovies] = useState(JSON.parse(localStorage.getItem('foundMovies')) || []);
  const [savedMovies, setSavedMovies] = useState([]);

  const windowWidthDetect = () => {
    setWindowWidth(window.innerWidth);
  }

  moviesFromBD.length === 1 && moviesApi.getMovies()
    .then((movies) => {
      setMoviesFromBD(movies);
      localStorage.setItem('moviesBDInStorage', JSON.stringify(movies));
    });

  useEffect(() => {
    window.addEventListener('resize', windowWidthDetect);
    if (windowWidth <= 767) {
      setStep(5);
    } else if (windowWidth > 767 && windowWidth <= 1150) {
      setStep(2);
    } else {
      setStep(3);
    }
    setCounter(step);
    return () => {
      window.removeEventListener('resize', windowWidthDetect)
    }
  }, [windowWidth]);

  const handleCounter = () => {
    if ((counter + step) < movies.length) {
      setCounter(counter + step);
    } else {
      setCounter(movies.length);
    }
  }

  useEffect(() => {
    if (foundMovies.length > 0) {
      setMovies(foundMovies);
    } else {
      moviesApi.getMovies()
        .then((movies) => {
          setMoviesFromBD(movies);
          localStorage.setItem('moviesBDInStorage', JSON.stringify(movies));
        })
    }
    mainApi.getSavedMovies()
      .then((movies) => {
        if (movies) {
          setSavedMovies(movies);
        } else {
          setSavedMovies([]);
        }
      })
      .catch((err) => {
        console.log(`Ошибка: ${err.message}, не удалось загрузить карточки`);
      })
  }, [])

  useEffect(() => {
    if (reqMovies !== '') {
      setMovies(moviesFilter(moviesFromBD, isShortMovie, ...reqMovies.split(/[\s,.-]+/)));
      localStorage.setItem('foundMovies', JSON.stringify(movies));
      setFoundMovies(movies);
    } else {
      setMovies([]);
    }
  }, [reqMovies, isShortMovie])

  const toggleShortMovie = () => {
    setIsShortMovie(!isShortMovie);
    localStorage.setItem('short-movies', JSON.stringify(!isShortMovie));
  }

  const handleMoviesRequest = (req) => {
    setReqMovies(req);
    localStorage.setItem('moviesReq', req);
    setCounter(firstStep(window.innerWidth));
  }

  return (
    <section className="movies">
      <SearchForm toggleShort={toggleShortMovie} handleReq={handleMoviesRequest} firstShort={isShortMovie} />
      <Suspense fallback={<Preloader />}>
        <MoviesCardList movies={movies} savedMovies={savedMovies} moviesPath={moviesPath} counter={counter} />
        <button type="submit" className={(movies === null) || (counter >= movies.length) ? "movies__button movies__button_type_closed" : "movies__button"} onClick={handleCounter}>Ещё</button>
      </Suspense>
    </section>
  )
}

export default Movies;
