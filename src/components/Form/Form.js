function Form({ name, children, buttonName, buttonState, onSubmit, errorServer, isError, isUpdated, message }) {

  return (
    <form className={name === 'profile' ? "form form_type_profile" : "form"} onSubmit={onSubmit}>
      {children}
      <div className="form__messages">
        {isUpdated && <span className="form__server-message">{message}</span>}
        {isError && <span className="form__server-error">{errorServer}</span>}
      </div>
      <button type="submit" className="form__button" disabled={!buttonState} >{buttonName} </button>

    </form>
  )
}

export default Form;
