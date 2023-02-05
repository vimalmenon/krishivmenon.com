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
    await makeApiCall<INotes[]>(apis.deleteNote({ id }));
    setLoading(false);
  };
  const createNote: IGenericMethod = () => {
    setSelectedNote(emptyNote);
  };
  const onNoteSelect: IGenericParam<INotes> = (value) => {
    setSelectedNote(value);
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
    createNote,
    deleteNote,
    onNoteSelect,
    selectedNote,
  };
};
