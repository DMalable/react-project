import { SAVE_ROUTE, LOG_OUT } from "../actions/actions";

const initialState = {
  test: "",
};

export function route(state = initialState, action) {
  switch (action.type) {
    case SAVE_ROUTE: {
      return action.payload;
    }
    case LOG_OUT: {
      return initialState;
    }
    default:
      return state;
  }
}