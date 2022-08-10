import { useState } from "react";

function SearchForm({ isShort, handleReq }) {
  const [isShortMovie, setIsShortMovie] = useState(false);
  const [request, setRequest] = useState('');
  const toggleShortMovie = () => {
    isShort();
    setIsShortMovie(!isShortMovie);
  }

  const handleRequest = (event) => {
    setRequest(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    handleReq(request)
  }

  return (
    <section className="search-form">
      <div className="search-form__bar">
        <form className="search-form__input-container" onSubmit={handleSubmit}>
          <span className="search-form__image" />
          <input className="search-form__input" placeholder="Фильм" required onChange={handleRequest} ></input>
          <button type="submit" className="search-form__button-search"></button>
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
