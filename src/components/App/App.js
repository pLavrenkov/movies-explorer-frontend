import React, { useState } from 'react';
import { Route, Routes, useLocation, useNavigate, Navigate } from 'react-router-dom';

import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Register from "../Register/Register";
import Login from "../Login/Login";
import NotFoundPage from '../NotFoundPage/NotFoundPage';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { CurrentUserContext, defaultUser } from '../../contexts/CurrentUserContext';
import * as mainApi from '../../utils/MainApi';


function App() {
  const navigate = useNavigate();
  const [isError, setIsError] = useState(false);
  const [isLogged, setIsLoged] = useState(true);
  const [errorServer, setErrorServer] = useState('');
  const [currentUser, setCurrentUser] = useState(defaultUser);
  const RedirectToNotFound = <Navigate to="/not-found-page" replace={true} />

  const handleErrorServer = (error) => {
    setErrorServer({
      'code': error.status,
      'message': error.body.message
    })
  }

  const handleRegister = (name, email, password) => {
    mainApi.register(name, email, password)
      .then(res => {
        if (res.ok) {
          setIsError(false);
          navigate('/signin', { replace: true });
          return res.json();
        } else {
          throw new Error(`Возникла ошибка, не удалось зарегистрироваться. Код ошибки ${res.status}, тип ошибки ${res.statusText}`);
        }
      })
      .catch((err) => {
        setIsError(true);
        setErrorServer(err.message);
        console.log(err);
      })
  }


  return (
    <div className='body'>
      <div className='page'>
        <CurrentUserContext.Provider value={currentUser}>
          <Header logged={isLogged} />
          <main className='page-content'>
            <Routes>
              <Route exact path="/" element={<Main />} />
              <Route path="/movies" element={<Movies />} />
              <Route path="/saved-movies" element={<SavedMovies />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/signup" element={<Register registerSubmit={handleRegister} errorServer={errorServer} isError={isError} />} />
              <Route path="/signin" element={<Login />} />
              <Route path="*" element={<Navigate to="/not-found-page" replace={true} />} />
              <Route path="/not-found-page" element={<NotFoundPage />} />
            </Routes>
          </main>
          <Footer />
        </CurrentUserContext.Provider>
      </div>
    </div>
  );
}

export default App;
