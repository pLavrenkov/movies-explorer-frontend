function Form({ name, children, buttonName, buttonState, onSubmit, errorServer, isError }) {
  console.log(errorServer);

  return (
    <form className={name === 'profile' ? "form form_type_profile" : "form"} onSubmit={onSubmit}>
      {children}
      <span className={isError ? "form__server-error" : "form__server-error form__server-error_type_hidden"}>{errorServer}</span>
      <button type="submit" className="form__button" disabled={!buttonState} >{buttonName}</button>
    </form>
  )
}

export default Form;
