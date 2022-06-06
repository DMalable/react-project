// import { createStore, applyMiddleware } from "redux";
import { legacy_createStore as createStore, applyMiddleware, compose } from "redux";
//почему так можно импортить??
import rootReducer from "../reducers";
import { authMiddleware } from "../Middleware/authMiddleware";
import { regMiddleware } from "../Middleware/regMiddleware";
import { cardMiddleware } from "../Middleware/cardMiddleware";


const initLocalStorage = '{ "auth": { "isLoggedIn": false }, "card": {"cardNumber": "", "date": "", "cardholder": "", "cvc": ""} }'
localStorage.store ||= initLocalStorage;
const initStore = JSON.parse(localStorage.store);
const store = createStore(rootReducer, initStore, compose(applyMiddleware(authMiddleware), applyMiddleware(regMiddleware), applyMiddleware(cardMiddleware)));
store.subscribe(() => {
  localStorage.store = JSON.stringify(store.getState())
});

export { store }