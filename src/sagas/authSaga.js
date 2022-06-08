import { AUTHENTICATE, logIn } from "../actions/actions";
import { serverLogIn } from "../middleware/api";
import { takeEvery, call, put } from "redux-saga/effects";

export function* authenticateSaga(action) {
  const { email, password } = action.payload;
  const success = yield call(serverLogIn, email, password);
  if (success) {
    yield put(logIn());
  }
}

export function* authSagaWatch() {
  yield takeEvery(AUTHENTICATE, authenticateSaga);
}