// import { createStore, applyMiddleware } from "redux";
import { legacy_createStore as createStore, applyMiddleware, compose } from "redux";
//почему так можно импортить??
import rootReducer from "../reducers";
// import { authMiddleware } from "../middleware/authMiddleware";
// import { regMiddleware } from "../middleware/regMiddleware";
// import { cardMiddleware } from "../middleware/cardMiddleware";

import createSagaMiddleware from 'redux-saga';
import allSagas from '../sagas/allSagas';

const sagaMiddleware = createSagaMiddleware();
const initLocalStorage = '{ "auth": { "isLoggedIn": false }, "card": {"cardNumber": "", "date": "", "cardholder": "", "cvc": ""} }'

localStorage.store ||= initLocalStorage;
const initStore = JSON.parse(localStorage.store);
// const store = createStore(rootReducer, initStore, compose(applyMiddleware(authMiddleware), applyMiddleware(regMiddleware), applyMiddleware(cardMiddleware)));
const store = createStore(rootReducer, initStore, compose(applyMiddleware(sagaMiddleware)));
store.subscribe(() => {
  localStorage.store = JSON.stringify(store.getState())
});

sagaMiddleware.run(allSagas);

export { store }