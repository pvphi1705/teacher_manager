/* eslint-disable simple-import-sort/imports */
import {PayloadAction} from '@reduxjs/toolkit';
import {AxiosResponse} from 'axios';
import {call, put, takeLatest} from 'redux-saga/effects';

import * as Api from '../../services/api/calendar';
import {calendarActions} from '../slices/calendarSlice';

function* handleGetSubjectList({payload}: PayloadAction<any>) {
  const {teacherId, onSuccess, onError} = payload;
  try {
    const response: AxiosResponse<any> = yield call(
      Api.getSubjectRegister,
      teacherId,
    );
    yield put(calendarActions.getSubjectRegisterSuccess(response));
    onSuccess();
  } catch (error) {
    onError(error?.data ?? 'unknown error');
  }
}

function* handleRegisterSubject({payload}: PayloadAction<any>) {
  const {params, onSuccess, onError} = payload;
  try {
    const response: AxiosResponse<any> = yield call(
      Api.registerSubject,
      params,
    );
    yield put(calendarActions.registerSubjectSuccess(response));
    if (onSuccess) {
      onSuccess(response);
    }
  } catch (error) {
    onError(error?.data ?? 'unknown error');
  }
}

function* handleGetCalendarList({payload}: PayloadAction<any>) {
  const {params, onSuccess, onError} = payload;
  try {
    const response: AxiosResponse<any> = yield call(
      Api.getCalendarInAWeek,
      params,
    );
    yield put(calendarActions.getCalendarSuccess(response));
    if (onSuccess) {
      onSuccess(response);
    }
  } catch (error) {
    onError(error?.data ?? 'unknown error');
  }
}

function* handleGetCalendarToday({payload}: PayloadAction<any>) {
  const {onSuccess, onError} = payload;
  try {
    const response: AxiosResponse<any> = yield call(Api.getCalendarToday);
    yield put(calendarActions.getCalendarTodaySuccess(response));
    if (onSuccess) {
      onSuccess(response);
    }
  } catch (error) {
    onError(error?.data ?? 'unknown error');
  }
}

function* handleGetCalendarByDay({payload}: PayloadAction<any>) {
  const {startTime, endTime, onSuccess, onError} = payload;
  try {
    const response: AxiosResponse<any> = yield call(
      Api.getCalendarByDay,
      startTime,
      endTime,
    );
    yield put(calendarActions.getCalendarByDaySuccess(response));
    if (onSuccess) {
      onSuccess(response);
    }
  } catch (error) {
    onError(error ?? 'unknown error');
  }
}

function* handleGetCalendarInDay({payload}: PayloadAction<any>) {
  const {date, onSuccess, onError} = payload;
  try {
    const response: AxiosResponse<any> = yield call(Api.getCalendarInDay, date);
    yield put(calendarActions.getCalendarInDaySuccess(response));
    if (onSuccess) {
      onSuccess(response);
    }
  } catch (error) {
    onError(error ?? 'unknown error');
  }
}

function* handleGetSubjectRegistered({payload}: PayloadAction<any>) {
  const {teacherId, onSuccess, onError} = payload;
  try {
    const response: AxiosResponse<any> = yield call(
      Api.getSubjectRegistered,
      teacherId,
    );
    yield put(calendarActions.getSubjectRegisteredSuccess(response));
    if (onSuccess) {
      onSuccess(response);
    }
  } catch (error) {
    onError(error ?? 'unknown error');
  }
}

export default function* calendarSaga() {
  yield takeLatest(
    calendarActions.getSubjectRegisterRequest.type,
    handleGetSubjectList,
  );
  yield takeLatest(
    calendarActions.registerSubjectRequest.type,
    handleRegisterSubject,
  );
  yield takeLatest(
    calendarActions.getCalendarRequest.type,
    handleGetCalendarList,
  );
  yield takeLatest(
    calendarActions.getCalendarTodayRequest.type,
    handleGetCalendarToday,
  );
  yield takeLatest(
    calendarActions.getCalendarByDayRequest.type,
    handleGetCalendarByDay,
  );
  yield takeLatest(
    calendarActions.getCalendarInDayRequest.type,
    handleGetCalendarInDay,
  );
  yield takeLatest(
    calendarActions.getSubjectRegisteredRequest.type,
    handleGetSubjectRegistered,
  );
}
