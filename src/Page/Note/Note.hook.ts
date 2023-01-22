import React from 'react';

import { INotes, PageModeType } from '@types';

export const useNote = (id: number) => {
  const [note, setNote] = React.useState<INotes>();
  const [loading] = React.useState<boolean>(true);
  const [mode] = React.useState<PageModeType>('VIEW');
  const updateNote = (content: string) => {
    setNote({
      title: note?.title || '',
      content,
      metadata: note?.metadata || {},
    });
  };
  return {
    id,
    note,
    setNote,
    loading,
    updateNote,
    mode,
  };
};
