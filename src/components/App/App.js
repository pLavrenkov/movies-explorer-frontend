import React, { useState, useEffect } from 'react';
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
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';


function App() {
  const navigate = useNavigate();
  const [isError, setIsError] = useState(false);
  const [isLogged, setIsLoged] = useState(true);
  const [errorServer, setErrorServer] = useState('');
  const [currentUser, setCurrentUser] = useState(defaultUser);
  const [userData, setUserData] = useState({});

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
          setUserData({
            email: email,
            id: ''
          })
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

  const checkToken = () => {
    const token = localStorage.getItem('token');
    if (token) {
      mainApi.checkToken(token)
        .then(res => {
          setUserData({
            id: res._id,
            email: res.email
          });
          setIsLoged(true);
          navigate('/movies', { replace: true });
        })
        .catch((err) => {
          console.log(`Не удалось проверить токен. ${err}`)
        })
    }
  }

  useEffect(() => {
    checkToken();
  }, []);

  useEffect(() => {
    if (isLogged) {
      mainApi.getUser()
        .then((userInfo) => {
          setCurrentUser(userInfo);
        })
        .catch((err) => {
          alert(`Возникла ошибка при загрузке данных пользователя ${err}`);
        })
    }
  }, [isLogged])

  const handleLogout = () => {
    mainApi.logout()
      .then((res) => {
        console.log(res);
        setUserData({
          id: '',
          email: ''
        });
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
        console.log(newUserInfo);
        setCurrentUser({
          id: newUserInfo._id,
          name: newUserInfo.name,
          email: newUserInfo.email
        });
        console.log(newUserInfo);
        console.log(currentUser);
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
              <Route element= {<ProtectedRoute isLogged={isLogged}/>}>
                <Route path="/movies" element={<Movies />} />
                <Route path="/saved-movies" element={<SavedMovies />} />
                <Route path="/profile" element={<Profile handleUpdateUser={handleUpdateUser} logoutSubmit={handleLogout} errorServer={errorServer} isError={isError} />} />
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
