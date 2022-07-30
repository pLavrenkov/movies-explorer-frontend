function Form({children, button}) {
  return (
    <form className="form">
      {children}
      <button type="submit" className="form__button">{button}</button>
    </form>
  )
}

export default Form;
