/* eslint-disable simple-import-sort/imports */
import {sendGet, sendPost, sendDelete} from '.';
import {sendPut} from './index';

export const getAllNote = (teacherId: any) => {
  return sendGet('api/TeachCalendars/getNote', {
    teacherId,
  });
};

export const addNewNote = (params: any) => {
  return sendPost('api/TeacherNoteCalendar', params);
};

export const deleteNoteApi = (id: number) => {
  return sendDelete(`api/TeacherNoteCalendar/deleteNote?id=${id}`, id);
};

export const updateNote = (params: any) => {
  return sendPut(`api/TeacherNoteCalendar/updateNote?id=${params?.id}`, params);
};

export const searchNote = (title: string) => {
  return sendGet(`api/TeacherNoteCalendar/searchNote?title=${title}`);
};
