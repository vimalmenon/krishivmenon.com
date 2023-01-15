import React from 'react';

import { StorageKey } from '@constant';
import { ReactChildren } from '@types';

import { LocalStorageContext } from './LocalStorageProvider.service';

export const LocalStorageProvider: React.FC<ReactChildren> = ({ children }) => {
  const [storage, setStorage] = React.useState<Record<string, string>>({});
  React.useEffect(() => {
    setStorage(JSON.parse(localStorage.getItem(StorageKey) || '{}'));
  }, []);
  return (
    <LocalStorageContext.Provider value={{ storage, setStorage }}>
      {children}
    </LocalStorageContext.Provider>
  );
};
