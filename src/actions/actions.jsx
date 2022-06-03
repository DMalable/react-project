export const LOG_IN = "LOG_IN";
export const LOG_OUT = "LOG_OUT";
export const AUTHENTICATE = "AUTHENTICATE";
export const REGISTRATE = "REGISTRATE";
export const SAVE_CARD = "SAVE_CARD";

export const logIn = () => ({ type: LOG_IN });
export const logOut = () => ({ type: LOG_OUT });
export const authenticate = (email, password) => ({
  type: AUTHENTICATE,
  payload: { email, password },
});
export const registrate = (email, password, name, surname) => ({
  type: REGISTRATE,
  payload: { email, password, name, surname },
});

export const saveCard = (cardNumber, date, cardholder, cvc) => ({
  type: SAVE_CARD,
  payload: { cardNumber, date, cardholder, cvc },
});