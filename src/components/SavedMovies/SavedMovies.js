import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

import { moviesPath, savedMoviesBD } from "../../utils/moviesBD";

function SavedMovies() {
  return (
    <>
      <Header />
      <SearchForm />
      <MoviesCardList movies={savedMoviesBD} savedMovies={[]} moviesPath={moviesPath} />
      <Footer />
    </>
  )
}

export default SavedMovies;
