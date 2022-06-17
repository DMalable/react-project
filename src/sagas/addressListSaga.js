import { GET_ADDRESS_LIST, saveAddresses } from "../actions/actions";
import { serverAddrList } from "../middleware/api";
import { takeEvery, call, put } from "redux-saga/effects";

export function* addressListSaga() {
  try {
    const addrList = yield call(serverAddrList);
    if (addrList) {
      yield put(saveAddresses(addrList));
    }
  } catch (error) {
    console.log(error);
  }
}

export function* addressListSagaWatch() {
  yield takeEvery(GET_ADDRESS_LIST, addressListSaga);
}