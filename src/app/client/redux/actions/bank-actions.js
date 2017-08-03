import fetch from 'isomorphic-fetch';

import { BANK_SELECT, RECEIVE_TRANSACTIONS, REQUEST_TRANSACTIONS } from './actionTypes';

export function selectBank(bank) {
  return {
    type : BANK_SELECT,
    bank
  };
}

function requestTransactions() {
  return {
    type : REQUEST_TRANSACTIONS
  }
}

function receiveTransactions(transactions) {
  return {
    type: RECEIVE_TRANSACTIONS,
    transactions
  }
}

export function fetchTransactions(dispatch) {
  return () => {
    const emptyResponse = {};
    return fetch(`http://localhost:3000/api/transactions`)
      .then(response => response.json())
      .then(
        (json) => {
          dispatch(receiveTransactions(json.transactions));
        }
      )
      .catch(
        (err) => {
          return emptyResponse;
        }
      );
  }
}
