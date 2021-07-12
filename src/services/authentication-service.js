import { BehaviorSubject } from 'rxjs';
import axios from '../helpers/axios-intercepter';
const querystring = require('querystring');

const currentUserSubject = new BehaviorSubject(
  JSON.parse(localStorage.getItem('currentUser'))
);

export const authenticationService = {
  login,
  logout,
  currentUser: currentUserSubject.asObservable(),
  get currentUserValue() {
    return currentUserSubject.value;
  },
};

function login(username, password) {
  const requestOptions = {
    method: 'post',
    url: `user/login`,
    data: querystring.stringify({
      username: username,
      password: password,
    }),
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
  };

  return axios(requestOptions)
    .then((user) => {
      localStorage.setItem('currentUser', JSON.stringify(user));
      currentUserSubject.next(user);

      return user;
    })
    .catch((error) => console.log(error));
}

function logout() {
  // remove user from local storage to log user out
  localStorage.removeItem('currentUser');
  currentUserSubject.next(null);
}
