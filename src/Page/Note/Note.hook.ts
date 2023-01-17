import React from 'react';

import { INotes } from '@types';

export const useNote = (id: number) => {
  const [note] = React.useState<INotes>();
  const [loading] = React.useState<boolean>(true);
  return {
    id,
    note,
    loading,
  };
};
