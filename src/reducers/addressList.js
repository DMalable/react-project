import { SAVE_ADDRESSES, LOG_OUT } from "../actions/actions";

const initialState = [];

export function addressList(state = initialState, action) {
  switch (action.type) {
    case SAVE_ADDRESSES: {
      return action.payload;
    }
    case LOG_OUT: {
      return initialState
    }
    default:
      return state;
  }
}