import { useEffect, useState } from "react";
import Form from "../Form/Form";

import useFormValidation from '../UseFormValidation/useFormValidation';

function Profile() {
  const user = {
    name: 'Виталий',
    email: 'test@test.com'
  }

  const [isOnEdit, setIsOnEdit] = useState(false);
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);

  const handleEditButton = () => {
    setIsOnEdit(true);
  }

  const { values, handleChange, errors, isValid, resetForm, setValues } = useFormValidation();

  useEffect(() => {
    setValues({
      name: user.name,
      email: user.email
    })
  }, [])


  const handleSubmit = (event) => {
    console.log(`email: ${values.email}; name: ${values.name}`);
    values.name ? setName(values.name) : setName(name);
    values.email ? setEmail(values.email) : setEmail(user.email);
    event.preventDefault();
    resetForm();
    //event.target.reset();
    setIsOnEdit(false);
  }

  return (
    <>
      <section className="profile">
        <h1 className='profile__title'>Привет, {name}!</h1>
        <Form name={'profile'} buttonName={'Сохранить'} buttonState={isValid} onSubmit={handleSubmit}>
          <p className='form__set form__set_type_profile'>
            <label htmlFor='profile-name' className='form__label form__label_type_profile'>Имя</label>
            <input id='profile-name' type='text' name="name" className='form__input form__input_type_profile' onChange={handleChange} placeholder={name} value={values.name || name} ></input>
            <span className={errors.name ? 'form__error form__error_type_profile form__error_type_active' : 'form__error form__error_type_profile'}>[error.name]</span>
          </p>
          <p className='form__set form__set_type_profile'>
            <label htmlFor='profile-email' className='form__label form__label_type_profile'>E-mail</label>
            <input id='profile-email' type='email' name="email" className='form__input form__input_type_profile' onChange={handleChange} placeholder={email} value={values.email || email}></input>
            <span className={errors.email ? 'form__error form__error_type_profile form__error_type_active' : 'form__error form__error_type_profile'}>{errors.email}</span>
          </p>
        </Form>
        <div className={isOnEdit ? "profile__button-set profile__button-set_type_hidden" : "profile__button-set"}>
          <button className='profile__button' disabled={!isValid} onClick={handleEditButton}>Редактировать</button>
          <button className='profile__button profile__button_type_logout'>Выйти из аккаунта</button>
        </div>
      </section>
    </>
  )
}

export default Profile;
