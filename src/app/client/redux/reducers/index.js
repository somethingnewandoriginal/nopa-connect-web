import {combineReducers} from 'redux';
import bankReducer from './bankReducer';
import loginReducer from './loginReducer';

const appReducer = combineReducers({
  bankReducer,
  loginReducer
})

const rootReducer = (state, action) => {
  if(action.type === 'LOGOUT') {
    state = undefined
  }
  return appReducer(state, action);
};

export default rootReducer;
