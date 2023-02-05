import React from 'react';

import { useCommonApiContext } from '@context';
import { IGeneric, IGenericMethod, IGenericParam, IGenericReturn, INotes } from '@types';
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
  const { makeApiCall } = useCommonApiContext();
  const getNotes: IGenericReturn<Promise<void>> = async () => {
    setLoading(true);
    const results = await makeApiCall<INotes[]>(apis.getNotes());
    setNotes(results);
    setLoading(false);
  };
  const deleteNote: IGeneric<string, Promise<void>> = async (id) => {
    setLoading(true);
    const results = await makeApiCall<INotes[]>(apis.deleteNote({ id }));
    setNotes(results);
    setLoading(false);
  };
  const createNote: IGenericMethod = () => {
    setSelectedNote({
      title: '',
      content: '',
      metadata: {},
    });
  };
  const onNoteSelect: IGenericParam<INotes> = (value) => {
    setSelectedNote(value);
  };
  const updateNote = (name: string, value: string): void => {
    if (selectedNote) {
      setSelectedNote({
        ...selectedNote,
        [name]: value,
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
    }
  };
  React.useEffect(() => {
    if (ref.current) {
      getNotes();
      ref.current = false;
    }
  }, []);
  return {
    notes,
    loading,
    saveNote,
    updateNote,
    createNote,
    deleteNote,
    onNoteSelect,
    selectedNote,
  };
};
