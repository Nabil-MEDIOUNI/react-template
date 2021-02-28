import API from '../config/index';

export const signin = (user) => fetch(`${API}/signin`, {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  credentials: 'include',
  body: JSON.stringify(user),
})
  .then((response) => response.json())
  .catch((err) => {
    console.log(err);
  });

export const signout = () => fetch(`${API}/signout`, {
  method: 'GET',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  credentials: 'include',
})
  .then((response) => response.json())
  .catch((err) => {
    console.log(err);
  });
