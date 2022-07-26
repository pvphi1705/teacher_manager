import {PayloadAction} from '@reduxjs/toolkit';
import {AxiosResponse} from 'axios';
import {call, put, takeLatest} from 'redux-saga/effects';

import * as Api from 'src/services/api/user';
import {userActions} from 'src/stores/slices/userSlice';

function* handleGetTeacher({payload}: PayloadAction<any>) {
  const {userId, onSuccess, onError} = payload;

  try {
    const response: AxiosResponse<any> = yield call(Api.getTeacher, userId);
    yield put(userActions.getTeacherSuccess(response));
    onSuccess();
  } catch (error) {
    onError(error?.data ?? 'unknown error');
  }
}

function* handleGetAccount({payload}: PayloadAction<any>) {
  const {userId, onSuccess, onError} = payload;

  try {
    const response: AxiosResponse<any> = yield call(Api.getUser, userId);
    yield put(userActions.getAccountSuccess(response));
    onSuccess();
  } catch (error) {
    onError(error?.data ?? 'unknown error');
  }
}

function* handleChangePassword({payload}: PayloadAction<any>) {
  const {params, onSuccess, onError} = payload;

  try {
    const response: AxiosResponse<any> = yield call(Api.changePassword, params);
    yield put(userActions.changePasswordSuccess(response));
    onSuccess();
  } catch (error) {
    onError(error?.data ?? 'unknown error');
  }
}

function* handleGetStudent({payload}: PayloadAction<any>) {
  const {classId, teacherId, onSuccess, onError} = payload;

  try {
    const response: AxiosResponse<any> = yield call(
      Api.getStudent,
      classId,
      teacherId,
    );
    yield put(userActions.getStudentSuccess(response));
    onSuccess();
  } catch (error) {
    onError(error?.data ?? 'unknown error');
  }
}

function* handleUpdateTeacher({payload}: PayloadAction<any>) {
  const {params, onSuccess, onError} = payload;

  try {
    const response: AxiosResponse<any> = yield call(
      Api.updateTeacherInfo,
      params,
    );
    yield put(userActions.updateTeacherSuccess(response));
    if (onSuccess) {
      onSuccess(response);
    }
  } catch (error) {
    onError(error?.data ?? 'unknown error');
  }
}

function* handleForgotPassword({payload}: PayloadAction<any>) {
  const {params, onSuccess, onError} = payload;

  try {
    const response: AxiosResponse<any> = yield call(Api.forgotPassword, params);
    yield put(userActions.forgotPasswordSuccess(response));
    if (onSuccess) {
      onSuccess(response);
    }
  } catch (error) {
    onError(error?.data ?? 'unknown error');
  }
}

export default function* userSaga() {
  yield takeLatest(userActions.getTeacherRequest.type, handleGetTeacher);
  yield takeLatest(userActions.getAccountRequest.type, handleGetAccount);
  yield takeLatest(
    userActions.changePasswordRequest.type,
    handleChangePassword,
  );
  yield takeLatest(userActions.getStudentRequest.type, handleGetStudent);
  yield takeLatest(userActions.updateTeacherRequest.type, handleUpdateTeacher);
  yield takeLatest(
    userActions.forgotPasswordRequest.type,
    handleForgotPassword,
  );
}
