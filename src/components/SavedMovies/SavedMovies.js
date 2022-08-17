import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

import { moviesPath, savedMoviesBD } from "../../utils/moviesBD";

function SavedMovies() {
  return (
    <section className="saved-movies">
      <SearchForm />
      <MoviesCardList movies={savedMoviesBD} savedMovies={[]} moviesPath={moviesPath} />
    </section>
  )
}

export default SavedMovies;
