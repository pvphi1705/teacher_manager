/* eslint-disable simple-import-sort/imports */
import {createSlice} from '@reduxjs/toolkit';
import {CommonStatus} from './types';

interface INote {
  data: any;
  status?: CommonStatus;
  addResponse?: string;
  searchData?: any;
}

const initialState: INote = {
  data: {},
  status: CommonStatus.IDLE,
  addResponse: '',
};

const getNoteRequest = () => {};
const getNoteSuccess = (state, {payload}) => {
  state.data = payload;
};

const addNoteRequest = () => {};
const addNoteSuccess = (state, {payload}) => {
  state.status = CommonStatus.SUCCESS;
  state.addResponse = payload;
};

const deleteNoteRequest = () => {};

const deleteNoteSuccess = (state, {payload}) => {
  state.status = CommonStatus.SUCCESS;
};

const updateNoteRequest = () => {};
const updateNoteSuccess = (state, {payload}) => {
  state.status = CommonStatus.SUCCESS;
};

const searchNoteRequest = () => {};
const searchNoteSuccess = (state, {payload}) => {
  state.data = payload;
};

const noteSlice = createSlice({
  name: 'note',
  initialState,
  reducers: {
    getNoteRequest,
    getNoteSuccess,
    addNoteRequest,
    addNoteSuccess,
    deleteNoteRequest,
    deleteNoteSuccess,
    updateNoteRequest,
    updateNoteSuccess,
    searchNoteRequest,
    searchNoteSuccess,
  },
});

export const noteActions = noteSlice.actions;

export default noteSlice.reducer;
