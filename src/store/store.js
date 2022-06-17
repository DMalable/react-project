import { legacy_createStore as createStore, applyMiddleware, compose } from "redux";
import rootReducer from "../reducers";

import createSagaMiddleware from 'redux-saga';
import allSagas from '../sagas/allSagas';

const sagaMiddleware = createSagaMiddleware();
const initialLocalStorage = '{ "auth": { "isLoggedIn": false } }'

localStorage.store ||= initialLocalStorage;
const initialStore = JSON.parse(localStorage.store);
// const store = createStore(rootReducer, initialStore, compose(applyMiddleware(authMiddleware), applyMiddleware(regMiddleware), applyMiddleware(cardMiddleware)));
const store = createStore(rootReducer, initialStore, compose(applyMiddleware(sagaMiddleware)));
store.subscribe(() => {
  const { auth } = store.getState();
  localStorage.store = JSON.stringify({ auth });
});

sagaMiddleware.run(allSagas);

export { store }