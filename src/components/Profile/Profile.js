import { useState } from "react";
import Form from "../Form/Form";
import Header from "../Header/Header";

function Profile() {
  const user = {
    name: 'Виталий',
    email: 'test@test.com'
  }

  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [isOnEdit, setIsOnEdit] = useState(false);
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);

  const handleNameChange = (event) => {
    setName(event.target.value);
  }

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  }

  const handleEditButton = () => {
    setIsOnEdit(true);
  }

  return (
    <>
      <section className="profile">
        <h1 className='profile__title'>Привет, {user.name}!</h1>
        <Form name={'profile'} buttonName={'Сохранить'} buttonState={isButtonDisabled}>
          <p className='form__set form__set_type_profile'>
            <label htmlFor='profile-name' className='form__label form__label_type_profile'>Имя</label>
            <input id='profile-name' type='text' className='form__input form__input_type_profile' disabled={isButtonDisabled} onChange={handleNameChange} value={name} ></input>
            <span className='form__error form__error_type_profile'>Ошибка</span>
          </p>
          <p className='form__set form__set_type_profile'>
            <label htmlFor='profile-email' className='form__label form__label_type_profile'>E-mail</label>
            <input id='profile-email' type='email' className='form__input form__input_type_profile' disabled={isButtonDisabled} onChange={handleEmailChange} value={email}></input>
            <span className='form__error form__error_type_profile '>Ошибка</span>
          </p>
        </Form>
        <div className={isOnEdit ? "profile__button-set profile__button-set_type_hidden" : "profile__button-set"}>
          <button className='profile__button' onClick={handleEditButton}>Редактировать</button>
          <button className='profile__button profile__button_type_logout'>Выйти из аккаунта</button>
        </div>
      </section>
    </>
  )
}

export default Profile;
