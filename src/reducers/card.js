import { CARD_LOAD, LOG_OUT } from "../actions/actions";

const initialState = {
  cardNumber: "",
  date: "",
  cardholder: "",
  cvc: "",
  token: ""
};

export function card(state = initialState, action) {
  switch (action.type) {
    case CARD_LOAD: {
      return {
        cardNumber: action.payload.cardNumber,
        date: action.payload.date,
        cardholder: action.payload.cardholder,
        cvc: action.payload.cvc,
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