import { GET_ROUTE, saveRoute } from "../actions/actions";
import { serverRoute } from "../middleware/api";
import { takeEvery, call, put } from "redux-saga/effects";

export function* routeSaga(action) {
  const { fromAddress, toAddress } = action.payload;
  const route = yield call(serverRoute, fromAddress, toAddress);
  if (route) {
    yield put(saveRoute(route));
  }
}

export function* routeSagaWatch() {
  yield takeEvery(GET_ROUTE, routeSaga);
}