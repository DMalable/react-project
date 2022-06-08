import { GET_ADDRESS_LIST } from "../actions/actions";

const initialState = {
  test: "",
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_ADDRESS_LIST: {
      return {
        test: action.payload,
      }
    }
    // case CARD_RESET: {
    //   return initialState
    // }
    default:
      return state;
  }
}
