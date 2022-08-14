import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";

import { moviesBD, moviesPath, savedMoviesBD } from "../../utils/moviesBD";
import { useEffect, useState } from "react";

import moviesFilter from "../../utils/movies-filter";
import { moviesApi } from '../../utils/MoviesApi';

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
  const [isShortMovie, setIsShortMovie] = useState(false);
  const [reqMovies, setReqMovies] = useState(localStorage.getItem('moviesReq'));
  const [moviesFromBD, setMoviesFromBD] = useState([JSON.parse(localStorage.getItem('moviesBDInStorage'))]);
  const [movies, setMovies] = useState([]);
  const [isButtonActive, setIsButtonActive] = useState(false);

  const windowWidthDetect = () => {
    setWindowWidth(window.innerWidth);
  }

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
    const moviesFromStorrage = localStorage.getItem('moviesBDInStorage');
    console.log(moviesFromStorrage);
    console.log(reqMovies);
    if (reqMovies === null) {
      console.log(reqMovies);
      setReqMovies('');
      setMovies([]);
    } else {
      moviesFromStorrage ? setMoviesFromBD(JSON.parse(moviesFromStorrage)) :
        moviesApi.getMovies()
          .then((movies) => {
            setMoviesFromBD(movies);
            localStorage.setItem('moviesBDInStorage', JSON.stringify(movies));
          });
      setMovies(moviesFilter(moviesFromBD, isShortMovie, ...reqMovies.split(/[\s,.-]+/)));
      console.log(movies);
    }

  }, [reqMovies, isShortMovie])

  const toggleShortMovie = () => {
    setIsShortMovie(!isShortMovie);
  }

  const handleMoviesRequest = (req) => {
    setReqMovies(req);
    localStorage.setItem('moviesReq', req);
    setCounter(firstStep(window.innerWidth));
  }

  console.log(counter);
  console.log(movies);

  return (
    <section className="movies">
      <SearchForm isShort={toggleShortMovie} handleReq={handleMoviesRequest} />
      <MoviesCardList movies={movies} savedMovies={savedMoviesBD} moviesPath={moviesPath} counter={counter} />
      <button type="submit" className={(movies === null) || (counter >= movies.length) ? "movies__button movies__button_type_closed" : "movies__button"} onClick={handleCounter}>Ещё</button>
    </section>
  )
}

export default Movies;
