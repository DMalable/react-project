import { SAVE_CARD, cardLoad, cardReset, LOG_OUT } from "../actions/actions";
import { serverCard } from './api'

export const cardMiddleware = (store) => (next) => async (action) => {
  if (action.type === SAVE_CARD) {
    const { cardNumber, date, cardholder, cvc } = action.payload;
    const success = await serverCard(cardNumber, date, cardholder, cvc)
    if (success) {
      console.log("Карта сохранена!")
      store.dispatch(cardLoad(cardNumber, date, cardholder, cvc))
    }
    // Правильно ли так делать?????
  } else if (action.type === LOG_OUT) {
    store.dispatch(cardReset());
    next(action);
  } else {
    next(action);
  }
};
