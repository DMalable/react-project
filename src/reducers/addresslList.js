import { SAVE_ADDRESSES } from "../actions/actions";

const initialState = {
  test: "",
};

export function addresslList(state = initialState, action) {
  switch (action.type) {
    case SAVE_ADDRESSES: {
      return action.payload;
    }
    // case CARD_RESET: {
    //   return initialState
    // }
    default:
      return state;
  }
}
