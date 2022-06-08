import { SAVE_CARD, cardUpload } from "../actions/actions";
import { serverCard } from "../middleware/api";
import { takeEvery, call, put } from "redux-saga/effects";

export function* cardSaga(action) {
  const { cardNumber, date, cardholder, cvc } = action.payload;
  const success = yield call(serverCard, cardNumber, date, cardholder, cvc);
  if (success) {
    yield put(cardUpload(cardNumber, date, cardholder, cvc));
    console.log("Карта сохранена!")
  }
}

export function* cardSagaWatch() {
  yield takeEvery(SAVE_CARD, cardSaga);
}