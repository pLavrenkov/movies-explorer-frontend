function NavTab() {
  return (
    <nav className="nav-tab">
      <ul className="nav-tab__nav-container">
        <li className="nav-tab__btn-container">
          <a href="#about-project" className="nav-tab__link">
            <button type="button" className="nav-tab__btn">О проекте</button>
          </a>
        </li>
        <li className="nav-tab__btn-container">
          <a href="#techs" className="nav-tab__link">
            <button type="button" className="nav-tab__btn">Технологии</button>
          </a>
        </li>
        <li className="nav-tab__btn-container">
          <a href="#about-me" className="nav-tab__link">
            <button type="button" className="nav-tab__btn">Студент</button>
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default NavTab;
