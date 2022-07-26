import {useDispatch, useSelector} from 'react-redux';

import {themeActions} from '../stores/slices/themeSlice';

const useAppTheme = () => {
  const dispatch = useDispatch();
  const appTheme = useSelector((state: any) => state.appTheme).theme;

  const changeTheme = (appTheme: any) => {
    dispatch(
      themeActions.toggleTheme({
        appTheme,
      }),
    );
  };

  return {
    appTheme,
    changeTheme,
  };
};

export {useAppTheme};
