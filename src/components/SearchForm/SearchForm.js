import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

function SearchForm({ toggleShort, handleReq, firstShort, reqMovies }) {
  const { register, formState: { errors }, watch, handleSubmit } = useForm();
  const [isShortMovie, setIsShortMovie] = useState(false);
  const [movieRequest, setMovieRequest] = useState(reqMovies || []);

  useEffect(() => {
    setIsShortMovie(firstShort);
  }, []);

  useEffect(() => {
    setMovieRequest(register.searchMovies);
  }, [movieRequest])

  const toggleShortMovie = () => {
    toggleShort();
    setIsShortMovie(!isShortMovie);
  }

  const onSubmit = (data) => {
    handleReq(data.searchMovies);
  }

  return (
    <section className="search-form">
      <div className="search-form__bar">
        <form className="search-form__input-container" onSubmit={handleSubmit(onSubmit)}>
          <span className="search-form__image" />
          <input className="search-form__input" {...register("searchMovies", { required: true })} placeholder="Фильм" value={movieRequest}></input>
          <button type="submit" className="search-form__button-search"></button>
          {errors.searchMovies?.type === 'required' && <span className="search-form__error">необходимо ввести хотя бы одну букву</span>}
        </form>
        <div className="search-form__checkbox-container">
          <label htmlFor="search-form-checkbox" className="search-form__checkbox">
            <input id="search-form-checkbox" type="checkbox" className="search-form__checkbox-input" checked={isShortMovie} onChange={toggleShortMovie} />
            <span className={isShortMovie ? "search-form__psevdo-checkbox search-form__psevdo-checkbox_type_selected" : "search-form__psevdo-checkbox"} />
          </label>
          <p className="search-form__button-title">Короткометражки</p>
        </div>
      </div>
    </section>
  )
}

export default SearchForm;
