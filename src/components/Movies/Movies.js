import Footer from "../Footer/Footer";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";

import { moviesBD, moviesPath, savedMoviesBD } from "../../utils/moviesBD";
import { useEffect, useState } from "react";

function Movies() {
  const firstStep = (width) => {
    if (width <= 767) {
      return 1;
    } else if (width > 767 && width <= 1150) {
      return 2;
    } else {
      return 3;
    }
  }

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [counter, setCounter] = useState(firstStep(window.innerWidth));
  const [step, setStep] = useState(counter);

  const windowWidthDetect = () => {
    setWindowWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener('resize', windowWidthDetect);
    if (windowWidth <= 767) {
      setStep(1);
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
    if ((counter + step) < moviesBD.length) {
      setCounter(counter + step);
    } else {
      setCounter(moviesBD.length);
    }
  }

  console.log(counter);

  return (
    <section className="movies">
      <Header />
      <SearchForm />
      <MoviesCardList movies={moviesBD} savedMovies={savedMoviesBD} moviesPath={moviesPath} counter={counter} />
      <button type="submit" className={(counter !== moviesBD.length) ? "movies__button" : "movies__button movies__button_type_closed"} onClick={handleCounter}>Ещё</button>
      <Footer />
    </section>
  )
}

export default Movies;
