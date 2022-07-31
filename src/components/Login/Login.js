import { Link } from 'react-router-dom';

import Header from "../Header/Header";
import Form from "../Form/Form";

function Login() {
  const nonAuthClassHeader = 'header header_type_non-auth';

  return (
    <section className='login'>
      <Header classNonAuth={nonAuthClassHeader} />
      <h1 className='login__title'>Рады видеть!</h1>
      <Form name={'login'} button={'Зарегистрироваться'}>
        <p className='form__set'>
          <label htmlFor='login-email' className='form__label'>E-mail</label>
          <input id='login-email' type='email' className='form__input'></input>
          <span className='form__error'></span>
        </p>
        <p className='form__set'>
          <label htmlFor='login-password' className='form__label'>Пароль</label>
          <input id='login-password' type='password' className='form__input'></input>
          <span className='form__error'>Ошибка</span>
        </p>
      </Form>
      <nav className='login__nav'>
        <p className='login__subtitle'>Еще не зарегистрированы?</p>
        <Link to={'/signup'} className='login__link'>Регистрация</Link>
      </nav>
    </section>
  )
}

export default Login;
