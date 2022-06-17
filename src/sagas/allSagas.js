import { fork, all } from 'redux-saga/effects';
import { authSagaWatch } from './authSaga';
import { regSagaWatch } from './regSaga';
import { cardSagaWatch } from './cardSaga';
import { addressListSagaWatch } from './addressListSaga';
import { routeSagaWatch } from './routeSaga';

export default function* allSagas() {
  yield all([
    fork(authSagaWatch),
    fork(regSagaWatch),
    fork(cardSagaWatch),
    fork(addressListSagaWatch),
    fork(routeSagaWatch)
  ])
}