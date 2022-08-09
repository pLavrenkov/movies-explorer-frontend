function Portfolio() {
  return (
    <section className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <ul className="portfolio__link-list">
        <li className="portfolio__link-point portfolio__link-point_type_underlined">
          <a href="https://github.com/pLavrenkov/how-to-learn" target="_blank" rel="noreferrer" className="portfolio__link">
            <p className="portfolio__link-title">Статичный сайт</p>
            <div className="portfolio__link-arrow" />
          </a>
        </li>
        <li className="portfolio__link-point portfolio__link-point_type_underlined">
          <a href="https://github.com/pLavrenkov/russian-travel" target="_blank" rel="noreferrer" className="portfolio__link">
            <p className="portfolio__link-title">Адаптивный сайт</p>
            <div className="portfolio__link-arrow" />
          </a>
        </li>
        <li className="portfolio__link-point">
          <a href="https://github.com/pLavrenkov/mesto" target="_blank" rel="noreferrer" className="portfolio__link">
            <p className="portfolio__link-title">Одностраничное приложение</p>
            <div className="portfolio__link-arrow" />
          </a>
        </li>
      </ul>
    </section>
  )
}

export default Portfolio;
