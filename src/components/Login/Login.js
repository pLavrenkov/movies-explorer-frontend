import { Link } from 'react-router-dom';

import Form from "../Form/Form";
import { useState } from 'react';
import useFormValidation from '../UseFormValidation/useFormValidation';

function Login() {
  const { values, handleChange, errors, isValid, resetForm } = useFormValidation();

  const handleSubmit = (event) => {
    console.log(`email: ${values.email}; password: ${values.password}`);
    event.preventDefault();
    resetForm();
    event.target.reset();
  }

  return (
    <section className='login'>
      <h1 className='login__title'>Рады видеть!</h1>
      <Form name={'login'} buttonName={'Войти'} buttonState={isValid} onSubmit={handleSubmit}>
        <p className='form__set'>
          <label htmlFor='login-email' className='form__label'>E-mail</label>
          <input id='login-email' name='email' type='email' className='form__input' required placeholder='Введите еmail' onChange={handleChange}></input>
          <span className={errors.email ? 'form__error form__error_type_active' : 'form__error'}>{errors.email}</span>
        </p>
        <p className='form__set'>
          <label htmlFor='login-password' className='form__label'>Пароль</label>
          <input id='login-password' name='password' type='password' className='form__input' required placeholder='Введите пароль' onChange={handleChange}></input>
          <span className='form__error'>errors.password</span>
        </p>
      </Form>
      <nav className='form__nav'>
        <p className='form__subtitle'>Еще не зарегистрированы?</p>
        <Link to={'/signup'} className='form__link'>Зарегистрироваться</Link>
      </nav>
    </section>
  )
}

export default Login;
