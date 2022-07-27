import { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';

function Navigation() {
  const location = useLocation();
  const [isNavOpened, setIsNavOpened] = useState(false);

  const handleNavOpen = () => {
    setIsNavOpened(true);
  }

  const handleNavClose = () => {
    setIsNavOpened(false);
  }

  console.log(location.pathname);

  const auth = location.pathname !== ('/signin' || '/signup');

  return (
    <div className='navigation'>
      {(location.pathname === '/') &&
        <nav className='navigation__bar navigation__bar_type_main-page'>
          <Link to={'/signup'} className='navigation__link navigation__link_type_register'>Регистрация</Link>
          <Link to={'/signin'} className='navigation__link navigation__link_type_login'>
            <button className='navigation__login-button'>Войти</button>
          </Link>
        </nav>
      }
      {(location.pathname !== '/' && (location.pathname !== '/signin') && (location.pathname !== '/signup')) &&
        <nav className='navigation__bar navigation__bar_type_auth-page'>
          <ul className={isNavOpened ? 'navigation__list navigation__list_opened' : 'navigation__list'}>
            <button className={isNavOpened ? 'navigatiion__close-button' : 'navigatiion__close-button navigation__close-button_displayed'} onClick={handleNavClose} ></button>
            <Link to={'/movies'} className='navigation__link navigation__link_type_movies'>Фильмы</Link>
            <Link to={'/saved-movies'} className='navigation__link navigation__link_type_saved-movies'>Сохраненные фильмы</Link>
            <Link to={'/profile'} className='navigation__link navigation__link_type_profile' onClick={handleNavClose}>
              <span>Аккаунт</span>
              <button className='navigation__account-button' onClick={handleNavClose}></button>
            </Link>
          </ul>
          <button className={isNavOpened ? 'navigatiion__open-button' : 'navigatiion__open-button navigation__open-button_opened'} onClick={handleNavOpen} ></button>
        </nav>
      }
    </div>
  )
}

export default Navigation;
