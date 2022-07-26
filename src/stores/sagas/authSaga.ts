import {PayloadAction} from '@reduxjs/toolkit';
import {AxiosResponse} from 'axios';
import {call, put, takeLatest} from 'redux-saga/effects';

import * as Api from 'src/services/api/user';
import {authActions} from 'src/stores/slices/authSlice';
// import {userActions} from 'src/stores/slices/userSlice';

function* handleLogin({payload}: PayloadAction<string>) {
  const {param, onSuccess, onError} = payload;

  try {
    const response: AxiosResponse<any> = yield call(Api.login, param);
    yield put(authActions.loginSuccess(response));
    // yield put(userActions.storeUser(response));
    onSuccess();
  } catch (error) {
    onError(error?.data ?? 'unknown error');
  }
}

export default function* authSaga() {
  yield takeLatest(authActions.loginRequest.type, handleLogin);
}
