/* eslint-disable simple-import-sort/imports */
import {PayloadAction} from '@reduxjs/toolkit';
import {AxiosResponse} from 'axios';
import {call, put, takeLatest} from 'redux-saga/effects';

import * as Api from '../../services/api/Subject';
import {subjectActions} from '../slices/subjectSlice';

function* handleGetSubjectList({payload}: PayloadAction<any>) {
  const {majorId, onSuccess, onError} = payload;
  try {
    const response: AxiosResponse<any> = yield call(Api.getSubject, majorId);
    yield put(subjectActions.getSubjectSuccess(response));
    onSuccess();
  } catch (error) {
    onError(error?.data ?? 'unknown error');
  }
}

function* handleGetSubjectById({payload}: PayloadAction<any>) {
  const {name, onSuccess, onError} = payload;
  try {
    const response: AxiosResponse<any> = yield call(Api.getSubjectById, name);
    yield put(subjectActions.getSubjectByIdSuccess(response));
    onSuccess();
  } catch (error) {
    onError(error?.data ?? 'unknown error');
  }
}

export default function* subjectSaga() {
  yield takeLatest(subjectActions.getSubjectRequest.type, handleGetSubjectList);
  yield takeLatest(
    subjectActions.getSubjectByIdRequest.type,
    handleGetSubjectById,
  );
}
