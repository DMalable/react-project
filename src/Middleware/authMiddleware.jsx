import { AUTHENTICATE, REGISTRATE, SAVE_CARD, logIn } from "../actions/actions";
import { serverLogIn, serverReg, serverCard } from './api'

export const authMiddleware = (store) => (next) => async (action) => {
  if (action.type === AUTHENTICATE) {
    const { email, password } = action.payload;
    const success = await serverLogIn(email, password)
    if (success) {
      store.dispatch(logIn())
    }
  } else if (action.type === REGISTRATE) {
    const { email, password, name, surname } = action.payload;
    const success = await serverReg(email, password, name, surname)
    if (success) {
      console.log("Регистрация выполнена!")
    }
  } else if (action.type === SAVE_CARD) {
    const { cardNumber, date, cardholder, cvc } = action.payload;
    const success = await serverCard(cardNumber, date, cardholder, cvc)
    if (success) {
      console.log("Карта сохранена!")
    }
  } else {
    next(action);
  }
};
