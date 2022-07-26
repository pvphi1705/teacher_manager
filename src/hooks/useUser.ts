/* eslint-disable simple-import-sort/imports */
import {useSelector, useDispatch} from 'react-redux';
import {userActions} from 'src/stores/slices/userSlice';

const useUser = () => {
  const userData = useSelector((state: any) => state.user).data;
  const account = useSelector((state: any) => state.user).account;
  const student = useSelector((state: any) => state.user).student;

  const dispatch = useDispatch();
  const getListTeacher = (
    userId: number,
    onSuccess: Function,
    onError: Function,
  ) => {
    dispatch(
      userActions.getTeacherRequest({
        userId,
        onSuccess,
        onError,
      }),
    );
  };

  const getAccount = (
    userId: number,
    onSuccess: Function,
    onError: Function,
  ) => {
    dispatch(
      userActions.getAccountRequest({
        userId,
        onSuccess,
        onError,
      }),
    );
  };

  const getListStudent = (
    classId: number,
    teacherId: number,
    onSuccess: Function,
    onError: Function,
  ) => {
    dispatch(
      userActions.getStudentRequest({
        classId,
        teacherId,
        onSuccess,
        onError,
      }),
    );
  };

  const handleChangePassword = (
    id: number,
    name: string,
    userName: string,
    password: string,
    groupId: string,
    status: boolean,
    phone: string,
    email: string,
    createdDate: any,
    modifiedDate: any,
    group: any,
    events: any,
    onSuccess: Function,
    onError: Function,
  ) => {
    const params = {
      id,
      name,
      userName,
      password,
      groupId,
      status,
      phone,
      email,
      createdDate,
      modifiedDate,
      group,
      events,
    };
    dispatch(
      userActions.changePasswordRequest({
        params,
        onSuccess,
        onError,
      }),
    );
  };

  const updateTeacherInfo = (
    id: number,
    nameTeacher: string,
    phone: string,
    address: string,
    dateOfBirth: string,
    avatar: string,
    gender: string,
    isDelete: boolean,
    modifiedDate: string,
    createdDate: string,
    status: string,
    majorId: number,
    userId: number,
    bankName: string,
    numberBank: string,
    branchName: string,
    numberBhxh: string,
    numberBhyt: string,
    hieuLucBh: string,
    major: any,
    classes: any,
    teachCalendars: any,
    onSuccess: Function,
    onError: Function,
  ) => {
    const params = {
      id,
      nameTeacher,
      phone,
      address,
      dateOfBirth,
      avatar,
      gender,
      isDelete,
      modifiedDate,
      createdDate,
      status,
      majorId,
      userId,
      bankName,
      numberBank,
      branchName,
      numberBhxh,
      numberBhyt,
      hieuLucBh,
      major,
      classes,
      teachCalendars,
    };
    dispatch(userActions.updateTeacherRequest({params, onSuccess, onError}));
  };

  const forgotPassword = (
    userName: string,
    onSuccess: Function,
    onError: Function,
  ) => {
    const params = {
      userName,
    };
    dispatch(
      userActions.forgotPasswordRequest({
        params,
        onSuccess,
        onError,
      }),
    );
  };

  return {
    getListTeacher,
    userData,
    account,
    getAccount,
    handleChangePassword,
    student,
    getListStudent,
    updateTeacherInfo,
    forgotPassword,
  };
};

export {useUser};
