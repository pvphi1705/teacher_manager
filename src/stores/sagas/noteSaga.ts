import {PayloadAction} from '@reduxjs/toolkit';
import {AxiosResponse} from 'axios';
import {call, put, takeLatest} from 'redux-saga/effects';

import * as Api from 'src/services/api/notes';
import {noteActions} from '../slices/noteSlice';

function* handleGetNoteList({payload}: PayloadAction<any>) {
  const {teacherId, onSuccess, onError} = payload;

  try {
    const response: AxiosResponse<any> = yield call(Api.getAllNote, teacherId);
    yield put(noteActions.getNoteSuccess(response));
    if (onSuccess) {
      onSuccess(response);
    }
  } catch (error) {
    onError(error?.data ?? 'unknown error');
  }
}
function* handleAddNewNote({payload}: PayloadAction<any>) {
  const {params, onSuccess, onError} = payload;
  try {
    const response: AxiosResponse<any> = yield call(Api.addNewNote, params);
    yield put(noteActions.addNoteSuccess(response));
    onSuccess();
  } catch (error) {
    onError(error?.data ?? 'unknown error');
  }
}

function* handleDeleteNote({payload}: PayloadAction<any>) {
  const {id, onSuccess, onError} = payload;
  try {
    const response: AxiosResponse<any> = yield call(Api.deleteNoteApi, id);
    yield put(noteActions.deleteNoteSuccess(response));
    onSuccess();
  } catch (error) {
    onError('unknown error');
  }
}

function* handleUpdateNote({payload}: PayloadAction<any>) {
  const {params, onSuccess, onError} = payload;
  try {
    const response: AxiosResponse<any> = yield call(Api.updateNote, params);
    yield put(noteActions.updateNoteSuccess(response));
    onSuccess();
  } catch (error) {
    onError('unknown error');
  }
}

function* handleSearchNote({payload}: PayloadAction<any>) {
  const {title, onSuccess, onError} = payload;
  try {
    const response: AxiosResponse<any> = yield call(Api.searchNote, title);
    yield put(noteActions.searchNoteSuccess(response));
    if (onSuccess) {
      onSuccess(response);
    }
  } catch (error) {
    onError('unknown error');
  }
}

export default function* noteSaga() {
  yield takeLatest(noteActions.getNoteRequest.type, handleGetNoteList);
  yield takeLatest(noteActions.addNoteRequest.type, handleAddNewNote);
  yield takeLatest(noteActions.deleteNoteRequest.type, handleDeleteNote);
  yield takeLatest(noteActions.updateNoteRequest.type, handleUpdateNote);
  yield takeLatest(noteActions.searchNoteRequest.type, handleSearchNote);
}
