import React from 'react';

import { useCommonApiContext } from '@context';
import { INotes } from '@types';
import { apis } from '@utility';
import { useRouter } from 'next/router';

export const useNotes = () => {
  const ref = React.useRef<boolean>(true);
  const [notes, setNotes] = React.useState<INotes[]>([]);
  const [loading, setLoading] = React.useState<boolean>(true);
  const { makeApiCall } = useCommonApiContext();
  const { push } = useRouter();
  const getNotes = async () => {
    setLoading(true);
    const results = await makeApiCall<unknown, { notes: INotes[] }>(apis.getNotes());
    setNotes(results.notes);
    setLoading(false);
  };
  const deleteNote = async (id: string) => {
    setLoading(true);
    await makeApiCall<unknown, { notes: INotes[] }>(apis.deleteNote({ id }));
    setLoading(false);
  };
  const toNote = (id: string) => {
    push(`notes/${id}`);
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
