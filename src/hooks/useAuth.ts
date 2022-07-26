import {useDispatch, useSelector} from 'react-redux';

import {authActions} from 'src/stores/slices/authSlice';

const useAuth = () => {
  const dispatch = useDispatch();
  const accessToken = useSelector((state: any) => state.auth).token || '';
  const teacherId = useSelector((state: any) => state.auth).teacherId;
  const userId = useSelector((state: any) => state.auth).userId;
  const userCode = useSelector((state: any) => state.auth).userCode;

  const login = (
    userName: string,
    password: string,
    onSuccess: Function,
    onError: Function,
  ) => {
    const param = {
      userName,
      password,
    };
    dispatch(
      authActions.loginRequest({
        param,
        onSuccess,
        onError,
      }),
    );
  };

  return {
    login,
    accessToken,
    teacherId,
    userCode,
    userId,
  };
};

export {useAuth};
