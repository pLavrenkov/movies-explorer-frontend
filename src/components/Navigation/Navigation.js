import { useState } from 'react';
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
          <Link to={'/signup'} className='navigation__link navigation__link_type_register'>
            <span className='navigation__link-name navigation__link-name_type_register'>Регистрация</span>
          </Link>
          <Link to={'/signin'} className='navigation__link navigation__link_type_login'>
            <button className='navigation__login-button'>Войти</button>
          </Link>
        </nav>
      }
      {(location.pathname !== '/' && (location.pathname !== '/signin') && (location.pathname !== '/signup')) &&
        <nav className='navigation__bar navigation__bar_type_auth-page'>
          <ul className={isNavOpened ? 'navigation__list navigation__list_opened' : 'navigation__list'}>
            <button className={isNavOpened ? 'navigatiion__close-button' : 'navigatiion__close-button navigation__close-button_displayed'} onClick={handleNavClose} ></button>
            <Link to={'/'} className='navigation__link navigation__link_type_main-page'>
              <span className='navigation__link-name'>Главная</span>
            </Link>
            <Link to={'/movies'} className='navigation__link navigation__link_type_movies'>
              <span className='navigation__link-name'>Фильмы</span>
            </Link>
            <Link to={'/saved-movies'} className='navigation__link navigation__link_type_saved-movies'>
              <span className='navigation__link-name'>Сохраненные фильмы</span>
            </Link>
            <Link to={'/profile'} className='navigation__link navigation__link_type_profile' onClick={handleNavClose}>
              <span className='navigation__link-name navigation__link-name_type_profile'>Аккаунт</span>
              <button className='navigation__account-button' onClick={handleNavClose}></button>
            </Link>
          </ul>
          <button className={isNavOpened ? 'navigatiion__open-button' : 'navigatiion__open-button navigation__open-button_opened'} onClick={handleNavOpen} ></button>
          <div className={isNavOpened ? 'navigation__overlay navigation__overlay_opened' : 'navigation__overlay'}></div>
        </nav>
      }
    </div>
  )
}

export default Navigation;
