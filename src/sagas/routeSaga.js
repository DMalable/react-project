import { GET_ROUTE, saveRoute } from "../actions/actions";
import { serverRoute } from "../middleware/api";
import { takeEvery, call, put } from "redux-saga/effects";

export function* routeSaga(action) {
  const { fromAddress, toAddress } = action.payload;
  const route = yield call(serverRoute, fromAddress, toAddress);
  console.log("результат", route);
  if (route) {
    //можно ли обойтись без создания экшена и сразу в стор отправить массив адресов???
    yield put(saveRoute(route));
  }
}

export function* routeSagaWatch() {
  yield takeEvery(GET_ROUTE, routeSaga);
}