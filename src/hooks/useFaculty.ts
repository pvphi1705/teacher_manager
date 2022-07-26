import {useDispatch, useSelector} from 'react-redux';

import {facultyActions} from '../stores/slices/facultySlice';

const useFaculty = () => {
  const dispatch = useDispatch();
  const faculty = useSelector((state: any) => state.faculty).data;
  const allFaculty = useSelector((state: any) => state.faculty).allFaculty;

  const getAllFaculty = (onSuccess: Function, onError: Function) => {
    dispatch(
      facultyActions.getMajorRequest({
        onSuccess,
        onError,
      }),
    );
  };

  const getFacultyById = (
    id: number,
    onSuccess: Function,
    onError: Function,
  ) => {
    dispatch(
      facultyActions.getMajorByIdRequest({
        id,
        onSuccess,
        onError,
      }),
    );
  };

  return {
    getAllFaculty,
    getFacultyById,
    faculty,
    allFaculty,
  };
};

export {useFaculty};
