import { Link, useLocation } from 'react-router-dom';
import Navigation from "../Navigation/Navigation";
import logo from '../../images/logo.svg'
import { useState } from 'react';

function Header({logged}) {
  const location = useLocation();
  const pages = ['/', '/movies', 'saved-movies', 'profile', ]

  return (
    <header className={(location.pathname === '/not-found-page') ? 'header header_type_hidden' :
      ((location.pathname === '/signin' || location.pathname === '/signup') ? 'header header_type_non-auth' : 'header')}>
      <Link to={'/'} className='header__logo'>
        <img src={logo} alt='Лого' />
      </Link>
      <Navigation logged={logged} />
    </header>
  )
}

export default Header;