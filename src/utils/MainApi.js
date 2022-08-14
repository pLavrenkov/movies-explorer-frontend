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