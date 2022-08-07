import photo from "../../images/lavrenkov.jpg"

function AboutMe() {
  return (
    <section id="about-me" className="about-me">
      <h3 className="about-me__section-title">Обо мне</h3>
      <div className="about-me__container">
        <div className="about-me__cv">
          <h2 className="about-me__title">Павел Лавренков</h2>
          <p className="about-me__job">Фронтенд разработчик, 44 года</p>
          <p className="about-me__description">Я родился и живу в Москве, получил диплом юриста в МГЮА и работаю юристом всю сознательную жизнь. У меня есть жена и двое детей. Кодить начал в 2021. Я люблю логические структуры и расцениваю разработку как хобби.
            После заврешния курса веб-разработки буду реализовывать собственные идеи, связанные с созданием полезных веб-сервисов.</p>
        </div>
        <img src={photo} alt="Фото студента" className="about-me__image" />
        <ul className="about-me__nav-bar">
          <li className="about-me__nav-item">
            <a href="https://vk.com/plavrenkov" className="about-me__link">ВКонтакте</a>
          </li>
          <li className="about-me__nav-item">
            <a href="https://github.com/pLavrenkov" className="about-me__link">GutHub</a>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default AboutMe;
