import {store} from 'src/stores';
import {authActions} from 'src/stores/slices/authSlice';

export const getToken = () => {
  const {auth} = store.getState();
  return auth.token || '';
};

export const clearToken = () => {
  store.dispatch(authActions.clearToken());
};
