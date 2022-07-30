import { Link, useLocation } from 'react-router-dom';
import Navigation from "../Navigation/Navigation";
import logo from '../../images/logo.svg'

function Header(classNonAuth) {
const location = useLocation();

  return (
    <header className={(location.pathname === '/signin' || location.pathname === '/signup') ? classNonAuth.classNonAuth : 'header'}>
      <Link to={'/'} className='header__logo'>
        <img src={logo} alt='Лого' />
      </Link>
      <Navigation />
    </header>
  )
}

export default Header;