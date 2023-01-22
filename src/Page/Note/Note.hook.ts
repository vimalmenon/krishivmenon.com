import React from 'react';

import { INotes, PageModeType } from '@types';

export const useNote = (id: number) => {
  const [note, setNote] = React.useState<INotes>();
  const [loading] = React.useState<boolean>(true);
  const [mode, setMode] = React.useState<PageModeType>('EDIT');
  const updateNote = (content: string) => {
    setNote({
      sortKey: note?.sortKey || '',
      title: note?.title || '',
      content,
      metadata: note?.metadata || {},
    });
  };
  return {
    id,
    mode,
    note,
    loading,
    setNote,
    updateNote,
    setMode,
  };
};
