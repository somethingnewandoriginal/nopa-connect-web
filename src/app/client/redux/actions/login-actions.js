import { LOGIN_FORM_UPDATE, LOGIN_FORM_VALIDATE, LOGIN, LOGOUT } from './actionTypes';

export function updateLoginForm(field, value) {
  return {
    type : LOGIN_FORM_UPDATE,
    field,
    value
  };
}

export function validateLoginForm() {
  return {
    type : LOGIN_FORM_VALIDATE
  }
}

export function logIn() {
  return {
    type : LOGIN
  }
}

export function logOut() {
  return {
    type : LOGOUT
  }
}
