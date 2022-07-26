import {sendGet} from '.';

export const getAllFaculty = () => {
  return sendGet('api/Majors');
};

export const getFacultyById = (id: number) => {
  return sendGet(`api/Majors/${id}`);
};
