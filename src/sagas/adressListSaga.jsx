import { GET_ADDRESS_LIST } from "../actions/actions";
import { serverAddrList } from "../middleware/api";
import { takeEvery, call, put } from "redux-saga/effects";

export function* addressListSaga(action) {
  console.log("address list Saga:", action.payload);
  const result = yield call(serverAddrList());
  console.log(result);
  // const { cardNumber, date, cardholder, cvc } = action.payload;
  // const success = yield call(serverAddrList, cardNumber, date, cardholder, cvc);
  // if (success) {
  //   yield put(getAddressList(cardNumber, date, cardholder, cvc));
  //   console.log("Карта сохранена!",);
  // }
}

export function* addressListSagaWatch() {
  yield takeEvery(GET_ADDRESS_LIST, addressListSaga);
}