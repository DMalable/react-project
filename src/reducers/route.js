import { SAVE_ROUTE } from "../actions/actions";

const initialState = {
  test: "",
};

export function route(state = initialState, action) {
  switch (action.type) {
    case SAVE_ROUTE: {
      return action.payload;
    }
    // case CARD_RESET: {
    //   return initialState
    // }
    default:
      return state;
  }
}
