import { combineReducers } from "redux";
import { auth } from "./auth";
import { card } from "./card";
import { addressList } from "./addressList";
import { route } from "./route";

export default combineReducers({ auth, card, addressList, route });