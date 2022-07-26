import {useDispatch, useSelector} from 'react-redux';

import {calendarActions} from '../stores/slices/calendarSlice';

const useCalendar = () => {
  const dispatch = useDispatch();
  const subjectList =
    useSelector((state: any) => state.calendar).dataRegister || {};
  const response = useSelector((state: any) => state.calendar).response || {};
  const calendar = useSelector((state: any) => state.calendar).data || {};
  const subjectRegistered =
    useSelector((state: any) => state.calendar).subjectRegistered || {};
  const calendarInDay =
    useSelector((state: any) => state.calendar).calendarInDay || {};

  const getListSubjectRegister = (
    teacherId: number,
    onSuccess: Function,
    onError: Function,
  ) => {
    dispatch(
      calendarActions.getSubjectRegisterRequest({
        teacherId,
        onSuccess,
        onError,
      }),
    );
  };
  const registerSubject = (
    params: RegisterSubjectRequest,
    onSuccess: Function,
    onError: Function,
  ) => {
    dispatch(
      calendarActions.registerSubjectRequest({
        params,
        onSuccess,
        onError,
      }),
    );
  };

  const getCalendarList = (
    teacherId: number,
    onSuccess: Function,
    onError: Function,
  ) => {
    const params = {
      teacherId,
    };
    dispatch(
      calendarActions.getCalendarRequest({
        params,
        onSuccess,
        onError,
      }),
    );
  };

  const getCalendarByDay = (
    startTime: string,
    endTime: string,
    onSuccess: Function,
    onError: Function,
  ) => {
    dispatch(
      calendarActions.getCalendarByDayRequest({
        startTime,
        endTime,
        onSuccess,
        onError,
      }),
    );
  };

  const getCalendarInDay = (
    date: any,
    onSuccess: Function,
    onError: Function,
  ) => {
    dispatch(
      calendarActions.getCalendarInDayRequest({
        date,
        onSuccess,
        onError,
      }),
    );
  };

  const getRegisteredSubject = (
    teacherId: number,
    onSuccess: Function,
    onError: Function,
  ) => {
    dispatch(
      calendarActions.getSubjectRegisteredRequest({
        teacherId,
        onSuccess,
        onError,
      }),
    );
  };

  return {
    getListSubjectRegister,
    subjectList,
    response,
    registerSubject,
    getCalendarList,
    calendar,
    getCalendarByDay,
    getCalendarInDay,
    calendarInDay,
    subjectRegistered,
    getRegisteredSubject,
  };
};

export {useCalendar};
