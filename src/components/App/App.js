import React, { useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

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


function App() {
  const [isLogged, setIsLoged] = useState(true);
  const [currentUser, setCurrentUser] = useState(defaultUser);

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
              <Route path="/signup" element={<Register />} />
              <Route path="/signin" element={<Login />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </main>
          <Footer />
        </CurrentUserContext.Provider>
      </div>
    </div>
  );
}

export default App;
