const url = 'https://api.movies.plavrenkov.nomoredomains.xyz';

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
      "Authorization": `Bearer ${token}`,
    },
    credentials: 'include',
  })
    .then(checkResponse)
    .catch((err) => {
      console.log(`Не удалось войти. Ошибка ${err}`)
    })
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

