// import { createStore, applyMiddleware } from "redux";
import { legacy_createStore as createStore, applyMiddleware } from "redux";
//почему так можно импортить??
import rootReducer from "../reducers";
import { authMiddleware } from "../Middleware/authMiddleware";

const store = createStore(rootReducer, applyMiddleware(authMiddleware));

localStorage.store = localStorage.store || JSON.stringify(store.getState());

store.subscribe(() => {
  localStorage.store = JSON.stringify(store.getState())
});

export { store }