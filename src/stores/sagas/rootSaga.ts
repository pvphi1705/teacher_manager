/* eslint-disable simple-import-sort/imports */
import {fork} from 'redux-saga/effects';

import authSaga from './authSaga';
import userSaga from './userSaga';
import subjectSaga from './subjectSaga';
import noteSaga from './noteSaga';
import calendarSaga from './calendarSaga';
import facultySaga from './facultySaga';

export default function* rootSaga() {
  yield fork(authSaga);
  yield fork(userSaga);
  yield fork(subjectSaga);
  yield fork(noteSaga);
  yield fork(calendarSaga);
  yield fork(facultySaga);
}
