/* eslint-disable simple-import-sort/imports */
import AsyncStorage from '@react-native-community/async-storage';
import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';
import createSagaMiddleware from 'redux-saga';

import rootSaga from './sagas/rootSaga';
import authReducer from './slices/authSlice';
import userReducer from './slices/userSlice';
import subjectReducer from './slices/subjectSlice';
import noteReducer from './slices/noteSlice';
import calendarReducer from './slices/calendarSlice';
import themeReducer from './slices/themeSlice';
import facultyReducer from './slices/facultySlice';

const ACTION_PATH_SUCCESS = 'payload.onSuccess';
const ACTION_PATH_ERROR = 'payload.onError';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['auth'],
};

const reducers = combineReducers({
  auth: authReducer,
  user: userReducer,
  subject: subjectReducer,
  note: noteReducer,
  calendar: calendarReducer,
  appTheme: themeReducer,
  faculty: facultyReducer,
});

const persistedReducer = persistReducer(persistConfig, reducers);

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        ignoredActionPaths: [ACTION_PATH_SUCCESS, ACTION_PATH_ERROR],
      },
    }).prepend(sagaMiddleware),
  devTools: __DEV__,
});

sagaMiddleware.run(rootSaga);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

const persistor = persistStore(store);

export {persistor, store};
