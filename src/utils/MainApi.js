export const url = 'https://api.movies.plavrenkov.nomoredomains.xyz';

const checkResponse = (res) => {
  if (res.ok) {
    return res.json();
  } else {
    return Promise.reject(`Ошибка: ${res.status}`);
  }
}

export const register = (name, email, password) => {
  return fetch(`${url}/signup`, {
    method: 'POST',
    headers: {
      'Accept': "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      'name': name,
      'email': email,
      'password': password,
    }),
    credentials: 'include',
  })
}

export const login = (email, password) => {
  return fetch(`${url}/signin`, {
    method: 'POST',
    headers: {
      'Accept': "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      'email': email,
      'password': password
    }),
    credentials: 'include',
  })
    .catch((err) => {
      console.log(`Не удалось войти. Ошибка ${err}`)
    })
}

export const checkToken = (token) => {
  return fetch(`${url}/users/me`, {
    method: 'GET',
    headers: {
      'Accept': "application/json",
      "Content-Type": "application/json",
      //"Authorization": `Bearer ${token}`,
    },
    credentials: 'include',
  })
    .then(checkResponse)
}

export const getUser = () => {
  return fetch(`${url}/users/me`, {
    headers: {
      'Accept': "application/json",
      "Content-Type": "application/json",
    },
    credentials: 'include',
  })
    .then(checkResponse)
}

export const logout = () => {
  return fetch(`${url}/signout`, {
    method: 'POST',
    headers: {
      'Accept': "application/json",
      "Content-Type": "application/json",
    },
    credentials: 'include',
  })
    .then(checkResponse)
    .catch((err) => {
      console.log(`Не удалось выйти. Ошибка ${err}`)
    })
}

export const updateUser = (name, email) => {
  return fetch(`${url}/users/me`, {
    method: 'PATCH',
    headers: {
      'Accept': "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: name,
      email: email
    }),
    credentials: 'include',
  })
    .then(checkResponse)
}

export const getSavedMovies = () => {
  return fetch(`${url}/movies`, {
    headers: {
      'Accept': "application/json",
      "Content-Type": "application/json",
    },
    credentials: 'include',
  })
    .then(checkResponse)
}

export const saveMovie = (
  duration,
  image,
  nameRU,
  country,
  director,
  year,
  description,
  trailerLink,
  thumbnail,
  owner,
  movieId,
  nameEN
) => {
  return fetch(`${url}/movies`, {
    method: 'POST',
    headers: {
      'Accept': "application/json",
      "Content-Type": "application/json",
    },
    credentials: 'include',
    body: JSON.stringify({
      country: country,
      director: director,
      duration: duration,
      year: year,
      description: description,
      image: image,
      trailerLink: trailerLink,
      thumbnail: thumbnail,
      owner: owner,
      movieId: movieId,
      nameRU: nameRU,
      nameEN: nameEN
    }),
  })
    .then(checkResponse)
}

export const deleteMovie = (movieId) => {
  return fetch(`${url}/movies/${movieId}`, {
    method: 'DELETE',
    headers: {
      'Accept': "application/json",
      "Content-Type": "application/json",
    },
    credentials: 'include',
  })
  .then(checkResponse)
}
