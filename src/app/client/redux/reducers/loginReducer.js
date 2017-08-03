import * as types from '../actions/actionTypes';

let initialState = {
  loginForm : {
    surname       : '',
    sortCode      : '',
    accountNumber : '',
    passCode      : '',
    memorableWord : '',
    errors        : {}
  },
  loggedIn : false
}

export default function loginReducer(state = initialState, action) {
  let newState = Object.assign({}, state);
  switch(action.type) {
    case types.LOGIN_FORM_UPDATE:
      newState.loginForm = Object.assign({}, state.loginForm);
      newState.loginForm[action.field] = action.value;
      return newState;
    case types.LOGIN_FORM_VALIDATE:
      let errors = {};
      let form = state.loginForm;
      if(form.surname === ''){
        errors.surname = 'Please enter a surname'
      }
      if(form.sortCode === ''){
        errors.sortCode = 'Please enter a sort code'
      }
      if(form.accountNumber === ''){
        errors.accountNumber = 'Please enter an account number'
      }
      if(form.passCode === ''){
        errors.passCode = 'Please enter a passcode'
      }
      if(form.memorableWord === ''){
        errors.memorableWord = 'Please enter a memorable word'
      }
      newState.loginForm.errors = errors;
      return newState;
    case types.LOGIN:
      newState.loggedIn = true
      return newState;
    default:
      return state;
  }
}
