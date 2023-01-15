import React from 'react';

import { StorageKey } from '@constant';
import { NotImplemented } from '@utility';

import { ILocalStorageProvider } from './LocalStorageProvider';

export const initialValue: ILocalStorageProvider = {
  storage: {},
  setStorage: NotImplemented,
};

export const LocalStorageContext = React.createContext<ILocalStorageProvider>(initialValue);

export const useCommonLocalStorage = () => {
  const { storage, setStorage } = React.useContext<ILocalStorageProvider>(LocalStorageContext);

  const saveStorage = (key: string, value: string) => {
    storage[key] = value;
    localStorage.setItem(StorageKey, JSON.stringify(storage));
    setStorage(storage);
  };
  return {
    saveStorage,
    storage,
  };
};
