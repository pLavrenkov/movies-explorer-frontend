import React, { useState, useEffect } from 'react';
import { Route, Routes, useNavigate, Navigate } from 'react-router-dom';

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
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';


function App() {
  const navigate = useNavigate();
  const [isError, setIsError] = useState(false);
  const [isLogged, setIsLoged] = useState(false);
  const [errorServer, setErrorServer] = useState('');
  const [currentUser, setCurrentUser] = useState(defaultUser);
  const [apiMessage, setApiMessage] = useState('');
  const [isUpdateDone, setIsUpdateDone] = useState(false);

  const handleRegister = (name, email, password) => {
    mainApi.register(name, email, password)
      .then(res => {
        if (res.ok) {
          setIsError(false);
          return res.json();
        } else {
          throw new Error(`Возникла ошибка, не удалось зарегистрироваться. Код ошибки ${res.status}, тип ошибки ${res.statusText}`);
        }
      })
      .then((user) => {
        setIsLoged(true);
        navigate('/', { replace: true });
        setCurrentUser(user);
      })
      .catch((err) => {
        setIsError(true);
        setErrorServer(err.message);
        console.log(err);
      })
  }

  const handleLogin = (email, password) => {
    mainApi.login(email, password)
      .then(res => {
        if (res.ok) {
          setIsError(false);
          return res.json();
        } else {
          throw new Error(`Возникла ошибка, не удалось войти. Код ошибки ${res.status}, тип ошибки ${res.statusText}`);
        }
      })
      .then((res) => {
        if (res) {
          setCurrentUser(res);
          setIsLoged(true);
          navigate('/movies', { replace: true });
        }
      })
      .catch((err) => {
        setIsError(true);
        setErrorServer(err.message);
        console.log(err);
      })
  }

  useEffect(() => {
    mainApi.getUser()
        .then((userInfo) => {
          setIsLoged(true);
          setCurrentUser(userInfo);
          navigate('/movies', { replace: true });
        })
        .catch((err) => {
          setIsLoged(false);
          navigate('/signin', { replace: true });
          console.log(`Не удалось войти - пользователь не был авторизован ${err}`);
        })
  }, []);

  const handleLogout = () => {
    mainApi.logout()
      .then((res) => {
        setIsLoged(false);
        navigate('/', { replace: true });
      })
      .catch((err) => {
        setIsError(true);
        setErrorServer(err.message);
        console.log(err);
      })
  }

  const handleUpdateUser = (name, email) => {
    mainApi.updateUser(name, email)
      .then((newUserInfo) => {
        setCurrentUser(newUserInfo);
        setIsUpdateDone(true);
        setApiMessage('Изменения профиля зарегистрированы')
      })
      .catch((err) => {
        setIsError(true);
        setErrorServer(err.message);
        console.log(err);
      });
  }

  return (
    <div className='body'>
      <div className='page'>
        <CurrentUserContext.Provider value={currentUser}>
          <Header logged={isLogged} />
          <main className='page-content'>
            <Routes>
              <Route element={<ProtectedRoute isLogged={isLogged} />}>
                <Route path="/movies" element={<Movies />} />
                <Route path="/saved-movies" element={<SavedMovies />} />
                <Route path="/profile" element={<Profile
                  handleUpdateUser={handleUpdateUser}
                  logoutSubmit={handleLogout}
                  errorServer={errorServer}
                  setIsError={setIsError}
                  isError={isError}
                  onUpdated={setIsUpdateDone}
                  isUpdated={isUpdateDone}
                  message={apiMessage}
                />} />
              </Route>
              <Route exact path="/" element={<Main />} />
              <Route path="/signup" element={<Register registerSubmit={handleRegister} errorServer={errorServer} isError={isError} />} />
              <Route path="/signin" element={<Login loginSubmit={handleLogin} errorServer={errorServer} isError={isError} />} />
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
