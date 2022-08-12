function Form({ name, children, buttonName, buttonState, onSubmit }) {
  return (
    <form className={name === 'profile' ? "form form_type_profile" : "form"} onSubmit={onSubmit}>
      {children}
      <span className="form__server-error">Ощибка сервера</span>
      <button type="submit" className="form__button" disabled={!buttonState} >{buttonName}</button>
    </form>
  )
}

export default Form;
