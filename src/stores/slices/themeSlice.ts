/* eslint-disable simple-import-sort/imports */
import {createSlice} from '@reduxjs/toolkit';

import {lightTheme} from '../../themes/theme';

interface IThemeState {
  theme: any;
}

const initialState: IThemeState = {
  theme: lightTheme,
};

const toggleTheme = (state, {payload}) => {
  state.theme = payload;
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme,
  },
});

export const themeActions = themeSlice.actions;

export default themeSlice.reducer;
