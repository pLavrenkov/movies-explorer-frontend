import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";

import { moviesBD, moviesPath, savedMoviesBD } from "../../utils/moviesBD";
import { useEffect, useState } from "react";

import  moviesFilter  from "../../utils/movies-filter";

function Movies() {
  const firstStep = (width) => {
    if (width <= 767) {
      return 5;
    } else if (width > 767 && width <= 1150) {
      return 2;
    } else {
      return 3;
    }
  }

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [counter, setCounter] = useState(firstStep(window.innerWidth));
  const [step, setStep] = useState(counter);
  const [isShortMovie, setIsShortMovie] = useState(false);
  const [reqMovies, setReqMovies] = useState('');

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

  const toggleShortMovie = () => {
    setIsShortMovie(!isShortMovie);
  }

  const handleMoviesRequest = (req) => {
    setReqMovies(req);
    setCounter(firstStep(window.innerWidth));
  }

  const movies = moviesFilter(moviesBD, isShortMovie, ...reqMovies.split(/[\s,.-]+/))

  console.log(counter);

  return (
    <section className="movies">
      <SearchForm isShort={toggleShortMovie} handleReq={handleMoviesRequest} />
      <MoviesCardList movies={movies} savedMovies={savedMoviesBD} moviesPath={moviesPath} counter={counter} />
      <button type="submit" className={((counter === movies.length) || (counter > movies.length)) ? "movies__button movies__button_type_closed" : "movies__button"} onClick={handleCounter}>Ещё</button>
    </section>
  )
}

export default Movies;
