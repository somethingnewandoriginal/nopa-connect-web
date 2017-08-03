import * as types from '../actions/actionTypes';
import initialState from './initialState.js';

export default function bankReducer(state = initialState, action) {
  switch(action.type) {
    case types.BANK_SELECT:
      return Object.assign({}, state, {
        bank: action.bank
      });
    case types.RECEIVE_TRANSACTIONS:
      let dates = [];
      action.transactions.map((transaction) => {
        if(dates.indexOf(transaction.dateStr) === -1){
          dates.push(transaction.dateStr);
        }
      });
      return Object.assign({}, state, {
        transactions: action.transactions,
        dates
      });
    default:
      return state;
  }
}
