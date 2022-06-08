export const LOG_IN = "LOG_IN";
export const LOG_OUT = "LOG_OUT";
export const CARD_LOAD = "CARD_LOAD";
export const CARD_RESET = "CARD_RESET";
export const AUTHENTICATE = "AUTHENTICATE";
export const REGISTRATE = "REGISTRATE";
export const SAVE_CARD = "SAVE_CARD";
export const GET_ADDRESS_LIST = "GET_ADDRESS_LIST";
export const SAVE_ADDRESSES = "SAVE_ADDRESSES";
export const GET_ROUTE = "GET_ROUTE";
export const SAVE_ROUTE = "SAVE_ROUTE";

export const logIn = () => ({ type: LOG_IN });
export const logOut = () => ({ type: LOG_OUT });
export const cardUpload = (cardNumber, date, cardholder, cvc) => ({
  type: CARD_LOAD,
  payload: { cardNumber, date, cardholder, cvc }
});
export const cardReset = () => ({
  type: CARD_RESET
});
export const saveAddresses = (addresses) => ({
  type: SAVE_ADDRESSES,
  payload: addresses
});
export const saveRoute = (route) => ({
  type: SAVE_ROUTE,
  payload: route
});

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

export const getAddressList = () => ({ type: GET_ADDRESS_LIST });

export const getRoute = (fromAddress, toAddress) => ({
  type: GET_ROUTE,
  payload: { fromAddress, toAddress },
});
