import { GET_ADDRESS_LIST, saveAddresses } from "../actions/actions";
import { serverAddrList } from "../middleware/api";
import { takeEvery, call, put } from "redux-saga/effects";

export function* addressListSaga() {
  const addrList = yield call(serverAddrList);
  if (addrList) {
    yield put(saveAddresses(addrList));
  }
}

export function* addressListSagaWatch() {
  yield takeEvery(GET_ADDRESS_LIST, addressListSaga);
}