import React from 'react';

import { INotes } from '@types';

export const useNotes = () => {
  const ref = React.useRef<boolean>(true);
  const [notes] = React.useState<INotes[]>([]);
  const [loading] = React.useState<boolean>(true);
  React.useEffect(() => {
    if (ref.current) {
      ref.current = false;
    }
  }, []);
  return {
    notes,
    loading,
  };
};
