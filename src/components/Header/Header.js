import { Link, useLocation } from 'react-router-dom';
import Navigation from "../Navigation/Navigation";
import logo from '../../images/logo.svg'
import { useState } from 'react';

function Header(classNonAuth) {
  const location = useLocation();
  const [isAuth, setIsAuth] = useState(false);

  return (
    <header className={(location.pathname === '/signin' || location.pathname === '/signup') ? classNonAuth.classNonAuth : 'header'}>
      <Link to={'/'} className='header__logo'>
        <img src={logo} alt='Лого' />
      </Link>
      <Navigation auth={isAuth} />
    </header>
  )
}

export default Header;