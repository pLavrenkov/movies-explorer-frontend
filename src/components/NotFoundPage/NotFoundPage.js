import { Link, useNavigate } from 'react-router-dom';

function NotFoundPage() {
  let navigate = useNavigate();

  const handleClickBack = () => {
    if (window.history.state && window.history.state.idx > 0) {
      navigate(-1);
    } else {
      navigate('/', { replace: true });
    }
  }

  console.log(navigate(-1));

  return (
    <section className="not-found-page">
      <h1 className="not-found-page__title">404</h1>
      <h3 className="not-found-page__subtitle">Страница не найдена</h3>
      <Link to={handleClickBack} className="not-found-page__link">Назад</Link>
    </section>
  )
}

export default NotFoundPage;
