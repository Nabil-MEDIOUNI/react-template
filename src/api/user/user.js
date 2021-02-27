import API from '../config/index';
import { getTokenWithExpiry } from '../helpers/HandleToken';

const token = getTokenWithExpiry();

export const updateUser = (body, userId) => fetch(`${API}/user/${userId}`, {
  method: 'PUT',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
  },
  credentials: 'include',
  body: JSON.stringify(body),
})
  .then((response) => response.json())
  .then(() => {
    console.log('User updated successfully!');
  })
  .catch((err) => {
    console.log(err);
  });

export const deleteUser = (userId) => fetch(`${API}/user/${userId}`, {
  method: 'DELETE',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
  },
  credentials: 'include',
})
  .then((response) => response.json())
  .catch((err) => {
    console.log(err);
  });

export const getAllUsers = () => fetch(`${API}/users`, {
  method: 'GET',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
  },
  credentials: 'include',
})
  .then((response) => response.json())
  .catch((err) => {
    console.log(err);
  });

export const getVideos = () => fetch(`${API}/sentVideo`, {
  method: 'GET',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
  },
  credentials: 'include',
})
  .then((response) => response.json())
  .catch((err) => {
    console.log(err);
  });
