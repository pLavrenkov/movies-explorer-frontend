import { Link, useLocation } from 'react-router-dom';

function Footer() {
  const location = useLocation();

  return (
    <footer className={((location.pathname === '/profile') || (location.pathname === '/signup') || (location.pathname === '/signin')) ? 'footer footer_type_hidden' : 'footer'}>
      <p className='footer__head'>Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <div className='footer__link-bar'>
        <span className='footer__copyright'>&copy; 2022</span>
        <ul className='footer__nav'>
          <li>
            <a href='https://practicum.yandex.ru/' target="_blank" rel="noreferrer" className='footer__link'>Яндекс.Практикум</a>
          </li>
          <li>
            <a href='https://github.com' target="_blank" rel="noreferrer" className='footer__link'>GitHub</a>
          </li>
          <li>
            <a href='https://vk.com/' target="_blank" rel="noreferrer" className='footer__link'>ВКонтакте</a>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer;
