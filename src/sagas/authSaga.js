import { AUTHENTICATE, logIn } from "../actions/actions";
import { serverLogIn } from "../middleware/api";
import { takeEvery, call, put } from "redux-saga/effects";

export function* authenticateSaga(action) {
  try {
    const { email, password } = action.payload;
    const { success, token } = yield call(serverLogIn, email, password);
    if (success) {
      yield put(logIn(token));
    }
  } catch (error) {
    console.log(error);
  }
}

export function* authSagaWatch() {
  yield takeEvery(AUTHENTICATE, authenticateSaga);
}