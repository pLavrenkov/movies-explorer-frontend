import { useState } from 'react';
import { Link } from 'react-router-dom';

import Form from "../Form/Form";
import useFormValidation from '../UseFormValidation/useFormValidation';

function Register() {
  const { values, handleChange, errors, isValid, resetForm } = useFormValidation();

  const handleSubmit = (event) => {
    console.log(`name: ${values.name}; email: ${values.email}; password: ${values.password}`);
    event.preventDefault();
    resetForm();
    event.target.reset();
  }

  return (
    <section className='register'>
      <h1 className='register__title'>Добро пожаловать!</h1>
      <Form name={'register'} buttonName={'Зарегистрироваться'} buttonState={isValid} onSubmit={handleSubmit}>
        <p className='form__set'>
          <label htmlFor='register-name' className='form__label'>Имя</label>
          <input id='register-name' type='text' name='name' className='form__input' required placeholder='Введите имя' onChange={handleChange}></input>
          <span className={errors.name ? 'form__error form__error_type_active' : 'form__error'}>{errors.name}</span>
        </p>
        <p className='form__set'>
          <label htmlFor='register-email' className='form__label'>E-mail</label>
          <input id='register-email' type='email' name='email' className='form__input' required placeholder='Введите email' onChange={handleChange}></input>
          <span className={errors.email ? 'form__error form__error_type_active' : 'form__error'}>{errors.email}</span>
        </p>
        <p className='form__set'>
          <label htmlFor='register-password' className='form__label'>Пароль</label>
          <input id='register-password' type='password' name='password' className='form__input' required placeholder='Введите пароль' onChange={handleChange}></input>
          <span className={errors.email ? 'form__error form__error_type_active' : 'form__error'}>{errors.password}</span>
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
