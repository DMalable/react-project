import { SAVE_CARD, GET_CARD, cardUpload } from "../actions/actions";
import { serverCard, getServerCard } from "../middleware/api";
import { takeEvery, call, put } from "redux-saga/effects";

export function* cardSaga(action) {
  const { cardNumber, date, cardholder, cvc, token } = action.payload;
  const success = yield call(serverCard, cardNumber, date, cardholder, cvc, token);
  if (success) {
    yield put(cardUpload(cardNumber, date, cardholder, cvc, token));
    console.log("Карта загружена!")
  }
}

export function* logInCardSaga(action) {
  const { token } = action.payload;
  const { cardName, expiryDate, cardNumber, cvc } = yield call(getServerCard, token);
  yield put(cardUpload(cardNumber, expiryDate, cardName, cvc));
}

export function* cardSagaWatch() {
  yield takeEvery(GET_CARD, logInCardSaga);
  yield takeEvery(SAVE_CARD, cardSaga);
}