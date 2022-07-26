import {PayloadAction} from '@reduxjs/toolkit';
import {AxiosResponse} from 'axios';
import {call, put, takeLatest} from 'redux-saga/effects';

import * as Api from 'src/services/api/faculty';
import {facultyActions} from '../slices/facultySlice';

function* handleGetAllFaculty({payload}: PayloadAction<any>) {
  const {onSuccess, onError} = payload;

  try {
    const response: AxiosResponse<any> = yield call(Api.getAllFaculty);
    yield put(facultyActions.getMajorSuccess(response));
    if (onSuccess) {
      onSuccess(response);
    }
  } catch (error) {
    onError(error?.data ?? 'unknown error');
  }
}

function* handleGetFacultyById({payload}: PayloadAction<any>) {
  const {id, onSuccess, onError} = payload;
  try {
    const response: AxiosResponse<any> = yield call(Api.getFacultyById, id);
    yield put(facultyActions.getMajorByIdSuccess(response));
    onSuccess();
  } catch (error) {
    onError(error?.data ?? 'unknown error');
  }
}

export default function* facultySaga() {
  yield takeLatest(facultyActions.getMajorRequest.type, handleGetAllFaculty);
  yield takeLatest(
    facultyActions.getMajorByIdRequest.type,
    handleGetFacultyById,
  );
}
