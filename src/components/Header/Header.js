import { Link } from 'react-router-dom';
import Navigation from "../Navigation/Navigation";
import logo from '../../images/logo.svg'

function Header() {

  return (
    <header className='header'>
      <Link to={'/'} className='header__logo'>
        <img src={logo} alt='Лого' />
      </Link>
      <Navigation />
    </header>
  )
}

export default Header;