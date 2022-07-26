import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  data: {},
  allFaculty: {},
};

const getMajorRequest = () => {};
const getMajorSuccess = (state, {payload}) => {
  state.allFaculty = payload;
};

const getMajorByIdRequest = () => {};
const getMajorByIdSuccess = (state, {payload}) => {
  state.data = payload;
};

const facultySlice = createSlice({
  name: 'faculty',
  initialState,
  reducers: {
    getMajorRequest,
    getMajorSuccess,
    getMajorByIdRequest,
    getMajorByIdSuccess,
  },
});

export const facultyActions = facultySlice.actions;

export default facultySlice.reducer;
