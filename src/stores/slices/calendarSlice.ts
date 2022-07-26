import {createSlice} from '@reduxjs/toolkit';

interface ICalendarState {
  data: any;
  dataRegister: any;
  response?: any;
  calendarToday?: any;
  calendarInDay?: any;
  subjectRegistered?: any;
}

const initialState: ICalendarState = {
  data: {},
  dataRegister: {},
  response: {},
};

//calendar today
const getCalendarRequest = () => {};
const getCalendarSuccess = (state, {payload}) => {
  state.data = payload;
};

const getSubjectRegisterRequest = () => {};
const getSubjectRegisterSuccess = (state, {payload}) => {
  state.dataRegister = payload;
};

const registerSubjectRequest = () => {};
const registerSubjectSuccess = (state, {payload}) => {
  state.response = payload;
};

const getCalendarTodayRequest = () => {};
const getCalendarTodaySuccess = (state, {payload}) => {
  state.calendarToday = payload;
};

//get calendar by day
const getCalendarByDayRequest = () => {};
const getCalendarByDaySuccess = () => {};

const getCalendarInDayRequest = () => {};
const getCalendarInDaySuccess = (state, {payload}) => {
  state.calendarInDay = payload;
};

const getSubjectRegisteredRequest = () => {};
const getSubjectRegisteredSuccess = (state, {payload}) => {
  state.subjectRegistered = payload;
};

const getSubjectInDayRequest = () => {};
// const getSubjectInDaySuccess = (state, {payload}) => {};

const calendarSlice = createSlice({
  name: 'calendar',
  initialState,
  reducers: {
    getCalendarRequest,
    getCalendarSuccess,
    getSubjectRegisterRequest,
    getSubjectRegisterSuccess,
    registerSubjectRequest,
    registerSubjectSuccess,
    getCalendarTodayRequest,
    getCalendarTodaySuccess,
    getCalendarByDayRequest,
    getCalendarByDaySuccess,
    getCalendarInDayRequest,
    getCalendarInDaySuccess,
    getSubjectRegisteredRequest,
    getSubjectRegisteredSuccess,
    getSubjectInDayRequest,
  },
});

export const calendarActions = calendarSlice.actions;

export default calendarSlice.reducer;
