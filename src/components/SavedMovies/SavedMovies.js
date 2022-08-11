import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import { useState } from "react";

import { moviesPath, savedMoviesBD } from "../../utils/moviesBD";
import  moviesFilter  from "../../utils/movies-filter";

function SavedMovies() {
  const [isShortMovie, setIsShortMovie] = useState(false);
  const [reqMovies, setReqMovies] = useState('');

  const toggleShortMovie = () => {
    setIsShortMovie(!isShortMovie);
  }

  const handleMoviesRequest = (req) => {
    setReqMovies(req);
  }

  const movies = moviesFilter(savedMoviesBD, isShortMovie, ...reqMovies.split(/[\s,.-]+/))

  return (
    <section className="saved-movies">
      <SearchForm isShort={toggleShortMovie} handleReq={handleMoviesRequest}/>
      <MoviesCardList movies={movies} savedMovies={[]} moviesPath={moviesPath} />
    </section>
  )
}

export default SavedMovies;
