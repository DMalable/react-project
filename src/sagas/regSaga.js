import { REGISTRATE } from "../actions/actions";
import { serverReg } from "../middleware/api";
import { takeEvery, call } from "redux-saga/effects";

export function* registrateSaga(action) {
  const { email, password, name, surname } = action.payload;
  const success = yield call(serverReg, email, password, name, surname);
  if (success) {
    console.log("Регистрация выполнена!");
  }
}

export function* regSagaWatch() {
  yield takeEvery(REGISTRATE, registrateSaga);
}