import {createSlice} from '@reduxjs/toolkit';

interface IUserState {
  data?: User;
  account?: any;
  response?: any;
  student?: any;
}

const initialState: IUserState = {
  data: {} as User,
};

const storeUser = (state, {payload}) => {
  return payload;
};

const getTeacherRequest = () => {};

const getTeacherSuccess = (state, {payload}) => {
  state.data = payload || {};
  state.error = null;
};

const getAccountRequest = () => {};
const getAccountSuccess = (state, {payload}) => {
  state.account = payload;
};

const changePasswordRequest = () => {};
const changePasswordSuccess = (state, {payload}) => {
  state.response = payload;
};

const getStudentRequest = () => {};
const getStudentSuccess = (state, {payload}) => {
  state.student = payload;
};

const updateTeacherRequest = () => {};
const updateTeacherSuccess = () => {};

const forgotPasswordRequest = () => {};
const forgotPasswordSuccess = () => {};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    getTeacherRequest,
    getTeacherSuccess,
    getAccountRequest,
    getAccountSuccess,
    changePasswordRequest,
    changePasswordSuccess,
    getStudentRequest,
    getStudentSuccess,
    updateTeacherRequest,
    updateTeacherSuccess,
    forgotPasswordRequest,
    forgotPasswordSuccess,
  },
});

export const userActions = userSlice.actions;

export default userSlice.reducer;
