import {sendGet, sendPost} from '.';

export const getCalendar = (teacherId: any) => {
  return sendGet('api/TeachCalendars/getListCalendar', {
    teacherId,
  });
};

export const getSubjectRegister = (teacherId: any) => {
  return sendGet('api/SubjectRegister/getSubjectRegister', {
    teacherId,
  });
};

export const registerSubject = (params: RegisterSubjectRequest) => {
  return sendPost('api/TeachCalendars/RegisterSubject', params);
};

export const getCalendarInAWeek = (params: any) => {
  return sendGet(
    `api/TeachCalendars/getCalendarAWeek?teacherId=${params?.teacherId}`,
    params,
  );
};

export const getCalendarToday = () => {
  return sendGet('api/TeachCalendars/getCalendarToday');
};

export const getCalendarByDay = (startTime: string, endTime: string) => {
  return sendGet(
    `api/TeachCalendars/getCalendarByDay?startTime=${startTime}&endTime=${endTime}`,
  );
};

export const getCalendarInDay = (date: any) => {
  return sendGet(`api/TeachCalendars/getCalendarInDay?date=${date}`, {
    date,
  });
};

export const getSubjectRegistered = (teacherId: any) => {
  return sendGet('api/TeachCalendars/getListRegiter', {
    teacherId,
  });
};
