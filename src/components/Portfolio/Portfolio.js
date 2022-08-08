function Portfolio() {
  return (
    <section className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <ul className="portfolio__link-list">
        <li className="portfolio__link-point portfolio__link-point_type_underlined">
          <p className="portfolio__link-title">Статичный сайт</p>
          <a href="https://github.com/pLavrenkov/how-to-learn" className="portfolio__link">
            <div className="portfolio__link-arrow" />
          </a>
        </li>
        <li className="portfolio__link-point portfolio__link-point_type_underlined">
          <p className="portfolio__link-title">Адаптивный сайт</p>
          <a href="https://github.com/pLavrenkov/russian-travel" className="portfolio__link">
            <div className="portfolio__link-arrow" />
          </a>
        </li>
        <li className="portfolio__link-point">
          <p className="portfolio__link-title">Одностраничное приложение</p>
          <a href="https://github.com/pLavrenkov/mesto" className="portfolio__link">
            <div className="portfolio__link-arrow" />
          </a>
        </li>
      </ul>
    </section>
  )
}

export default Portfolio;
