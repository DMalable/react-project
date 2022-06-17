import { GET_ROUTE, saveRoute } from "../actions/actions";
import { serverRoute } from "../middleware/api";
import { takeEvery, call, put } from "redux-saga/effects";

export function* routeSaga(action) {
  try {
    const { fromAddress, toAddress } = action.payload;
    const route = yield call(serverRoute, fromAddress, toAddress);
    if (route) {
      yield put(saveRoute(route));
    }
  } catch (error) {
    console.log(error);
  }
}

export function* routeSagaWatch() {
  yield takeEvery(GET_ROUTE, routeSaga);
}