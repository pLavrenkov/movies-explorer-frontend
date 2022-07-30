import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className='footer'>
      <p className='footer__head'>Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <div className='footer__link-bar'>
        <span className='footer__copyright'>&copy; 2022</span>
        <ul className='footer__nav'>
          <li>
            <a href='https://practicum.yandex.ru/' className='footer__link'>Яндекс.Практикум</a>
          </li>
          <li>
            <a href='https://github.com' className='footer__link'>GitHub</a>
          </li>
          <li>
            <a href='https://vk.com/' className='footer__link'>ВКонтакте</a>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer;
