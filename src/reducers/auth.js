import { LOG_IN, LOG_OUT } from "../actions/actions";

const initialState = {
  isLoggedIn: false
};

export function auth(state = initialState, action) {
  switch (action.type) {
    case LOG_IN: {
      return {
        isLoggedIn: true,
        token: action.payload.token
      }
    }
    case LOG_OUT: {
      return initialState;
    }
    default:
      return state;
  }
}