// import { createStore, applyMiddleware } from "redux";
import { legacy_createStore as createStore, applyMiddleware } from "redux";
//почему так можно импортить??
import rootReducer from "../reducers";
import { authMiddleware } from "../Middleware/authMiddleware";


const initLocalStorage = '{ "auth": { "isLoggedIn": false } }'
localStorage.store = localStorage.store || initLocalStorage;
// const store = createStore(rootReducer, applyMiddleware(authMiddleware));
const initStore = JSON.parse(localStorage.store);
const store = createStore(rootReducer, initStore, applyMiddleware(authMiddleware));
console.log(store.getState());

console.log(store.getState());
store.subscribe(() => {
  localStorage.store = JSON.stringify(store.getState())
  console.log(store.getState());
});

export { store }