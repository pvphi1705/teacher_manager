import {useDispatch, useSelector} from 'react-redux';

import {noteActions} from '../stores/slices/noteSlice';

const useNote = () => {
  const dispatch = useDispatch();
  const notes = useSelector((state: any) => state.note).data || {};
  const addMessage = useSelector((state: any) => state.note).addResponse || '';

  const getListNotes = (
    teacherId: number,
    onSuccess: Function,
    onError: Function,
  ) => {
    dispatch(
      noteActions.getNoteRequest({
        teacherId,
        onSuccess,
        onError,
      }),
    );
  };

  const addNewNote = (
    title: string,
    note: string,
    time: string,
    categoryName: string,
    typeNote: string,
    teacherId: number,
    onSuccess: Function,
    onError: Function,
  ) => {
    const params = {
      title,
      note,
      time,
      categoryName,
      typeNote,
      teacherId,
    };
    dispatch(noteActions.addNoteRequest({params, onSuccess, onError}));
  };

  const deleteNote = (id: number, onSuccess: Function, onError: Function) => {
    dispatch(
      noteActions.deleteNoteRequest({
        id,
        onSuccess,
        onError,
      }),
    );
  };

  const updateNote = (
    id: number,
    title: string,
    note: string,
    time: string,
    categoryName: string,
    typeNote: string,
    teacherId: number,
    onSuccess: Function,
    onError: Function,
  ) => {
    const params = {
      id,
      title,
      note,
      time,
      categoryName,
      typeNote,
      teacherId,
    };
    dispatch(noteActions.updateNoteRequest({params, onSuccess, onError}));
  };

  const searchNote = (
    title: string,
    onSuccess: Function,
    onError: Function,
  ) => {
    dispatch(
      noteActions.searchNoteRequest({
        title,
        onSuccess,
        onError,
      }),
    );
  };

  return {
    getListNotes,
    notes,
    addNewNote,
    addMessage,
    deleteNote,
    updateNote,
    searchNote,
  };
};

export {useNote};
