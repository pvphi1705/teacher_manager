import {sendGet} from '.';

export const getSubject = (majorId: any) => {
  return sendGet('api/Subjects/getSubject', {
    majorId,
  });
};

export const getSubjectById = (name: string) => {
  return sendGet(`api/Subjects/getSubjectByName/${name}`);
};
