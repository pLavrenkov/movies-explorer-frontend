import MovieCard from "../MoviesCard/MoviesCard";
import Preloader from "../Preloader/Preloader"

function MoviesCardList({ movies, savedMovies, moviesPath, counter }) {
  const arrLength = !counter ? movies.length : counter;
  console.log(movies.length);
  return (
    <ul className="movies-card-list" fallback={<Preloader />} >
      {(movies.length > 0) ?
        movies.slice(0, arrLength).map((item) => {
          return (<MovieCard
            key={item.id}
            duration={item.duration}
            image={moviesPath + item.image.url}
            nameRU={item.nameRU}
            country={item.country}
            director={item.director}
            year={item.year}
            description={item.description}
            trailerLink={item.trailerLink}
            thumbnail={moviesPath + item.image.formats.thumbnail.url}
            owner
            movieId={item.id}
            nameEN={item.nameEN}
            saved={savedMovies.some(movie => movie.id === item.id)}
          />)
        }) :
        <p className="movies-card-list__nothing-found" >Ничего не найдено</p>
      }
    </ul>

  )
}

export default MoviesCardList;
