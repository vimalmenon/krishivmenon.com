import React from 'react';

import { useCommonApiContext } from '@context';
import { IGeneric, IGenericParam, IGenericReturn, INotes } from '@types';
import { apis } from '@utility';
import { useRouter } from 'next/router';

import { IUseNotes } from './Notes';

export const useNotes: IGenericReturn<IUseNotes> = () => {
  const ref = React.useRef<boolean>(true);
  const [notes, setNotes] = React.useState<INotes[]>([]);
  const [loading, setLoading] = React.useState<boolean>(true);
  const { makeApiCall } = useCommonApiContext();
  const { push } = useRouter();
  const getNotes: IGenericReturn<Promise<void>> = async () => {
    setLoading(true);
    const results = await makeApiCall<{ notes: INotes[] }>(apis.getNotes());
    setNotes(results.notes);
    setLoading(false);
  };
  const deleteNote: IGeneric<string, Promise<void>> = async (id) => {
    setLoading(true);
    await makeApiCall<{ notes: INotes[] }>(apis.deleteNote({ id }));
    setLoading(false);
  };
  const toNote: IGenericParam<string> = (id) => {
    push(`/notes/${id}`);
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
    toNote,
    deleteNote,
  };
};
