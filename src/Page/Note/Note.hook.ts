import React from 'react';

import { useCommonApiContext } from '@context';
import { IGeneric, IGenericReturn, INotes, PageModeType } from '@types';
import { apis } from '@utility';

import { IUseNote } from './Note';

export const useNote: IGeneric<string, IUseNote> = (id: string) => {
  const [note, setNote] = React.useState<INotes>({
    title: '',
    content: '',
    metadata: {},
  });
  const [loading, setLoading] = React.useState<boolean>(false);
  const [mode, setMode] = React.useState<PageModeType>(id === '0' ? 'ADD' : 'VIEW');
  const { makeApiCall } = useCommonApiContext();
  const ref = React.useRef<boolean>(true);
  const updateValue = (key: string, value: string): void => {
    setNote({
      ...note,
      [key]: value,
    });
  };
  const getNote: IGenericReturn<Promise<void>> = async () => {
    setLoading(true);
    const result = await makeApiCall<{ note: INotes }>(apis.getNote({ id }));
    setNote(result.note);
    setLoading(false);
  };
  const saveNote: IGenericReturn<Promise<void>> = async () => {
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
    updateValue,
    saveNote,
    setMode,
  };
};
