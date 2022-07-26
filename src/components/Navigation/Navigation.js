import { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';

function Navigation() {
  const location = useLocation();
  const [isNavOpened, setIsNavOpened] = useState(false);
  console.log(location.pathname);

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
      {(location.pathname === ('/movies' || '/saved-movies' || '/profile')) &&
        <nav className={isNavOpened ? 'navigation__bar navigation__bar_type_auth-page navigation__bar_displayed' : 'navigation__bar navigation__bar_type_auth-page'}>
          <Link to={'/movies'} className='navigation__link navigation__link_type_movies'>Фильмы</Link>
          <Link to={'/saved-movies'} className='navigation__link navigation__link_type_saved-movies'>Сохраненные фильмы</Link>
          <Link to={'/profile'} className='navigation__link navigation__link_type_profile'>
            <span>Аккаунт</span>
            <button className='navigation__account-button'></button>
          </Link>
          <button className={isNavOpened ? 'navigatiion__open-button' : 'navigatiion__open-button navigation__open-button_displayed'}></button>
        </nav>
      }
    </div>
  )
}

export default Navigation;
