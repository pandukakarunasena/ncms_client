import config from 'config';
import axios from '../helpers/axios-intercepter';
import { authHeader } from '../helpers/auth-header';
import { handleResponse } from '../helpers/handle-response';

export const userService = {
  getAll,
  getById,
  //delete
  //update
  //getByUsernameAndPassword
};

function getAll() {
  const requestOptions = {
    method: 'get',
    url: `user/`,
    headers: authHeader(),
  };
  return axios({
    requestOptions,
  })
    .then(handleResponse)
    .then((users) => {
      console.log(users);
    });
}

function getById(id) {
  const requestOptions = { method: 'GET', headers: authHeader() };
  return fetch(`${config.apiUrl}/users/${id}`, requestOptions).then(
    handleResponse
  );
}

function deleteUserById(id) {}

function updateUserById(id) {}
