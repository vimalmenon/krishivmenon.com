import React from 'react';

import { useCommonApiContext } from '@context';
import { IGenericMethod, IGenericParam, IGenericReturn, INotes, PageModeType } from '@types';
import { apis } from '@utility';

import { IUseNotes } from './Notes';

const emptyNote: INotes = {
  title: '',
  content: '',
  metadata: {},
};

export const useNotes: IGenericReturn<IUseNotes> = () => {
  const ref = React.useRef<boolean>(true);
  const [notes, setNotes] = React.useState<INotes[]>([]);
  const [selectedNote, setSelectedNote] = React.useState<INotes | null>(null);
  const [loading, setLoading] = React.useState<boolean>(true);
  const [mode, setMode] = React.useState<PageModeType>('VIEW');
  const [confirmDelete, setConfirmDelete] = React.useState<INotes | null>(null);

  const { makeApiCall } = useCommonApiContext();
  const getNotes: IGenericReturn<Promise<void>> = async () => {
    setLoading(true);
    try {
      const results = await makeApiCall<INotes[]>(apis.getNotes());
      setNotes(results);
    } catch (error) {
      setNotes([]);
    }
    setLoading(false);
  };
  const deleteNote: IGenericReturn<Promise<void>> = async () => {
    if (confirmDelete) {
      setLoading(true);
      const results = await makeApiCall<INotes[]>(apis.deleteNote(confirmDelete.id || ''));
      setNotes(results);
      setConfirmDelete(null);
      setLoading(false);
    }
  };
  const createNote: IGenericMethod = () => {
    setSelectedNote(() => ({
      ...emptyNote,
    }));
    setMode('EDIT');
  };
  const onNoteSelect: IGenericParam<INotes> = (value) => {
    setSelectedNote(value);
    setMode('VIEW');
  };
  const onNoteEdit: IGenericMethod = () => {
    setMode('EDIT');
  };
  const updateNote = (name: string, value: string): void => {
    if (selectedNote) {
      setSelectedNote((selectedNote) => {
        if (selectedNote) {
          return {
            ...selectedNote,
            [name]: value,
          };
        }
        return null;
      });
    }
  };
  const saveNote: IGenericMethod = async () => {
    if (selectedNote) {
      setLoading(true);
      const results = await makeApiCall<INotes[]>(
        selectedNote.id ? apis.updateNote(selectedNote) : apis.addNote(selectedNote)
      );
      setNotes(results);
      setLoading(false);
      setMode('VIEW');
    }
  };
  const onNoteCancel: IGenericMethod = () => {
    setMode('VIEW');
    if (!selectedNote?.id) {
      setSelectedNote(null);
    }
  };
  const onDeleteCancel: IGenericMethod = () => {
    setConfirmDelete(null);
  };
  const onDeleteConfirm: IGenericParam<INotes> = (note) => {
    setConfirmDelete(note);
  };
  React.useEffect(() => {
    if (ref.current) {
      getNotes();
      ref.current = false;
    }
  }, []);
  return {
    mode,
    notes,
    loading,
    saveNote,
    onNoteEdit,
    updateNote,
    createNote,
    deleteNote,
    onNoteSelect,
    selectedNote,
    confirmDelete,
    onNoteCancel,
    onDeleteConfirm,
    onDeleteCancel,
  };
};
