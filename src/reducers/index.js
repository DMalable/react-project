import { combineReducers } from "redux";
import auth from "../reducers/auth";
import card from "../reducers/card";

export default combineReducers({ auth, card });