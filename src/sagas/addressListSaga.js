import { GET_ADDRESS_LIST, saveAddresses } from "../actions/actions";
import { serverAddrList } from "../middleware/api";
import { takeEvery, call, put } from "redux-saga/effects";

export function* addressListSaga() {
  const addrList = yield call(serverAddrList);
  if (addrList) {
    // console.log(addrList);
    //можно ли обойтись без создания экшена и сразу в стор отправить массив адресов???
    yield put(saveAddresses(addrList));
  }
}

export function* addressListSagaWatch() {
  yield takeEvery(GET_ADDRESS_LIST, addressListSaga);
}