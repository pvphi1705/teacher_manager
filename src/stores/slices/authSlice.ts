import {createSlice} from '@reduxjs/toolkit';

import {CommonStatus} from './types';

interface IAuthState {
  token?: string;
  status: CommonStatus;
  userId: number;
  userCode: string;
  teacherId: number;
}

const initialState: IAuthState = {
  status: CommonStatus.IDLE,
  userId: 0,
  userCode: '',
  teacherId: 0,
};

const loginRequest = () => {};

const clearToken = (state, {payload}) => {
  state.token = '';
};

const loginSuccess = (state, {payload}) => {
  state.status = CommonStatus.SUCCESS;
  state.token = payload?.status || '';
  state.teacherId = payload?.teacherId || '';
  state.userId = payload?.Id || '';
  state.userCode = payload?.userCode || '';
  state.error = null;
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginRequest,
    loginSuccess,
    clearToken,
  },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;
