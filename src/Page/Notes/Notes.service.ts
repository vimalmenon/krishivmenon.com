import React from 'react';

import { useCommonApiContext } from '@context';
import { INotes } from '@types';
import { apis } from '@utility';

export const useNotes = () => {
  const ref = React.useRef<boolean>(true);
  const [notes, setNotes] = React.useState<INotes[]>([]);
  const [loading, setLoading] = React.useState<boolean>(true);
  const { makeApiCall } = useCommonApiContext();
  const getNotes = async () => {
    setLoading(true);
    const results = await makeApiCall<unknown, { notes: INotes[] }>(apis.getNotes());
    setNotes(results.notes);
    setLoading(false);
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
  };
};
