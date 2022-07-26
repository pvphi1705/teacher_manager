import {createSlice} from '@reduxjs/toolkit';

interface ISubjectState {
  data: any;
  subject?: any;
}

const initialState: ISubjectState = {
  data: {},
};

const getSubjectRequest = () => {};

const getSubjectSuccess = (state, {payload}) => {
  state.data = payload || {};
  state.error = null;
};

const getSubjectByIdRequest = () => {};
const getSubjectByIdSuccess = (state, {payload}) => {
  state.subject = payload;
};

const subjectSlice = createSlice({
  name: 'subject',
  initialState,
  reducers: {
    getSubjectRequest,
    getSubjectSuccess,
    getSubjectByIdRequest,
    getSubjectByIdSuccess,
  },
});

export const subjectActions = subjectSlice.actions;

export default subjectSlice.reducer;
