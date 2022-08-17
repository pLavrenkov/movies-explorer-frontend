import { useState } from "react";

function AboutProject() {
  const [isBackendChecked, setIsBackendChecked] = useState(true);
  const handleBtn = () => {
    setIsBackendChecked(!isBackendChecked);
  }

  return (
    <section id="about-project" className="about-project">
      <h3 className="about-project__title">О проекте</h3>
      <div className="about-project__description-container">
        <h3 className="about-project__subtitle">Дипломный проект включал 5 этапов</h3>
        <p className="about-progect__description">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
      </div>
      <div className="about-project__description-container">
        <h4 className="about-project__subtitle">На выполнение диплома ушло 5 недель</h4>
        <p className="about-progect__description">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
      </div>
      <div className="about-project__time-line">
        <button type="button" className={isBackendChecked ? "about-project__btn about-project__btn_type_checked" : "about-project__btn"} onClick={handleBtn}>1 неделя</button>
        <span className="about-project__btn-name">Back-end</span>
        <button type="button" className={isBackendChecked ? "about-project__btn" : "about-project__btn about-project__btn_type_checked"} onClick={handleBtn}>4 недели</button>
        <span className="about-project__btn-name">Front-end</span>
      </div>
    </section>
  )
}

export default AboutProject;
