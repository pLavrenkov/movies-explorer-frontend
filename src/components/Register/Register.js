import { useState } from 'react';
import { Link } from 'react-router-dom';

import Form from "../Form/Form";
import Header from "../Header/Header";

function Register() {
  const nonAuthClassHeader = 'header header_type_non-auth';
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  return (
    <section className='register'>
      <Header classNonAuth={nonAuthClassHeader} />
      <h1 className='register__title'>Добро пожаловать!</h1>
      <Form name={'register'} buttonName={'Зарегистрироваться'} buttonState={isButtonDisabled}>
        <p className='form__set'>
          <label htmlFor='register-name' className='form__label'>Имя</label>
          <input id='register-name' type='text' className='form__input'></input>
          <span className='form__error'></span>
        </p>
        <p className='form__set'>
          <label htmlFor='register-email' className='form__label'>E-mail</label>
          <input id='register-email' type='email' className='form__input'></input>
          <span className='form__error'></span>
        </p>
        <p className='form__set'>
          <label htmlFor='register-password' className='form__label'>Пароль</label>
          <input id='register-password' type='password' className='form__input'></input>
          <span className='form__error'>Ошибка</span>
        </p>
      </Form>
      <nav className='form__nav'>
        <p className='form__subtitle'>Уже зарегистрированы?</p>
        <Link to={'/signin'} className='form__link'>Войти</Link>
      </nav>
    </section>
  )
}

export default Register;
