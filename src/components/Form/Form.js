import { Link } from 'react-router-dom';

function Form({children, button, linkpath, linkname, linkQuestion}) {
  return (
    <form className="form">
      {children}
      <button type="submit" className="form__button">{button}</button>
      <nav className='form__nav'>
        <p className='form__subtitle'>{linkQuestion}</p>
        <Link to={linkpath} className='form__link'>{linkname}</Link>
      </nav>
    </form>
  )
}

export default Form;
