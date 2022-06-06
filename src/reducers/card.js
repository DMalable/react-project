import { CARD_LOAD } from "../actions/actions";
import { CARD_RESET } from "../actions/actions";

const initialState = {
  cardNumber: "",
  date: "",
  cardholder: "",
  cvc: ""
};

export default function (state = initialState, action) {
  switch (action.type) {
    case CARD_LOAD: {
      return {
        cardNumber: action.payload.cardNumber,
        date: action.payload.date,
        cardholder: action.payload.cardholder,
        cvc: action.payload.cvc
      }
    }
    case CARD_RESET: {
      return initialState
    }
    default:
      return state;
  }
}
