import { createStore, applyMiddleware } from "redux";
//почему так можно импортить??
import rootReducer from "../reducers";
import { authMiddleware } from "../Middleware/authMiddleware";

export const store = createStore(rootReducer, applyMiddleware(authMiddleware));