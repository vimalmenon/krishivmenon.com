import React from 'react';

import { useCommonApiContext } from '@context';
import { INotes, PageModeType } from '@types';
import { apis } from '@utility';
import { useRouter } from 'next/router';

export const useNote = (id: string) => {
  const [note, setNote] = React.useState<INotes>({
    title: '',
    content: '',
    metadata: {},
  });
  const { push } = useRouter();
  const [loading, setLoading] = React.useState<boolean>(false);
  const [mode, setMode] = React.useState<PageModeType>(id === '0' ? 'ADD' : 'VIEW');
  const { makeApiCall } = useCommonApiContext();
  const ref = React.useRef<boolean>(true);
  const updateValue = (key: string, value: string) => {
    setNote({
      ...note,
      [key]: value,
    });
  };
  const getNote = async () => {
    setLoading(true);
    const result = await makeApiCall<unknown, INotes>(apis.getNote({ id }));
    push(`notes/${result.id}`);
    setLoading(false);
  };
  const saveNote = async () => {
    setLoading(true);
    await makeApiCall(apis.addNote(note));
    setLoading(false);
  };
  React.useEffect(() => {
    if (id) {
      if (ref.current && id !== '0') {
        getNote();
        ref.current = false;
      }
    }
  }, [id]);

  return {
    id,
    mode,
    note,
    loading,
    setNote,
    updateValue,
    saveNote,
    setMode,
  };
};
