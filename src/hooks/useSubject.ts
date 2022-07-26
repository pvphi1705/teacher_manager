import {useDispatch, useSelector} from 'react-redux';

import {subjectActions} from '../stores/slices/subjectSlice';

const useSubject = () => {
  const dispatch = useDispatch();
  const subject = useSelector((state: any) => state.subject).data || '';
  const subjectById = useSelector((state: any) => state.subject).subject || '';

  const getSubjectList = (
    majorId: number,
    onSuccess: Function,
    onError: Function,
  ) => {
    dispatch(
      subjectActions.getSubjectRequest({
        majorId,
        onSuccess,
        onError,
      }),
    );
  };

  const getSubjectById = (
    name: string,
    onSuccess: Function,
    onError: Function,
  ) => {
    dispatch(
      subjectActions.getSubjectByIdRequest({
        name,
        onSuccess,
        onError,
      }),
    );
  };
  return {
    getSubjectList,
    subject,
    subjectById,
    getSubjectById,
  };
};

export {useSubject};
