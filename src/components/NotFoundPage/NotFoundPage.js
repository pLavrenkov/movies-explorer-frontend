import { useNavigate } from 'react-router-dom';

function NotFoundPage() {
  let navigate = useNavigate();
  const handleClickBack = () => {
    navigate(-1);
  }

  return (
    <section className="not-found-page">
      <h1 className="not-found-page__title">404</h1>
      <h3 className="not-found-page__subtitle">Страница не найдена</h3>
      <button onClick={handleClickBack} className="not-found-page__link">Назад</button>
    </section>
  )
}

export default NotFoundPage;
