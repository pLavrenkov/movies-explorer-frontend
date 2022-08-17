import { useEffect, useState, useContext } from "react";
import Form from "../Form/Form";

import useFormValidation from '../UseFormValidation/useFormValidation';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function Profile({ logoutSubmit, handleUpdateUser, errorServer, isError, isUpdated, message, onUpdated, setIsError }) {
  const currentUser = useContext(CurrentUserContext);
  const [isOnEdit, setIsOnEdit] = useState(false);
  const [name, setName] = useState(currentUser.name);
  const [email, setEmail] = useState(currentUser.email);
  const { values, handleChange, errors, isValid, resetForm, setValues } = useFormValidation();

  const handleEditButton = () => {
    setIsOnEdit(true);
    onUpdated(false);
    setIsError(false);
  }

  const handleLogoutSubmit = (event) => {
    //event.preventDefault();
    logoutSubmit();
  }

  useEffect(() => {
    setValues({
      name: currentUser.name,
      email: currentUser.email
    });
    setName(currentUser.name);
  }, [currentUser])


  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`email: ${values.email}; name: ${values.name}`);
    handleUpdateUser(values.name, values.email)

    setName(currentUser.name);
    setEmail(currentUser.email);

    resetForm();
    //event.target.reset();
    setIsOnEdit(false);
  }

  return (
    <>
      <section className="profile">
        <h1 className='profile__title'>Привет, {name}!</h1>
        <Form name={'profile'} buttonName={'Сохранить'} buttonState={isValid} onSubmit={handleSubmit} errorServer={errorServer} isError={isError} message={message} isUpdated={isUpdated} >
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
          <button type="button" className='profile__button profile__button_type_logout' onClick={handleLogoutSubmit}>Выйти из аккаунта</button>
        </div>
      </section>
    </>
  )
}

export default Profile;
