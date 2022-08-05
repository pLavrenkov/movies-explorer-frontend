import Footer from "../Footer/Footer";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";

import { moviesBD, moviesPath } from "../../utils/moviesBD";

function Movies() {
  return (
    <section className="movies">
      <Header />
      <SearchForm />
      <MoviesCardList movies={moviesBD} moviesPath={moviesPath} />
      <button type="submit" className="movies__button">Ещё</button>
      <Footer />
    </section>
  )
}

export default Movies;
