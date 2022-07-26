import {sendPost} from '.';
import {sendGet} from '.';
import {sendPut} from '.';

export const login = (params: any) => sendPost('api/Users/login', params);

export const logout = (params: any) => sendPost('user/create_account', params);

export const getTeacher = (userId: any) => {
  return sendGet('getTeacherById', {
    userId,
  });
};

export const getUser = (userId: any) => {
  return sendGet(`api/Users/${userId}`);
};

export const changePassword = (params: any) => {
  return sendPut(`api/Users/${params?.id}`, params);
};

export const getStudent = (classId: number, teacherId: number) => {
  return sendGet(
    `api/Users/getStudent?classId=${classId}&teacherId=${teacherId}`,
  );
};

export const updateTeacherInfo = (params: any) => {
  return sendPut(`api/Teachers/${params?.id}`, params);
};

export const forgotPassword = (params: any) => {
  return sendPost(`api/Users/getPassword?userName=${params?.userName}`, params);
};
