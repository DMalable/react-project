import { combineReducers } from "redux";
import { auth } from "./auth";
import { card } from "./card";
import { addresslList } from "./addresslList";
import { route } from "./route";

export default combineReducers({ auth, card, addresslList, route });