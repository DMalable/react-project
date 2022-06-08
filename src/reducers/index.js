import { combineReducers } from "redux";
import auth from "./auth";
import card from "./card";
import addresslList from "./addresslList";

export default combineReducers({ auth, card, addresslList });