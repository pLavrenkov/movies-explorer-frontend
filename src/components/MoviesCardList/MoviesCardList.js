import MovieCard from "../MoviesCard/MoviesCard";

function MoviesCardList({ movies, moviesPath }) {
  console.log(movies);
  return (
    <ul className="movies-card-list">
      {movies ?
        movies.map((item) => {
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
          />)
        }) :
        <p className="movies-card-list__nothing-found" >Ничено не найдено</p>
      }
    </ul>

  )
}

export default MoviesCardList;
